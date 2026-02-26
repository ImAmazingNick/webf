import fs from 'fs';
import path from 'path';

// Read .env manually
const envFile = fs.readFileSync('.env', 'utf8');
const envMatch = envFile.match(/^XAI_KEY=(.+)$/m);
const XAI_KEY = envMatch?.[1]?.trim();
if (!XAI_KEY) { console.error('XAI_KEY not set in .env'); process.exit(1); }

const imagePath = process.argv[2];
const prompt = process.argv[3];
const duration = parseInt(process.argv[4] || '6');
const outputPath = process.argv[5] || 'output-video.mp4';

if (!imagePath || !prompt) {
  console.error('Usage: node scripts/video-gen.mjs <image> <prompt> [duration] [output]');
  process.exit(1);
}

const imageData = fs.readFileSync(imagePath);
const base64 = imageData.toString('base64');
const ext = path.extname(imagePath).slice(1) === 'jpg' ? 'jpeg' : path.extname(imagePath).slice(1);
const dataUri = `data:image/${ext};base64,${base64}`;

console.log(`Starting video generation (${duration}s) from ${imagePath}...`);

// Step 1: Start generation
const startRes = await fetch('https://api.x.ai/v1/videos/generations', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${XAI_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'grok-imagine-video',
    prompt,
    image_url: dataUri,
    duration,
    aspect_ratio: '1:1',
    resolution: '720p',
  }),
});

const startData = await startRes.json();
if (!startData.request_id) {
  console.error('Failed to start generation:', JSON.stringify(startData));
  process.exit(1);
}

const requestId = startData.request_id;
console.log(`Request ID: ${requestId}`);
console.log('Polling for completion...');

// Step 2: Poll until done
let attempts = 0;
const maxAttempts = 120; // 10 minutes max
while (attempts < maxAttempts) {
  await new Promise(r => setTimeout(r, 5000)); // 5s interval
  attempts++;

  const pollRes = await fetch(`https://api.x.ai/v1/videos/${requestId}`, {
    headers: { 'Authorization': `Bearer ${XAI_KEY}` },
  });
  const pollData = await pollRes.json();

  if (pollData.status === 'done') {
    const videoUrl = pollData.video?.url;
    console.log(`Done! Video URL: ${videoUrl}`);

    // Download video
    const videoRes = await fetch(videoUrl);
    const videoBuffer = Buffer.from(await videoRes.arrayBuffer());
    fs.writeFileSync(outputPath, videoBuffer);
    console.log(`Saved to ${outputPath} (${(videoBuffer.length / 1024 / 1024).toFixed(1)}MB)`);
    process.exit(0);
  } else if (pollData.status === 'expired' || pollData.error) {
    console.error('Generation failed:', JSON.stringify(pollData));
    process.exit(1);
  } else {
    process.stdout.write(`  [${attempts * 5}s] ${pollData.status || 'pending'}...\r`);
  }
}

console.error('Timed out after 10 minutes');
process.exit(1);

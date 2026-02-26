import { TILT_PERSPECTIVE, TILT_MAX_X, TILT_MAX_Y } from './constants';

export function calculateTilt(
  clientX: number,
  clientY: number,
  rect: DOMRect,
): { rotateX: number; rotateY: number; transform: string } {
  const x = (clientX - rect.left) / rect.width - 0.5;
  const y = (clientY - rect.top) / rect.height - 0.5;
  const rotateX = -y * TILT_MAX_X;
  const rotateY = x * TILT_MAX_Y;
  return {
    rotateX,
    rotateY,
    transform: `perspective(${TILT_PERSPECTIVE}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
  };
}

export function resetTilt(): string {
  return `perspective(${TILT_PERSPECTIVE}px) rotateX(0deg) rotateY(0deg)`;
}

export function map(current, in_min, in_max, out_min, out_max) {
  const mapped = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return clamp(mapped, out_min, out_max);
}

export function clamp(input, min, max) {
  return input < min ? min : input > max ? max : input;
}

export function easeInOutQuad(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

export function easeInOut(t){
  return t > 0.5 ? 4*Math.pow((t-1),2)+1 : 4*Math.pow(t,2);
}
export function randomRange(range?: number[], fallbackMin = 5000, fallbackMax = 15000) {
  const [min = fallbackMin, max = fallbackMax] = Array.isArray(range) ? range : [];
  return min + Math.random() * (max - min);
}

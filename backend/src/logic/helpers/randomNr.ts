export default function randomNr(min: number, max: number): number | undefined {
  if (min > max) return

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

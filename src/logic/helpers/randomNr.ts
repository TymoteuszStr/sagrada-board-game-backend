export default function randomNr(min: number, max: number): number {
  if (min > max) {
    const buffMax = max;
    max = min;
    min = buffMax;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getFewUniqueRandomNumbers(
  amount: number,
  min: number,
  max: number
) {
  const randomNumbers: number[] = [];
  while (randomNumbers.length < amount) {
    const newRandomNr = randomNr(min, max);
    if (!randomNumbers.includes(newRandomNr)) randomNumbers.push(newRandomNr);
  }

  return randomNumbers;
}

import { PublicTargetCards } from '../assets/publicTargetCards';
import PublicTargetCard from '../game/publicTargetCard';
import randomNr from './randomNr';

export function drawPublicTargetCards(): PublicTargetCard[] {
  const randomCards: PublicTargetCard[] = []

  while (randomCards.length !== 3) {
    const randomIndex = randomNr(1, PublicTargetCards.length - 1)
    if (!randomCards.includes(PublicTargetCards[randomIndex])) randomCards.push(PublicTargetCards[randomIndex])
  }

  return randomCards

}
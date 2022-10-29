import { PublicTargetCards } from '../assets/publicTargetCards';
import PublicTargetCard from '../game/publicTargetCard';
import randomNr from './randomNr';
import { PUBLIC_TARGET_CARDS_NR } from '../assets/constants';

export function drawPublicTargetCards(): PublicTargetCard[] {
  const randomCards: PublicTargetCard[] = []

  while (randomCards.length !== PUBLIC_TARGET_CARDS_NR) {
    const randomIndex = randomNr(1, PublicTargetCards.length - 1)
    if (!randomCards.includes(PublicTargetCards[randomIndex])) randomCards.push(PublicTargetCards[randomIndex])
  }

  return randomCards

}
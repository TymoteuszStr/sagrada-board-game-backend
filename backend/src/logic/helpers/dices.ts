import Dice from '../game/dice';
import { ColorEnum } from './colorEnum';
import randomNr from './randomNr';
import { SINGLE_COLOR_DICES_NR_FOR_2, SINGLE_COLOR_DICES_NR_FOR_3, SINGLE_COLOR_DICES_NR_FOR_4, SINGLE_DRAW_DICES_NR_FOR_2, SINGLE_DRAW_DICES_NR_FOR_3 } from '../assets/constants';

export function setupDices(playersNr: number): Dice[] {
  const dices: Dice[] = []
  let singleColorDicesNr = 0

  switch (playersNr) {
    case 2:
      singleColorDicesNr = SINGLE_COLOR_DICES_NR_FOR_2
      break;
    case 3:
      singleColorDicesNr = SINGLE_COLOR_DICES_NR_FOR_3
      break;
    case 4:
      singleColorDicesNr = SINGLE_COLOR_DICES_NR_FOR_4
      break;
  }

  Object.values(ColorEnum).forEach((color) => {
    for (let dice = 0;dice < singleColorDicesNr;dice++) {
      dices.push(new Dice(dice, color as ColorEnum))
    }
  })

  return dices
}

export function pullAndRollDices(dieces: Dice[], playersNr: number): Dice[] {
  let randomDices: Dice[] = []
  let numberOfDices: number = 0
  switch (playersNr) {
    case 2:
      numberOfDices = SINGLE_DRAW_DICES_NR_FOR_2
      break;
    case 3:
      numberOfDices = SINGLE_DRAW_DICES_NR_FOR_3
      break;
    case 4:
      numberOfDices = SINGLE_DRAW_DICES_NR_FOR_3
      break;
  }

  for (let i = 0;i < numberOfDices;i++) {
    const randomIndex = randomNr(0, dieces.length - 1)
    randomDices.push(dieces[randomIndex])
    dieces.splice(randomIndex, 1)
  }

  return randomDices
}




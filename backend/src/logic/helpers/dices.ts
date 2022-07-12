import Dice from '../game/dice';
import { ColorEnum } from './ColorEnum';

export function setupDices(playersNr: number): Dice[] {
  const dices: Dice[] = []
  let singleColorDicesNr = 0

  switch (playersNr) {
    case 2:
      singleColorDicesNr = 10
      break;
    case 3:
      singleColorDicesNr = 14
      break;
    case 4:
      singleColorDicesNr = 18
      break;
  }

  Object.values(ColorEnum).forEach((color) => {
    for (let dice = 0;dice < singleColorDicesNr;dice++) {
      dices.push(new Dice(dice, color as ColorEnum))
    }
  })

  return dices
}

export function pullAndRollDices(dieces: Dice[], playersNr: number) {
  let numberOfDices: number = 0
  switch (playersNr) {
    case 2:
      numberOfDices = 5
      break;
    case 3:
      numberOfDices = 7
      break;
    case 4:
      numberOfDices = 9
      break;
  }

  //dopisać losowanie



}
import Dice from '../game/dice';
import { ColorEnum } from './ColorEnum';
import randomNr from './randomNr';

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

export function pullAndRollDices(dieces: Dice[], playersNr: number): Dice[] {
  let randomDices: Dice[] = []
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

  for (let i = 0;i < numberOfDices;i++) {
    const randomIndex = randomNr(0, dieces.length - 1)
    randomDices.push(dieces[randomIndex])
    dieces.splice(randomIndex, 1)
  }

  return randomDices
}




import { ColorEnum } from '../helpers/colorEnum';
import randomNr from '../helpers/randomNr';
import { DICE_SCORE_MIN, DICE_SCORE_MAX } from '../assets/constants';

export default class Dice {

  constructor(id: number, color: ColorEnum) {
    this._id = id
    this._color = color
  }

  private _id: number
  private _color: ColorEnum
  private _score: number | undefined

  get id(): number {
    return this._id
  }
  get color(): ColorEnum {
    return this._color
  }

  get score(): number | undefined {
    return this._score
  }

  throw(): number {
    this._score = randomNr(DICE_SCORE_MIN, DICE_SCORE_MAX);
    return this._score
  }


}
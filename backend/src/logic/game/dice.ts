import { ColorEnum } from '../helpers/colorEnum';
import randomNr from '../helpers/randomNr';

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
    this._score = randomNr(1, 6);
    return this._score
  }


}
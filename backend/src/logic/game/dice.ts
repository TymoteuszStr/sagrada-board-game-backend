import { ColorEnum } from '../helpers/ColorEnum';

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
    this._score = Math.floor(Math.random() * (6 - 1)) + 1;
    return this._score
  }


}
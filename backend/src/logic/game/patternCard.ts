import { PatternCardEnum } from '../helpers/patternCards';
import { PatternType } from '../helpers/IPattern';
import Dice from './dice';
import { findAllPossibleIds } from '../helpers/findAllPossibleIds';


export default class PatternCard {
  constructor(key: PatternCardEnum, name: string, favorTokens: number, pattren: PatternType) {
    this._key = key
    this._name = name
    this._favorTokens = favorTokens
    this._pattern = pattren
  }

  private _key: PatternCardEnum
  private _name: string
  private _favorTokens: number
  private _pattern: PatternType

  get key() { return this._key }
  get name() { return this._name }
  get favorTokens() { return this._favorTokens }
  get pattern() { return this._pattern }

  putDice(id: number, dice: Dice): boolean {
    const possibilityIds = findAllPossibleIds(this._pattern)

    if (this._pattern[id].color === dice.color && this._pattern[id].score === dice.score && possibilityIds.includes(id)) {
      this._pattern[id].dice = dice
      return true
    } else return false


  }


}
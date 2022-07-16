import PatternCard from "./patternCard"
import { ColorEnum } from '../helpers/colorEnum';


export default class Player {

  public constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
  readonly id: string
  readonly name: string
  private _patternCard: PatternCard | undefined
  private _individualTarget: ColorEnum | undefined
  private _usedFavorTokens: number = 0
  points: number = 0

  get usedFavorTokens(): number {
    return this._usedFavorTokens
  }


  get individualTarget(): ColorEnum | undefined {
    return this._individualTarget
  }
  set individualTarget(arg: ColorEnum | undefined) {
    this._individualTarget = arg
  }

  get patternCard(): PatternCard | undefined {
    return this._patternCard
  }
  set patternCard(arg: PatternCard | undefined) {
    this._patternCard = arg
  }


  useFavorToken(arg: number): void {
    if (this.canUseFavorTokens(arg))
      this._usedFavorTokens += arg
  }

  canUseFavorTokens(arg: number): boolean {
    if (this._patternCard && this._usedFavorTokens + arg > this._patternCard.favorTokens) return false
    else return true
  }

}
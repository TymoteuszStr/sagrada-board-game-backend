import { PatternCardEnum } from '../helpers/patternCards';
import { IPattern, PatternType } from '../helpers/IPattern';

export default class PatternCard {
  constructor(key: PatternCardEnum, name: string, favorTokens: number, pattern: PatternType) {
    this.key = key
    this.name = name
    this.favorTokens = favorTokens
    this.pattern = pattern
  }

  key: PatternCardEnum
  name: string
  favorTokens: number
  pattern: PatternType

}
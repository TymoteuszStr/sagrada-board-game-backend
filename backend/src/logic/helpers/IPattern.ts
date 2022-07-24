import { ColorEnum } from './colorEnum';
import { FieldTypeEnum } from './fieldTypeEnum';
import Dice from '../game/dice';

export interface IPattern {
  readonly id: number,
  readonly type: FieldTypeEnum | undefined
  readonly color?: ColorEnum | undefined;
  readonly score?: number | undefined
  dice: Dice | undefined;
}


export type PatternType = [
  IPattern, IPattern, IPattern, IPattern, IPattern,
  IPattern, IPattern, IPattern, IPattern, IPattern,
  IPattern, IPattern, IPattern, IPattern, IPattern,
  IPattern, IPattern, IPattern, IPattern, IPattern,
]

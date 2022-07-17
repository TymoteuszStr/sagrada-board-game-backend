import { ColorEnum } from './colorEnum';
import { FieldTypeEnum } from './fieldTypeEnum';

export interface IPattern {
  readonly id: string,
  readonly type: FieldTypeEnum
  readonly color?: ColorEnum | undefined;
  readonly score?: number | undefined;
}

export type PatternType = [
  [IPattern, IPattern, IPattern, IPattern, IPattern],
  [IPattern, IPattern, IPattern, IPattern, IPattern],
  [IPattern, IPattern, IPattern, IPattern, IPattern],
  [IPattern, IPattern, IPattern, IPattern, IPattern],
]
import PatternCard from '../game/patternCard';
import { PatternCardEnum } from '../helpers/patternCards';
import { FieldTypeEnum as FTE, } from '../helpers/fieldTypeEnum';
import { ColorEnum as CE, } from '../helpers/colorEnum';

export const patternCards: PatternCard[] = [
  new PatternCard(PatternCardEnum.pattern0, 'Dwa światy', 5,
    [
      { id: 0, type: FTE.empty, dice: undefined }, { id: 1, type: FTE.empty, dice: undefined }, { id: 2, type: FTE.empty, dice: undefined }, { id: 3, type: FTE.color, color: CE.red, dice: undefined }, { id: 4, type: FTE.score, score: 5, dice: undefined },
      { id: 5, type: FTE.empty, dice: undefined }, { id: 6, type: FTE.empty, dice: undefined }, { id: 7, type: FTE.color, color: CE.purple, dice: undefined }, { id: 8, type: FTE.score, score: 4, dice: undefined }, { id: 9, type: FTE.color, color: CE.blue, dice: undefined },
      { id: 10, type: FTE.empty, dice: undefined }, { id: 11, type: FTE.color, color: CE.blue, dice: undefined }, { id: 12, type: FTE.score, score: 3, dice: undefined }, { id: 13, type: FTE.color, color: CE.yellow, dice: undefined }, { id: 14, type: FTE.score, score: 6, dice: undefined },
      { id: 15, type: FTE.color, color: CE.yellow, dice: undefined }, { id: 16, type: FTE.score, score: 2, dice: undefined }, { id: 17, type: FTE.color, color: CE.green, dice: undefined }, { id: 18, type: FTE.score, score: 1, dice: undefined }, { id: 19, type: FTE.color, color: CE.red, dice: undefined },
    ]),
  new PatternCard(PatternCardEnum.pattern1, 'Wirujące krople', 3,
    [
      { id: 0, type: FTE.empty, dice: undefined }, { id: 1, type: FTE.score, score: 4, dice: undefined }, { id: 2, type: FTE.empty, dice: undefined }, { id: 3, type: FTE.color, color: CE.yellow, dice: undefined }, { id: 4, type: FTE.score, score: 6, dice: undefined },
      { id: 5, type: FTE.color, color: CE.red, dice: undefined }, { id: 6, type: FTE.empty, dice: undefined }, { id: 7, type: FTE.score, score: 2, dice: undefined }, { id: 8, type: FTE.empty, dice: undefined }, { id: 9, type: FTE.empty, dice: undefined },
      { id: 10, type: FTE.empty, dice: undefined }, { id: 11, type: FTE.empty, dice: undefined }, { id: 12, type: FTE.color, color: CE.red, dice: undefined }, { id: 13, type: FTE.color, color: CE.purple, dice: undefined }, { id: 14, type: FTE.score, score: 1, dice: undefined },
      { id: 15, type: FTE.color, color: CE.blue, dice: undefined }, { id: 16, type: FTE.color, color: CE.yellow, dice: undefined }, { id: 17, type: FTE.empty, dice: undefined }, { id: 18, type: FTE.empty, dice: undefined }, { id: 19, type: FTE.empty, dice: undefined },
    ]),
]


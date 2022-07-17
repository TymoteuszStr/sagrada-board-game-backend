import PatternCard from '../game/patternCard';
import { PatternCardEnum } from '../helpers/patternCards';
import { FieldTypeEnum as FTE } from '../helpers/fieldTypeEnum';
import { ColorEnum as CE } from '../helpers/colorEnum';

export const patternCards: PatternCard[] = [
  new PatternCard(PatternCardEnum.pattern0, 'Dwa światy', 5,
    [
      [{ id: 'a0', type: FTE.empty }, { id: 'a1', type: FTE.empty }, { id: 'a2', type: FTE.empty }, { id: 'a3', type: FTE.color, color: CE.red }, { id: 'a4', type: FTE.score, score: 5 }],
      [{ id: 'b0', type: FTE.empty }, { id: 'b1', type: FTE.empty }, { id: 'b2', type: FTE.color, color: CE.purple }, { id: 'b3', type: FTE.score, score: 4 }, { id: 'b4', type: FTE.color, color: CE.blue }],
      [{ id: 'c0', type: FTE.empty }, { id: 'c1', type: FTE.color, color: CE.blue }, { id: 'c2', type: FTE.score, score: 3 }, { id: 'c3', type: FTE.color, color: CE.yellow }, { id: 'c4', type: FTE.score, score: 6 }],
      [{ id: 'd0', type: FTE.color, color: CE.yellow }, { id: 'd1', type: FTE.score, score: 2 }, { id: 'd2', type: FTE.color, color: CE.green }, { id: 'd3', type: FTE.score, score: 1 }, { id: 'd4', type: FTE.color, color: CE.red }],
    ]),
  new PatternCard(PatternCardEnum.pattern1, 'Wirujące krople', 3,
    [
      [{ id: 'a0', type: FTE.empty }, { id: 'a1', type: FTE.score, score: 4 }, { id: 'a2', type: FTE.empty }, { id: 'a3', type: FTE.color, color: CE.yellow }, { id: 'a4', type: FTE.score, score: 6 }],
      [{ id: 'b0', type: FTE.color, color: CE.red }, { id: 'b1', type: FTE.empty }, { id: 'b2', type: FTE.score, score: 2 }, { id: 'b3', type: FTE.empty }, { id: 'b4', type: FTE.empty }],
      [{ id: 'c0', type: FTE.empty }, { id: 'c1', type: FTE.empty }, { id: 'c2', type: FTE.color, color: CE.red }, { id: 'c3', type: FTE.color, color: CE.purple }, { id: 'c4', type: FTE.score, score: 1 }],
      [{ id: 'd0', type: FTE.color, color: CE.blue }, { id: 'd1', type: FTE.color, color: CE.yellow }, { id: 'd2', type: FTE.empty }, { id: 'd3', type: FTE.empty }, { id: 'd4', type: FTE.empty }],
    ]),
]


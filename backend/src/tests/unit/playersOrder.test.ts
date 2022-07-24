import { setPlayersOrder, setNextOrder } from '../../logic/helpers/playersOrder';
import Player from '../../logic/game/player';


const players4: Player[] = [new Player('1', 'player1'), new Player('2', 'player2'), new Player('3', 'player3'), new Player('4', 'player4')]
const players3: Player[] = [new Player('1', 'player1'), new Player('2', 'player2'), new Player('3', 'player3')]
const players2: Player[] = [new Player('1', 'player1'), new Player('2', 'player2')]
test('seting player order', () => {
  expect(setPlayersOrder(players4)).toStrictEqual(['1', '2', '3', '4', '4', '3', '2', '1'])
  expect(setPlayersOrder(players3)).toStrictEqual(['1', '2', '3', '3', '2', '1'])
  expect(setPlayersOrder(players2)).toStrictEqual(['1', '2', '2', '1'])
})

test('new round  order ', () => {
  expect(setNextOrder(['1', '2', '3', '4', '4', '3', '2', '1'])).toStrictEqual(['2', '3', '4', '1', '1', '4', '3', '2'])
  expect(setNextOrder(['1', '2', '3', '3', '2', '1'])).toStrictEqual(['2', '3', '1', '1', '3', '2'])
  expect(setNextOrder(['1', '2', '2', '1'])).toStrictEqual(['2', '1', '1', '2'])
})

import Player from '../game/player';

export function setPlayersOrder(players: Player[]): string[] {
  const order: string[] = [];

  for (let i = 0;i < players.length;i++) {
    order.push(players[i].id)
  }
  for (let i = players.length - 1;i >= 0;i--) {
    order.push(players[i].id)
  }

  return order
}

export function setNextOrder(order: string[]): string[] {
  const playersNr = order.length / 2
  const currentOrder = order.slice(0, playersNr)
  const nextOrder: string[] = []

  for (let i = 0;i < currentOrder.length;i++) {
    nextOrder.push(currentOrder[i])
  }
  for (let i = currentOrder.length - 1;i >= 0;i--) {
    nextOrder.push(currentOrder[i])
  }
  return nextOrder
}
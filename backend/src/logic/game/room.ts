import Player from './player';
export default class Room {

  constructor(name: string, player: Player, adminId: string) {
    this.players.push(player)
    this.name = name
    this.adminId = adminId
  }
  readonly name: string
  adminId: string;
  players: Player[] = []


  addPlayer(player: Player): boolean {
    if (this.players.length >= 4) return false

    this.players.push(player)
    return true
  }

  removePlayer(playerId: string) {
    this.players = this.players.filter(({ id }) => id !== playerId)
  }

}
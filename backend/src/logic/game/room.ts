export default class Room {

  constructor(name: string, playerId: string, adminId: string) {
    this.players.push(playerId)
    this.name = name
    this.adminId = adminId
  }
  name: string
  players: string[] = []
  adminId: string;


  addPlayer(playerId: string): boolean {
    if (this.players.length >= 4) return false

    this.players.push(playerId)
    return true
  }

  removePlayer(playerId: string) {
    this.players = this.players.filter((id) => id !== playerId)
  }

}
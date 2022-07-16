import { PublicTargetCardEnum } from '../helpers/publicTargetCardEnum';

export default class PublicTargetCard {

  constructor(key: PublicTargetCardEnum, points: number, name: string, description: string, image: string = '') {
    this.key = key
    this.points = points
    this.name = name
    this.description = description
    this.image = image
  }
  readonly key: PublicTargetCardEnum
  readonly points: number
  readonly name: string
  readonly description: string
  readonly image: string

}
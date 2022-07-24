import Dice from './dice';
import { setupDices } from "../helpers/dices";
import PublicTargetCard from './publicTargetCard';
import { drawPublicTargetCards } from '../helpers/drawPublicTargetCards';

export default class Game {

  constructor(playersNr: number) {
    this.dices = setupDices(playersNr)
    this.toolsCards = [] // drawToolCards()
    this.publicTargetCards = drawPublicTargetCards()
  }

  dices: Dice[]
  toolsCards: any //zmienić typ po dodaniu klasy toolCard
  publicTargetCards: PublicTargetCard[]
  currentRoundNr = 0






}
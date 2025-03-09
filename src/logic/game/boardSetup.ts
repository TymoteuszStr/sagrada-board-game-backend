import {
  PUBLIC_TARGET_CARDS_NR,
  SINGLE_COLOR_DICES_NR_FOR_2,
  SINGLE_COLOR_DICES_NR_FOR_3,
  SINGLE_COLOR_DICES_NR_FOR_4,
  SINGLE_DRAW_DICES_NR_FOR_2,
  SINGLE_DRAW_DICES_NR_FOR_3,
  SINGLE_DRAW_DICES_NR_FOR_4,
} from "../assets/constants";
import { PublicTargetCards } from "../assets/publicTargetCards";
import Dice from "./dice";
import PublicTargetCard from "./publicTargetCard";
import { ColorEnum } from "../helpers/colorEnum";
import randomNr, { getFewUniqueRandomNumbers } from "../helpers/randomNr";

export class BoardSetup {
  publicTargeCards: PublicTargetCard[];
  dices: Dice[] = [];
  tools: unknown[] = [];
  private playersNumber;
  constructor(playersNr: number) {
    this.playersNumber = playersNr;
    this.publicTargeCards = [];
    this.setupPublicTargets();
    this.setupTools();
    this.setupDices();
  }

  private setupPublicTargets(): void {
    const randomNumbers = getFewUniqueRandomNumbers(
      PUBLIC_TARGET_CARDS_NR,
      1,
      PublicTargetCards.size
    );
    randomNumbers.forEach((nr: number) => {
      const newCard = PublicTargetCards.get(nr);
      console.log("newCard", newCard);
      if (newCard !== undefined) this.publicTargeCards.push(newCard);
      else throw new Error("Card cannond be undefined");
    });
  }

  private setupTools(): void {
    // Implementation details
    console.log("tools");
  }

  private setupDices() {
    let singleColorDicesNr = 0;

    switch (this.playersNumber) {
      case 2:
        singleColorDicesNr = SINGLE_COLOR_DICES_NR_FOR_2;
        break;
      case 3:
        singleColorDicesNr = SINGLE_COLOR_DICES_NR_FOR_3;
        break;
      case 4:
        singleColorDicesNr = SINGLE_COLOR_DICES_NR_FOR_4;
        break;
    }

    Object.values(ColorEnum).forEach((color) => {
      for (let dice = 0; dice < singleColorDicesNr; dice++) {
        this.dices.push(new Dice(dice, color as ColorEnum));
      }
    });
  }

  pullDices() {
    let randomDices: Dice[] = [];
    let numberOfDices: number = 0;
    switch (this.playersNumber) {
      case 2:
        numberOfDices = SINGLE_DRAW_DICES_NR_FOR_2;
        break;
      case 3:
        numberOfDices = SINGLE_DRAW_DICES_NR_FOR_3;
        break;
      case 4:
        numberOfDices = SINGLE_DRAW_DICES_NR_FOR_4;
        break;
    }

    for (let i = 0; i < numberOfDices; i++) {
      const randomIndex = randomNr(0, this.dices.length - 1);
      randomDices.push(this.dices[randomIndex]);
      this.dices.splice(randomIndex, 1);
    }

    return randomDices;
  }

  getCardSetup() {
    return {
      tools: this.tools,
      publicTargeCards: this.publicTargeCards,
    };
  }
}

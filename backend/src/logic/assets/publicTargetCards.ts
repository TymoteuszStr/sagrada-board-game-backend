import PublicTargetCard from '../game/publicTargetCard';
import { PublicTargetCardEnum } from '../helpers/publicTargetCardEnum';


export const PublicTargetCards: PublicTargetCard[] = [
  new PublicTargetCard(PublicTargetCardEnum.colorsVariety, 4, 'Różnorodność kolorów', 'Zestawy, w którym znajdują się kostki wszystkich dostępnych kolorów.'),
  new PublicTargetCard(PublicTargetCardEnum.colorsVarietyInRow, 6, 'Różnorodność kolorów w rzędzie', 'Rzędy z niepowtarzającymi się kolorami.'),
  new PublicTargetCard(PublicTargetCardEnum.colorsVarietyInColumn, 5, 'Różnorodność kolorów w kolumnie', 'Kolumny z niepowtarzającymi się kolorami.'),
  new PublicTargetCard(PublicTargetCardEnum.shadeVariety, 5, 'Różnorodność odcieni', 'Każdy zestaw kostek o wartościach od 1 do 6 w całym witrażu.'),
  new PublicTargetCard(PublicTargetCardEnum.shadeVarietyInRow, 5, 'Różnorodność odcieni w rzędzie', 'Rzędy z niepowtarzającymi się wratościami kostek.'),
  new PublicTargetCard(PublicTargetCardEnum.shadeVarietyInColumn, 4, 'Różnorodność odcieni w kolumnie', 'Kolumny z niepowtarzającymi się wartościami kostek.'),
  new PublicTargetCard(PublicTargetCardEnum.brightShade, 2, 'Jasne odcienie', 'Każdy zestaw kostek o wartościach 1 i 2 w całym witrażu.'),
  new PublicTargetCard(PublicTargetCardEnum.midShade, 2, 'Pośrednie odcienie', 'Każdy zestaw kostek o wartościach 3 i 4 w całym witrażu.'),
  new PublicTargetCard(PublicTargetCardEnum.darkShade, 2, 'Ciemne odcienie', 'Każdy zestaw kostek o wartościach 5 i 6 w całym witrażu.'),
  // new PublicTargetCard(PublicTargetCardEnum.colorfulDiagonal, '#','Kolorowe przekątne', 'Suma kostek tego samego kolory które stykają się rogami.')
]


import { CardRarity } from "model/jukebox.model"
import { Dimensions, ImageSourcePropType } from "react-native"


const { width: SCREEN_WIDTH } = Dimensions.get('window')


export const CARD_WIDTH = SCREEN_WIDTH * 0.6

export const CARD_HEIGHT = SCREEN_WIDTH * 0.9

export const getBackImage = (rarity: CardRarity): ImageSourcePropType => ({
    [CardRarity.COMMON]: require('@/assets/images/card/card-back-common.png'),
    [CardRarity.GOLD]: require('@/assets/images/card/card-back-gold.png'),
    [CardRarity.PLATINUM]: require('@/assets/images/card/card-back-platinum.png'),
  }[rarity])
  
 export  const getFrontImage = (rarity: CardRarity): ImageSourcePropType => ({
    [CardRarity.COMMON]: require('@/assets/images/card/card-common.png'),
    [CardRarity.GOLD]: require('@/assets/images/card/card-gold.png'),
    [CardRarity.PLATINUM]: require('@/assets/images/card/card-platinum.png'),
  }[rarity])
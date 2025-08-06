export enum CardRarity {
    COMMON = "COMMON",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM",
  }
  
  export type Card = {
    id: string;
    rarity: CardRarity;
  };
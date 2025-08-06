/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EquipmentGift } from './EquipmentGift';
import type { GenericCardRewards } from './GenericCardRewards';
import type { SpecificGiftCard } from './SpecificGiftCard';
import type { VinylResources } from './VinylResources';
export type GiftResources = {
    genericCards?: GenericCardRewards;
    specificCards?: Array<SpecificGiftCard>;
    equipment?: EquipmentGift;
    vinyls?: VinylResources;
    cubble?: number;
};


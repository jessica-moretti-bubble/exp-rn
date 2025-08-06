/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EquipmentReward } from './EquipmentReward';
import type { GenericCardRewards } from './GenericCardRewards';
import type { SpecificCardRewards } from './SpecificCardRewards';
import type { VinylResources } from './VinylResources';
export type CompetitionReward = {
    genericCards?: GenericCardRewards;
    specificCards?: Array<SpecificCardRewards>;
    equipment?: Array<EquipmentReward>;
    vinyls?: VinylResources;
    cubble?: number;
    stickersAmount?: number;
    /**
     * The rank threshold, as a percentage, to obtain the reward.
     * The rank is calculated based on the score.
     *
     */
    rankThreshold: number;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardInBand } from './CardInBand';
import type { EquipmentType } from './EquipmentType';
export type CompetitionArtistEquipmentScore = {
    equipment: EquipmentType;
    score: number;
    /**
     * The equipment is equipped by another artist (if specified)
     */
    artist?: CardInBand;
};


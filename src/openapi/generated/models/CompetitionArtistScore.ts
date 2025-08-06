/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompetitionArtistEquipmentScore } from './CompetitionArtistEquipmentScore';
import type { CompetitionParameterScore } from './CompetitionParameterScore';
import type { RarityScore } from './RarityScore';
import type { SpecialSkillScore } from './SpecialSkillScore';
export type CompetitionArtistScore = {
    competitionParameter: CompetitionParameterScore;
    rarity: RarityScore;
    equipments: Array<CompetitionArtistEquipmentScore>;
    frontman: number;
    specialSkill: SpecialSkillScore;
    totalScore: number;
};


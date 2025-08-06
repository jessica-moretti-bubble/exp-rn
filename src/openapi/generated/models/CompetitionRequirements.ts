/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BirthRegionCompetitionRequirement } from './BirthRegionCompetitionRequirement';
import type { CompetitionExpRequirements } from './CompetitionExpRequirements';
import type { CompetitionFanRequirements } from './CompetitionFanRequirements';
import type { GenderIdentity } from './GenderIdentity';
import type { Genre } from './Genre';
import type { ZodiacSignCompetitionRequirement } from './ZodiacSignCompetitionRequirement';
export type CompetitionRequirements = {
    fanRequirements?: CompetitionFanRequirements;
    expRequirements?: CompetitionExpRequirements;
    genreRequirements?: Array<Genre>;
    genderIdentityRequirements?: GenderIdentity;
    zodiacSignRequirement?: ZodiacSignCompetitionRequirement;
    birthRegionRequirement?: BirthRegionCompetitionRequirement;
};


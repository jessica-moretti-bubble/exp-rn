/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Competition } from './Competition';
import type { CompetitionBand } from './CompetitionBand';
import type { CompetitionRewardsCheckpoints } from './CompetitionRewardsCheckpoints';
export type CompetitionDetails = (Competition & {
    rewardsCheckpoints?: CompetitionRewardsCheckpoints;
    band: CompetitionBand;
});


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompetitionRequirements } from './CompetitionRequirements';
import type { CompetitionRewards } from './CompetitionRewards';
import type { CompetitionType } from './CompetitionType';
import type { DateTime } from './DateTime';
export type NewCompetition = {
    name: string;
    description?: string;
    startDate: DateTime;
    endDate: DateTime;
    competitionType: CompetitionType;
    rewards?: CompetitionRewards;
    requirements?: CompetitionRequirements;
    bandSize: number;
};


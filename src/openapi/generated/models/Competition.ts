/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompetitionRequirements } from './CompetitionRequirements';
import type { CompetitionRewards } from './CompetitionRewards';
import type { CompetitionStatus } from './CompetitionStatus';
import type { CompetitionType } from './CompetitionType';
import type { Timestamp } from './Timestamp';
export type Competition = {
    id: string;
    name: string;
    description?: string;
    startDate: Timestamp;
    endDate: Timestamp;
    competitionType: CompetitionType;
    rewards?: CompetitionRewards;
    status: CompetitionStatus;
    nParticipants: number;
    requirements?: CompetitionRequirements;
    bandSize: number;
};


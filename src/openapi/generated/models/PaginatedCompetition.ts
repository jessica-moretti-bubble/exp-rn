/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Competition } from './Competition';
export type PaginatedCompetition = (Competition & {
    isPartecipating: boolean;
    /**
     * Available only for terminated competitions
     */
    rewardsClaimed?: boolean;
});


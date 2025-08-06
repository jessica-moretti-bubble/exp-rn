/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublicUserInfo } from './PublicUserInfo';
import type { UserRole } from './UserRole';
export type UserInfo = (PublicUserInfo & {
    email: string;
    managerXP: number;
    userRole: UserRole;
    artistHeadshot?: string;
    nPlayedCompetitions: number;
    referralCode: string;
    friendReferralCode?: string;
});


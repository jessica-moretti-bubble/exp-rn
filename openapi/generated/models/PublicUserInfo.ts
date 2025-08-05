/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ManagerLevel } from './ManagerLevel';
import type { ProfileCollectionInfo } from './ProfileCollectionInfo';
import type { Timestamp } from './Timestamp';
export type PublicUserInfo = {
    id: string;
    username: string;
    profilePicture?: string;
    registrationDate: Timestamp;
    managerLevel: ManagerLevel;
    isArtist: boolean;
    profileCollectionInfo?: ProfileCollectionInfo;
};


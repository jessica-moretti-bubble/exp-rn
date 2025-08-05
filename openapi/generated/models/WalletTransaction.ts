/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CubblePurchaseInfo } from './CubblePurchaseInfo';
import type { Timestamp } from './Timestamp';
export type WalletTransaction = {
    id: string;
    amount: number;
    createdAt: Timestamp;
    info?: CubblePurchaseInfo;
};


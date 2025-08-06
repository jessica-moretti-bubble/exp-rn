/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardCopiesNumbers } from './CardCopiesNumbers';
import type { CardStatus } from './CardStatus';
import type { Equipment } from './Equipment';
import type { UserOverview } from './UserOverview';
export type CardInstanceInfo = {
    owner: UserOverview;
    copies: CardCopiesNumbers;
    status: CardStatus;
    level: number;
    equipments: Array<Equipment>;
};


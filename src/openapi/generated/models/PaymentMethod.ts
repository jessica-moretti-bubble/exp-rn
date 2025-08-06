/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentMethodType } from './PaymentMethodType';
import type { StripePaymentMethod } from './StripePaymentMethod';
export type PaymentMethod = {
    id: string;
    type: PaymentMethodType;
    stripePm?: StripePaymentMethod;
};


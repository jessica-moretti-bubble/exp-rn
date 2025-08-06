/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewCardPaymentMethod } from './NewCardPaymentMethod';
import type { PaymentMethodType } from './PaymentMethodType';
export type NewPaymentMethod = {
    type: PaymentMethodType;
    card?: NewCardPaymentMethod;
};


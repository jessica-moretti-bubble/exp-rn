/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewSupportTicket } from './NewSupportTicket';
import type { SupportTicketStatus } from './SupportTicketStatus';
import type { Timestamp } from './Timestamp';
export type SupportTicket = (NewSupportTicket & {
    id: string;
    userEmail: string;
    timestamp: Timestamp;
    status: SupportTicketStatus;
});


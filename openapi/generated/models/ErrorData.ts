/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorCode } from './ErrorCode';
import type { ProblemDetails } from './ProblemDetails';
import type { ValidationError } from './ValidationError';
export type ErrorData = (ProblemDetails & {
    title: ErrorCode;
    validationErrors?: Array<ValidationError>;
});


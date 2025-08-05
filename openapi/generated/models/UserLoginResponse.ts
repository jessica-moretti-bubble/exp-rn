/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * User login response
 */
export type UserLoginResponse = {
    /**
     * The user token
     */
    idToken: string;
    /**
     * The user access token
     */
    accessToken: string;
    /**
     * The user refresh token
     */
    refreshToken: string;
    isFirstLogin: boolean;
};


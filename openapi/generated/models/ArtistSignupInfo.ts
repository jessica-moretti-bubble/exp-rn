/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BirthRegion } from './BirthRegion';
import type { GenderIdentity } from './GenderIdentity';
import type { Genre } from './Genre';
import type { ZodiacSign } from './ZodiacSign';
export type ArtistSignupInfo = {
    /**
     * A headshot or portrait of the artist.
     */
    artistHeadshot?: string;
    genre: Genre;
    /**
     * The Spotify access token.
     */
    spotifyAccessToken: string;
    birthRegion: BirthRegion;
    zodiacSign: ZodiacSign;
    genderIdentity: GenderIdentity;
};


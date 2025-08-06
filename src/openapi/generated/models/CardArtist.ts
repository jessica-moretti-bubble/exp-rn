/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistImages } from './ArtistImages';
import type { BirthRegion } from './BirthRegion';
import type { GenderIdentity } from './GenderIdentity';
import type { Genre } from './Genre';
import type { SpecialSkillType } from './SpecialSkillType';
import type { ZodiacSign } from './ZodiacSign';
export type CardArtist = {
    id: string;
    name: string;
    images: ArtistImages;
    genre: Genre;
    genderIdentity: GenderIdentity;
    birthRegion: BirthRegion;
    zodiacSign: ZodiacSign;
    specialSkill?: SpecialSkillType;
};


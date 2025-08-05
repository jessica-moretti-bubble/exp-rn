/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EquipmentType } from './EquipmentType';
import type { Genre } from './Genre';
export type Equipment = {
    type: EquipmentType;
    value: number;
    /**
     * The genre the equipment is associated with
     */
    genre?: Genre;
};


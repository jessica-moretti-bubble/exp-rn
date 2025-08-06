/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardOverview } from './CardOverview';
import type { EquipmentType } from './EquipmentType';
import type { Genre } from './Genre';
import type { ResourcePurchaseDetails } from './ResourcePurchaseDetails';
import type { ResourceSourceType } from './ResourceSourceType';
import type { ResourceType } from './ResourceType';
import type { Timestamp } from './Timestamp';
import type { VinylRarity } from './VinylRarity';
export type ResourceHistoryEntry = {
    id: string;
    timestamp: Timestamp;
    sourceType: ResourceSourceType;
    resourceType: ResourceType;
    resource: (CardOverview | EquipmentType | VinylRarity | Genre);
    /**
     * Only present when sourceType is PURCHASE
     */
    purchaseDetails?: ResourcePurchaseDetails;
};


/* tslint:disable */
/* eslint-disable */
/**
 * Avalara E-Invoicing API
 * An API that supports sending data for an E-Invoicing compliance use-case.
 *
 * The version of the OpenAPI document: 1.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../../runtime';
/**
 * 
 * @export
 * @interface DocumentFetchRequestMetadata
 */
export interface DocumentFetchRequestMetadata {
    /**
     * Specifies a unique ID for this workflow.
     * @type {string}
     * @memberof DocumentFetchRequestMetadata
     */
    workflowId: string;
    /**
     * Specifies the data format for this workflow
     * @type {string}
     * @memberof DocumentFetchRequestMetadata
     */
    dataFormat: string;
    /**
     * Specifies the data format version number
     * @type {number}
     * @memberof DocumentFetchRequestMetadata
     */
    dataFormatVersion: number;
    /**
     * The two-letter ISO-3166 country code for the country for which document is being retrieved
     * @type {string}
     * @memberof DocumentFetchRequestMetadata
     */
    countryCode: string;
    /**
     * The e-invoicing mandate for the specified country
     * @type {string}
     * @memberof DocumentFetchRequestMetadata
     */
    countryMandate: string;
}



/**
 * Check if a given object implements the DocumentFetchRequestMetadata interface.
 */
export function instanceOfDocumentFetchRequestMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "workflowId" in value;
    isInstance = isInstance && "dataFormat" in value;
    isInstance = isInstance && "dataFormatVersion" in value;
    isInstance = isInstance && "countryCode" in value;
    isInstance = isInstance && "countryMandate" in value;

    return isInstance;
}

export function DocumentFetchRequestMetadataFromJSON(json: any): DocumentFetchRequestMetadata {
    return DocumentFetchRequestMetadataFromJSONTyped(json, false);
}

export function DocumentFetchRequestMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentFetchRequestMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'workflowId': json['workflowId'],
        'dataFormat': json['dataFormat'],
        'dataFormatVersion': json['dataFormatVersion'],
        'countryCode': json['countryCode'],
        'countryMandate': json['countryMandate'],
    };
}

export function DocumentFetchRequestMetadataToJSON(value?: DocumentFetchRequestMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'workflowId': value.workflowId,
        'dataFormat': value.dataFormat,
        'dataFormatVersion': value.dataFormatVersion,
        'countryCode': value.countryCode,
        'countryMandate': value.countryMandate,
    };
}

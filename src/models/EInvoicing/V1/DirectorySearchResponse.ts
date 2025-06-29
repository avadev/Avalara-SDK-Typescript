/* tslint:disable */
/* eslint-disable */
/**
 * Avalara E-Invoicing API
 * An API that supports sending data for an E-Invoicing compliance use-case.
 *
 * The version of the OpenAPI document: 1.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../../runtime';
import {
    DirectorySearchResponseValueInner,
    DirectorySearchResponseValueInnerFromJSON,
    DirectorySearchResponseValueInnerFromJSONTyped,
    DirectorySearchResponseValueInnerToJSON,
} from './DirectorySearchResponseValueInner';

/**
 * Response schema for directory search results
 * @export
 * @interface DirectorySearchResponse
 */
export interface DirectorySearchResponse {
    /**
     * The count of records in the result set
     * @type {number}
     * @memberof DirectorySearchResponse
     */
    recordSetCount?: number;
    /**
     * The next page link to get the next set of results.
     * @type {string}
     * @memberof DirectorySearchResponse
     */
    nextLink?: string;
    /**
     * 
     * @type {Array<DirectorySearchResponseValueInner>}
     * @memberof DirectorySearchResponse
     */
    value?: Array<DirectorySearchResponseValueInner>;
}



/**
 * Check if a given object implements the DirectorySearchResponse interface.
 */
export function instanceOfDirectorySearchResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DirectorySearchResponseFromJSON(json: any): DirectorySearchResponse {
    return DirectorySearchResponseFromJSONTyped(json, false);
}

export function DirectorySearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectorySearchResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordSetCount': !exists(json, '@recordSetCount') ? undefined : json['@recordSetCount'],
        'nextLink': !exists(json, '@nextLink') ? undefined : json['@nextLink'],
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>)?.map(DirectorySearchResponseValueInnerFromJSON)),
    };
}

export function DirectorySearchResponseToJSON(value?: DirectorySearchResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@recordSetCount': value.recordSetCount,
        '@nextLink': value.nextLink,
        'value': value.value === undefined ? undefined : ((value.value as Array<any>)?.map(DirectorySearchResponseValueInnerToJSON)),
    };
}

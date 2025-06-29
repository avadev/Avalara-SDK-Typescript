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
    DataInputField,
    DataInputFieldFromJSON,
    DataInputFieldFromJSONTyped,
    DataInputFieldToJSON,
} from './DataInputField';

/**
 * Response model providing a list of input fields required, optional, or conditional for different country mandates.
 * @export
 * @interface DataInputFieldsResponse
 */
export interface DataInputFieldsResponse {
    /**
     * Total count of results
     * @type {number}
     * @memberof DataInputFieldsResponse
     */
    recordsetCount?: number;
    /**
     * 
     * @type {string}
     * @memberof DataInputFieldsResponse
     */
    nextLink?: string | null;
    /**
     * Array of Data Input Fields
     * @type {Array<DataInputField>}
     * @memberof DataInputFieldsResponse
     */
    value?: Array<DataInputField>;
}



/**
 * Check if a given object implements the DataInputFieldsResponse interface.
 */
export function instanceOfDataInputFieldsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DataInputFieldsResponseFromJSON(json: any): DataInputFieldsResponse {
    return DataInputFieldsResponseFromJSONTyped(json, false);
}

export function DataInputFieldsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataInputFieldsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordsetCount': !exists(json, '@recordsetCount') ? undefined : json['@recordsetCount'],
        'nextLink': !exists(json, '@nextLink') ? undefined : json['@nextLink'],
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>)?.map(DataInputFieldFromJSON)),
    };
}

export function DataInputFieldsResponseToJSON(value?: DataInputFieldsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@recordsetCount': value.recordsetCount,
        '@nextLink': value.nextLink,
        'value': value.value === undefined ? undefined : ((value.value as Array<any>)?.map(DataInputFieldToJSON)),
    };
}

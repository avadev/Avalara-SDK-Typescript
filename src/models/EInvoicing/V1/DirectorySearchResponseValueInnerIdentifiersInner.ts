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
 * @interface DirectorySearchResponseValueInnerIdentifiersInner
 */
export interface DirectorySearchResponseValueInnerIdentifiersInner {
    /**
     * Peppol Participant ID if the participant is in Peppol network
     * @type {string}
     * @memberof DirectorySearchResponseValueInnerIdentifiersInner
     */
    name?: string;
    /**
     * Value of the identifier
     * @type {string}
     * @memberof DirectorySearchResponseValueInnerIdentifiersInner
     */
    value?: string;
}



/**
 * Check if a given object implements the DirectorySearchResponseValueInnerIdentifiersInner interface.
 */
export function instanceOfDirectorySearchResponseValueInnerIdentifiersInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DirectorySearchResponseValueInnerIdentifiersInnerFromJSON(json: any): DirectorySearchResponseValueInnerIdentifiersInner {
    return DirectorySearchResponseValueInnerIdentifiersInnerFromJSONTyped(json, false);
}

export function DirectorySearchResponseValueInnerIdentifiersInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectorySearchResponseValueInnerIdentifiersInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function DirectorySearchResponseValueInnerIdentifiersInnerToJSON(value?: DirectorySearchResponseValueInnerIdentifiersInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

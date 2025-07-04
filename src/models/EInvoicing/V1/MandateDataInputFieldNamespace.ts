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
/**
 * The namespace of the UBL element
 * @export
 * @interface MandateDataInputFieldNamespace
 */
export interface MandateDataInputFieldNamespace {
    /**
     * The namespace prefix for the UBL Element
     * @type {string}
     * @memberof MandateDataInputFieldNamespace
     */
    prefix?: string;
    /**
     * 
     * @type {string}
     * @memberof MandateDataInputFieldNamespace
     */
    value?: string;
}



/**
 * Check if a given object implements the MandateDataInputFieldNamespace interface.
 */
export function instanceOfMandateDataInputFieldNamespace(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MandateDataInputFieldNamespaceFromJSON(json: any): MandateDataInputFieldNamespace {
    return MandateDataInputFieldNamespaceFromJSONTyped(json, false);
}

export function MandateDataInputFieldNamespaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MandateDataInputFieldNamespace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function MandateDataInputFieldNamespaceToJSON(value?: MandateDataInputFieldNamespace | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'prefix': value.prefix,
        'value': value.value,
    };
}

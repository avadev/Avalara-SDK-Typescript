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
    RequiredWhenField,
    RequiredWhenFieldFromJSON,
    RequiredWhenFieldFromJSONTyped,
    RequiredWhenFieldToJSON,
} from './RequiredWhenField';

/**
 * Mandates for which this field is conditional
 * @export
 * @interface ConditionalForField
 */
export interface ConditionalForField {
    /**
     * 
     * @type {string}
     * @memberof ConditionalForField
     */
    countryMandate?: string;
    /**
     * Array of scenarios which describe when a particular field is conditional for a country mandate
     * @type {Array<RequiredWhenField>}
     * @memberof ConditionalForField
     */
    requiredWhen?: Array<RequiredWhenField>;
}



/**
 * Check if a given object implements the ConditionalForField interface.
 */
export function instanceOfConditionalForField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConditionalForFieldFromJSON(json: any): ConditionalForField {
    return ConditionalForFieldFromJSONTyped(json, false);
}

export function ConditionalForFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionalForField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countryMandate': !exists(json, 'countryMandate') ? undefined : json['countryMandate'],
        'requiredWhen': !exists(json, 'requiredWhen') ? undefined : ((json['requiredWhen'] as Array<any>)?.map(RequiredWhenFieldFromJSON)),
    };
}

export function ConditionalForFieldToJSON(value?: ConditionalForField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'countryMandate': value.countryMandate,
        'requiredWhen': value.requiredWhen === undefined ? undefined : ((value.requiredWhen as Array<any>)?.map(RequiredWhenFieldToJSON)),
    };
}

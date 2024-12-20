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
 * Format and version used when inputting the data
 * @export
 * @interface InputDataFormats
 */
export interface InputDataFormats {
    /**
     * Document format
     * @type {string}
     * @memberof InputDataFormats
     */
    format?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InputDataFormats
     */
    versions?: Array<string>;
}



/**
 * Check if a given object implements the InputDataFormats interface.
 */
export function instanceOfInputDataFormats(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InputDataFormatsFromJSON(json: any): InputDataFormats {
    return InputDataFormatsFromJSONTyped(json, false);
}

export function InputDataFormatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InputDataFormats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'format': !exists(json, 'format') ? undefined : json['format'],
        'versions': !exists(json, 'versions') ? undefined : json['versions'],
    };
}

export function InputDataFormatsToJSON(value?: InputDataFormats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'format': value.format,
        'versions': value.versions,
    };
}

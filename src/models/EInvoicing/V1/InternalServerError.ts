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
 * Returns an optional message with a 'InternalServerError' response
 * @export
 * @interface InternalServerError
 */
export interface InternalServerError {
    /**
     * A bad request error code
     * @type {string}
     * @memberof InternalServerError
     */
    error?: string;
    /**
     * A message explaining the bad request error
     * @type {string}
     * @memberof InternalServerError
     */
    message?: string;
}



/**
 * Check if a given object implements the InternalServerError interface.
 */
export function instanceOfInternalServerError(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InternalServerErrorFromJSON(json: any): InternalServerError {
    return InternalServerErrorFromJSONTyped(json, false);
}

export function InternalServerErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalServerError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function InternalServerErrorToJSON(value?: InternalServerError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'message': value.message,
    };
}

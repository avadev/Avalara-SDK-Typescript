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
 * Indicates a successful outcome of an API operation, including a generated ID and success message.
 * @export
 * @interface SuccessResponse
 */
export interface SuccessResponse {
    /**
     * Unique identifier for the new or updated entity.
     * @type {string}
     * @memberof SuccessResponse
     */
    id?: string;
    /**
     * Success message
     * @type {string}
     * @memberof SuccessResponse
     */
    message?: string;
}



/**
 * Check if a given object implements the SuccessResponse interface.
 */
export function instanceOfSuccessResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SuccessResponseFromJSON(json: any): SuccessResponse {
    return SuccessResponseFromJSONTyped(json, false);
}

export function SuccessResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuccessResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function SuccessResponseToJSON(value?: SuccessResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'message': value.message,
    };
}

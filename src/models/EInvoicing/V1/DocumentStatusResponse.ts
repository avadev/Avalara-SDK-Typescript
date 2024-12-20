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
import {
    StatusEvent,
    StatusEventFromJSON,
    StatusEventFromJSONTyped,
    StatusEventToJSON,
} from './StatusEvent';

/**
 * Returns the current document ID and status
 * @export
 * @interface DocumentStatusResponse
 */
export interface DocumentStatusResponse {
    /**
     * The unique ID for this document
     * @type {string}
     * @memberof DocumentStatusResponse
     */
    id?: string;
    /**
     * Status of the document
     * @type {string}
     * @memberof DocumentStatusResponse
     */
    status?: string;
    /**
     * 
     * @type {Array<StatusEvent>}
     * @memberof DocumentStatusResponse
     */
    events?: Array<StatusEvent>;
}



/**
 * Check if a given object implements the DocumentStatusResponse interface.
 */
export function instanceOfDocumentStatusResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DocumentStatusResponseFromJSON(json: any): DocumentStatusResponse {
    return DocumentStatusResponseFromJSONTyped(json, false);
}

export function DocumentStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentStatusResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'events': !exists(json, 'events') ? undefined : ((json['events'] as Array<any>).map(StatusEventFromJSON)),
    };
}

export function DocumentStatusResponseToJSON(value?: DocumentStatusResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'status': value.status,
        'events': value.events === undefined ? undefined : ((value.events as Array<any>).map(StatusEventToJSON)),
    };
}

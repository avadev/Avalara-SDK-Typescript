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
 * @interface DocumentFetch
 */
export interface DocumentFetch {
    /**
     * Unique ID for this document that can be used for status checking and file downloads. This is a UID created by the Avalara E-Invoicing platform.
     * @type {string}
     * @memberof DocumentFetch
     */
    id?: string;
    /**
     * Status of the document
     * @type {string}
     * @memberof DocumentFetch
     */
    status?: string;
    /**
     * The date and time when the inbound document was accepted by the Avalara E-Invoicing Platform
     * @type {string}
     * @memberof DocumentFetch
     */
    eventDateTime?: string;
}



/**
 * Check if a given object implements the DocumentFetch interface.
 */
export function instanceOfDocumentFetch(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DocumentFetchFromJSON(json: any): DocumentFetch {
    return DocumentFetchFromJSONTyped(json, false);
}

export function DocumentFetchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentFetch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'eventDateTime': !exists(json, 'eventDateTime') ? undefined : json['eventDateTime'],
    };
}

export function DocumentFetchToJSON(value?: DocumentFetch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'status': value.status,
        'eventDateTime': value.eventDateTime,
    };
}
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
    DirectorySearchResponseValueInnerAddressesInner,
    DirectorySearchResponseValueInnerAddressesInnerFromJSON,
    DirectorySearchResponseValueInnerAddressesInnerFromJSONTyped,
    DirectorySearchResponseValueInnerAddressesInnerToJSON,
} from './DirectorySearchResponseValueInnerAddressesInner';
import {
    DirectorySearchResponseValueInnerIdentifiersInner,
    DirectorySearchResponseValueInnerIdentifiersInnerFromJSON,
    DirectorySearchResponseValueInnerIdentifiersInnerFromJSONTyped,
    DirectorySearchResponseValueInnerIdentifiersInnerToJSON,
} from './DirectorySearchResponseValueInnerIdentifiersInner';
import {
    DirectorySearchResponseValueInnerSupportedDocumentTypesInner,
    DirectorySearchResponseValueInnerSupportedDocumentTypesInnerFromJSON,
    DirectorySearchResponseValueInnerSupportedDocumentTypesInnerFromJSONTyped,
    DirectorySearchResponseValueInnerSupportedDocumentTypesInnerToJSON,
} from './DirectorySearchResponseValueInnerSupportedDocumentTypesInner';

/**
 * 
 * @export
 * @interface DirectorySearchResponseValueInner
 */
export interface DirectorySearchResponseValueInner {
    /**
     * Avalara unique ID of the participant in the directory.
     * @type {string}
     * @memberof DirectorySearchResponseValueInner
     */
    id?: string;
    /**
     * Name of the participant (typically, the name of the business entity).
     * @type {string}
     * @memberof DirectorySearchResponseValueInner
     */
    name?: string;
    /**
     * The network where the participant is present.
     * @type {string}
     * @memberof DirectorySearchResponseValueInner
     */
    network?: string;
    /**
     * Registration date of the participant if available
     * @type {Date}
     * @memberof DirectorySearchResponseValueInner
     */
    registrationDate?: Date;
    /**
     * 
     * @type {Array<DirectorySearchResponseValueInnerIdentifiersInner>}
     * @memberof DirectorySearchResponseValueInner
     */
    identifiers?: Array<DirectorySearchResponseValueInnerIdentifiersInner>;
    /**
     * 
     * @type {Array<DirectorySearchResponseValueInnerAddressesInner>}
     * @memberof DirectorySearchResponseValueInner
     */
    addresses?: Array<DirectorySearchResponseValueInnerAddressesInner>;
    /**
     * 
     * @type {Array<DirectorySearchResponseValueInnerSupportedDocumentTypesInner>}
     * @memberof DirectorySearchResponseValueInner
     */
    supportedDocumentTypes?: Array<DirectorySearchResponseValueInnerSupportedDocumentTypesInner>;
}



/**
 * Check if a given object implements the DirectorySearchResponseValueInner interface.
 */
export function instanceOfDirectorySearchResponseValueInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DirectorySearchResponseValueInnerFromJSON(json: any): DirectorySearchResponseValueInner {
    return DirectorySearchResponseValueInnerFromJSONTyped(json, false);
}

export function DirectorySearchResponseValueInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectorySearchResponseValueInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'network': !exists(json, 'network') ? undefined : json['network'],
        'registrationDate': !exists(json, 'registrationDate') ? undefined : (new Date(json['registrationDate'])),
        'identifiers': !exists(json, 'identifiers') ? undefined : ((json['identifiers'] as Array<any>).map(DirectorySearchResponseValueInnerIdentifiersInnerFromJSON)),
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<any>).map(DirectorySearchResponseValueInnerAddressesInnerFromJSON)),
        'supportedDocumentTypes': !exists(json, 'supportedDocumentTypes') ? undefined : ((json['supportedDocumentTypes'] as Array<any>).map(DirectorySearchResponseValueInnerSupportedDocumentTypesInnerFromJSON)),
    };
}

export function DirectorySearchResponseValueInnerToJSON(value?: DirectorySearchResponseValueInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'network': value.network,
        'registrationDate': value.registrationDate === undefined ? undefined : (value.registrationDate.toISOString().substr(0,10)),
        'identifiers': value.identifiers === undefined ? undefined : ((value.identifiers as Array<any>).map(DirectorySearchResponseValueInnerIdentifiersInnerToJSON)),
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(DirectorySearchResponseValueInnerAddressesInnerToJSON)),
        'supportedDocumentTypes': value.supportedDocumentTypes === undefined ? undefined : ((value.supportedDocumentTypes as Array<any>).map(DirectorySearchResponseValueInnerSupportedDocumentTypesInnerToJSON)),
    };
}

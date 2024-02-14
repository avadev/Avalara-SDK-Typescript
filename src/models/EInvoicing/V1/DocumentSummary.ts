/* tslint:disable */
/* eslint-disable */
/**
 * Avalara E-Invoicing API
 * An API that supports sending data for an E-Invoicing compliance use-case.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../../runtime';
/**
 * Displays a summary of information about the document
 * @export
 * @interface DocumentSummary
 */
export interface DocumentSummary {
    /**
     * The unique ID for this document
     * @type {string}
     * @memberof DocumentSummary
     */
    id?: string;
    /**
     * The date and time when the document was processed, displayed in the format YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof DocumentSummary
     */
    processDateTime?: string;
    /**
     * The transaction status: <br> 'Pending' <br> 'Failed' <br> 'Complete'
     * @type {string}
     * @memberof DocumentSummary
     */
    status?: string;
    /**
     * The name of the supplier in the transaction
     * @type {string}
     * @memberof DocumentSummary
     */
    supplierName?: string;
    /**
     * The name of the customer in the transaction
     * @type {string}
     * @memberof DocumentSummary
     */
    customerName?: string;
    /**
     * The invoice document number
     * @type {string}
     * @memberof DocumentSummary
     */
    documentNumber?: string;
    /**
     * The invoice issue date
     * @type {string}
     * @memberof DocumentSummary
     */
    documentDate?: string;
    /**
     * The invoice direction, where issued = `out` and received = `in`
     * @type {string}
     * @memberof DocumentSummary
     */
    flow?: string;
    /**
     * The two-letter ISO-3166 country code for the country where the e-invoice is being submitted
     * @type {string}
     * @memberof DocumentSummary
     */
    countryCode?: string;
    /**
     * The e-invoicing mandate for the specified country
     * @type {string}
     * @memberof DocumentSummary
     */
    countryMandate?: string;
    /**
     * The interface where the invoice data is sent
     * @type {string}
     * @memberof DocumentSummary
     */
    _interface?: string;
    /**
     * The invoice recipient based on the interface
     * @type {string}
     * @memberof DocumentSummary
     */
    receiver?: string;
}



/**
 * Check if a given object implements the DocumentSummary interface.
 */
export function instanceOfDocumentSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DocumentSummaryFromJSON(json: any): DocumentSummary {
    return DocumentSummaryFromJSONTyped(json, false);
}

export function DocumentSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'processDateTime': !exists(json, 'processDateTime') ? undefined : json['processDateTime'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'supplierName': !exists(json, 'supplierName') ? undefined : json['supplierName'],
        'customerName': !exists(json, 'customerName') ? undefined : json['customerName'],
        'documentNumber': !exists(json, 'documentNumber') ? undefined : json['documentNumber'],
        'documentDate': !exists(json, 'documentDate') ? undefined : json['documentDate'],
        'flow': !exists(json, 'flow') ? undefined : json['flow'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'countryMandate': !exists(json, 'countryMandate') ? undefined : json['countryMandate'],
        '_interface': !exists(json, 'interface') ? undefined : json['interface'],
        'receiver': !exists(json, 'receiver') ? undefined : json['receiver'],
    };
}

export function DocumentSummaryToJSON(value?: DocumentSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'processDateTime': value.processDateTime,
        'status': value.status,
        'supplierName': value.supplierName,
        'customerName': value.customerName,
        'documentNumber': value.documentNumber,
        'documentDate': value.documentDate,
        'flow': value.flow,
        'countryCode': value.countryCode,
        'countryMandate': value.countryMandate,
        'interface': value._interface,
        'receiver': value.receiver,
    };
}

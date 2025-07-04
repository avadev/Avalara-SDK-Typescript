/* tslint:disable */
/* eslint-disable */
/**
 * Avalara 1099 & W-9 API Definition
 * ## 🔐 Authentication  Use **username/password** or generate a **license key** from: *Avalara Portal → Settings → License and API Keys*.  [More on authentication methods](https://developer.avalara.com/avatax-dm-combined-erp/common-setup/authentication/authentication-methods/)  [Test your credentials](https://developer.avalara.com/avatax/test-credentials/)  ## 📘 API & SDK Documentation  [Avalara SDK (.NET) on GitHub](https://github.com/avadev/Avalara-SDK-DotNet#avalarasdk--the-unified-c-library-for-next-gen-avalara-services)  [Code Examples – 1099 API](https://github.com/avadev/Avalara-SDK-DotNet/blob/main/docs/A1099/V2/Class1099IssuersApi.md#call1099issuersget)
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@avalara.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../../runtime';
/**
 * 
 * @export
 * @interface CoveredIndividualRequest
 */
export interface CoveredIndividualRequest {
    /**
     * 
     * @type {string}
     * @memberof CoveredIndividualRequest
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoveredIndividualRequest
     */
    middleName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoveredIndividualRequest
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoveredIndividualRequest
     */
    nameSuffix?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoveredIndividualRequest
     */
    tin?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CoveredIndividualRequest
     */
    birthDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator0?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator1?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator2?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator3?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator4?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator5?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator6?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator7?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator8?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator9?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator10?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator11?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoveredIndividualRequest
     */
    coveredMonthIndicator12?: boolean;
}



/**
 * Check if a given object implements the CoveredIndividualRequest interface.
 */
export function instanceOfCoveredIndividualRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CoveredIndividualRequestFromJSON(json: any): CoveredIndividualRequest {
    return CoveredIndividualRequestFromJSONTyped(json, false);
}

export function CoveredIndividualRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoveredIndividualRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'middleName': !exists(json, 'middleName') ? undefined : json['middleName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'nameSuffix': !exists(json, 'nameSuffix') ? undefined : json['nameSuffix'],
        'tin': !exists(json, 'tin') ? undefined : json['tin'],
        'birthDate': !exists(json, 'birthDate') ? undefined : (json['birthDate'] === null ? null : new Date(json['birthDate'])),
        'coveredMonthIndicator0': !exists(json, 'coveredMonthIndicator0') ? undefined : json['coveredMonthIndicator0'],
        'coveredMonthIndicator1': !exists(json, 'coveredMonthIndicator1') ? undefined : json['coveredMonthIndicator1'],
        'coveredMonthIndicator2': !exists(json, 'coveredMonthIndicator2') ? undefined : json['coveredMonthIndicator2'],
        'coveredMonthIndicator3': !exists(json, 'coveredMonthIndicator3') ? undefined : json['coveredMonthIndicator3'],
        'coveredMonthIndicator4': !exists(json, 'coveredMonthIndicator4') ? undefined : json['coveredMonthIndicator4'],
        'coveredMonthIndicator5': !exists(json, 'coveredMonthIndicator5') ? undefined : json['coveredMonthIndicator5'],
        'coveredMonthIndicator6': !exists(json, 'coveredMonthIndicator6') ? undefined : json['coveredMonthIndicator6'],
        'coveredMonthIndicator7': !exists(json, 'coveredMonthIndicator7') ? undefined : json['coveredMonthIndicator7'],
        'coveredMonthIndicator8': !exists(json, 'coveredMonthIndicator8') ? undefined : json['coveredMonthIndicator8'],
        'coveredMonthIndicator9': !exists(json, 'coveredMonthIndicator9') ? undefined : json['coveredMonthIndicator9'],
        'coveredMonthIndicator10': !exists(json, 'coveredMonthIndicator10') ? undefined : json['coveredMonthIndicator10'],
        'coveredMonthIndicator11': !exists(json, 'coveredMonthIndicator11') ? undefined : json['coveredMonthIndicator11'],
        'coveredMonthIndicator12': !exists(json, 'coveredMonthIndicator12') ? undefined : json['coveredMonthIndicator12'],
    };
}

export function CoveredIndividualRequestToJSON(value?: CoveredIndividualRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'middleName': value.middleName,
        'lastName': value.lastName,
        'nameSuffix': value.nameSuffix,
        'tin': value.tin,
        'birthDate': value.birthDate === undefined ? undefined : (value.birthDate === null ? null : value.birthDate.toISOString()),
        'coveredMonthIndicator0': value.coveredMonthIndicator0,
        'coveredMonthIndicator1': value.coveredMonthIndicator1,
        'coveredMonthIndicator2': value.coveredMonthIndicator2,
        'coveredMonthIndicator3': value.coveredMonthIndicator3,
        'coveredMonthIndicator4': value.coveredMonthIndicator4,
        'coveredMonthIndicator5': value.coveredMonthIndicator5,
        'coveredMonthIndicator6': value.coveredMonthIndicator6,
        'coveredMonthIndicator7': value.coveredMonthIndicator7,
        'coveredMonthIndicator8': value.coveredMonthIndicator8,
        'coveredMonthIndicator9': value.coveredMonthIndicator9,
        'coveredMonthIndicator10': value.coveredMonthIndicator10,
        'coveredMonthIndicator11': value.coveredMonthIndicator11,
        'coveredMonthIndicator12': value.coveredMonthIndicator12,
    };
}

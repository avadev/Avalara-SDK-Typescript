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
import {
    StateAndLocalWithholdingRequest,
    StateAndLocalWithholdingRequestFromJSON,
    StateAndLocalWithholdingRequestFromJSONTyped,
    StateAndLocalWithholdingRequestToJSON,
} from './StateAndLocalWithholdingRequest';

/**
 * 
 * @export
 * @interface FormRequestBase
 */
export interface FormRequestBase {
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    issuerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    recipientName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    recipientTin?: string;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    tinType?: FormRequestBaseTinTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    recipientSecondName?: string;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    zip?: string;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    recipientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    accountNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    officeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    recipientNonUsProvince?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FormRequestBase
     */
    countryCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FormRequestBase
     */
    federalEFile?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FormRequestBase
     */
    postalMail?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FormRequestBase
     */
    stateEFile?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FormRequestBase
     */
    tinMatch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FormRequestBase
     */
    addressVerification?: boolean;
    /**
     * 
     * @type {StateAndLocalWithholdingRequest}
     * @memberof FormRequestBase
     */
    stateAndLocalWithholding?: StateAndLocalWithholdingRequest;
}

/**
* @export
* @enum {string}
*/
export enum FormRequestBaseTinTypeEnum {
    Ein = 'EIN',
    Ssn = 'SSN',
    Itin = 'ITIN',
    Atin = 'ATIN'
}

/**
 * Check if a given object implements the FormRequestBase interface.
 */
export function instanceOfFormRequestBase(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FormRequestBaseFromJSON(json: any): FormRequestBase {
    return FormRequestBaseFromJSONTyped(json, false);
}

export function FormRequestBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormRequestBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'issuerId': !exists(json, 'issuerId') ? undefined : json['issuerId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'recipientName': !exists(json, 'recipientName') ? undefined : json['recipientName'],
        'recipientTin': !exists(json, 'recipientTin') ? undefined : json['recipientTin'],
        'tinType': !exists(json, 'tinType') ? undefined : json['tinType'],
        'recipientSecondName': !exists(json, 'recipientSecondName') ? undefined : json['recipientSecondName'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'zip': !exists(json, 'zip') ? undefined : json['zip'],
        'recipientEmail': !exists(json, 'recipientEmail') ? undefined : json['recipientEmail'],
        'accountNumber': !exists(json, 'accountNumber') ? undefined : json['accountNumber'],
        'officeCode': !exists(json, 'officeCode') ? undefined : json['officeCode'],
        'recipientNonUsProvince': !exists(json, 'recipientNonUsProvince') ? undefined : json['recipientNonUsProvince'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'federalEFile': !exists(json, 'federalEFile') ? undefined : json['federalEFile'],
        'postalMail': !exists(json, 'postalMail') ? undefined : json['postalMail'],
        'stateEFile': !exists(json, 'stateEFile') ? undefined : json['stateEFile'],
        'tinMatch': !exists(json, 'tinMatch') ? undefined : json['tinMatch'],
        'addressVerification': !exists(json, 'addressVerification') ? undefined : json['addressVerification'],
        'stateAndLocalWithholding': !exists(json, 'stateAndLocalWithholding') ? undefined : StateAndLocalWithholdingRequestFromJSON(json['stateAndLocalWithholding']),
    };
}

export function FormRequestBaseToJSON(value?: FormRequestBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'issuerId': value.issuerId,
        'referenceId': value.referenceId,
        'recipientName': value.recipientName,
        'recipientTin': value.recipientTin,
        'tinType': value.tinType,
        'recipientSecondName': value.recipientSecondName,
        'address': value.address,
        'address2': value.address2,
        'city': value.city,
        'state': value.state,
        'zip': value.zip,
        'recipientEmail': value.recipientEmail,
        'accountNumber': value.accountNumber,
        'officeCode': value.officeCode,
        'recipientNonUsProvince': value.recipientNonUsProvince,
        'countryCode': value.countryCode,
        'federalEFile': value.federalEFile,
        'postalMail': value.postalMail,
        'stateEFile': value.stateEFile,
        'tinMatch': value.tinMatch,
        'addressVerification': value.addressVerification,
        'stateAndLocalWithholding': StateAndLocalWithholdingRequestToJSON(value.stateAndLocalWithholding),
    };
}

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
    CoveredIndividualRequest,
    CoveredIndividualRequestFromJSON,
    CoveredIndividualRequestFromJSONTyped,
    CoveredIndividualRequestToJSON,
} from './CoveredIndividualRequest';
import {
    StateAndLocalWithholdingRequest,
    StateAndLocalWithholdingRequestFromJSON,
    StateAndLocalWithholdingRequestFromJSONTyped,
    StateAndLocalWithholdingRequestToJSON,
} from './StateAndLocalWithholdingRequest';

/**
 * 
 * @export
 * @interface Form1095BRequest
 */
export interface Form1095BRequest {
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    employeeFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    employeeMiddleName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    employeeLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    employeeNameSuffix?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Form1095BRequest
     */
    employeeDateOfBirth?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    originOfHealthCoverageCode?: Form1095BRequestOriginOfHealthCoverageCodeEnum;
    /**
     * 
     * @type {Array<CoveredIndividualRequest>}
     * @memberof Form1095BRequest
     */
    coveredIndividuals?: Array<CoveredIndividualRequest>;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    readonly type?: Form1095BRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    issuerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    recipientName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    recipientTin?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    tinType?: Form1095BRequestTinTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    recipientSecondName?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    zip?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    recipientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    accountNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    officeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    recipientNonUsProvince?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1095BRequest
     */
    countryCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Form1095BRequest
     */
    federalEFile?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Form1095BRequest
     */
    postalMail?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Form1095BRequest
     */
    stateEFile?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Form1095BRequest
     */
    tinMatch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Form1095BRequest
     */
    addressVerification?: boolean;
    /**
     * 
     * @type {StateAndLocalWithholdingRequest}
     * @memberof Form1095BRequest
     */
    stateAndLocalWithholding?: StateAndLocalWithholdingRequest;
}

/**
* @export
* @enum {string}
*/
export enum Form1095BRequestOriginOfHealthCoverageCodeEnum {
    SmallBusinessHealthOptionsProgram = 'SmallBusinessHealthOptionsProgram',
    EmployerSponsored = 'EmployerSponsored',
    GovernmentSponsored = 'GovernmentSponsored',
    IndividualMarket = 'IndividualMarket',
    MultiemployerPlan = 'MultiemployerPlan',
    OtherDesignatedMinimumEssentialCoverage = 'OtherDesignatedMinimumEssentialCoverage',
    EmployerSponsoredIndividualHra = 'EmployerSponsoredIndividualHra'
}/**
* @export
* @enum {string}
*/
export enum Form1095BRequestTypeEnum {
    Form1099Nec = 'Form1099Nec',
    Form1099Misc = 'Form1099Misc',
    Form1099Div = 'Form1099Div',
    Form1099R = 'Form1099R',
    Form1099K = 'Form1099K',
    Form1095B = 'Form1095B'
}/**
* @export
* @enum {string}
*/
export enum Form1095BRequestTinTypeEnum {
    Ein = 'EIN',
    Ssn = 'SSN',
    Itin = 'ITIN',
    Atin = 'ATIN'
}

/**
 * Check if a given object implements the Form1095BRequest interface.
 */
export function instanceOfForm1095BRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Form1095BRequestFromJSON(json: any): Form1095BRequest {
    return Form1095BRequestFromJSONTyped(json, false);
}

export function Form1095BRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): Form1095BRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'employeeFirstName': !exists(json, 'employeeFirstName') ? undefined : json['employeeFirstName'],
        'employeeMiddleName': !exists(json, 'employeeMiddleName') ? undefined : json['employeeMiddleName'],
        'employeeLastName': !exists(json, 'employeeLastName') ? undefined : json['employeeLastName'],
        'employeeNameSuffix': !exists(json, 'employeeNameSuffix') ? undefined : json['employeeNameSuffix'],
        'employeeDateOfBirth': !exists(json, 'employeeDateOfBirth') ? undefined : (json['employeeDateOfBirth'] === null ? null : new Date(json['employeeDateOfBirth'])),
        'originOfHealthCoverageCode': !exists(json, 'originOfHealthCoverageCode') ? undefined : json['originOfHealthCoverageCode'],
        'coveredIndividuals': !exists(json, 'coveredIndividuals') ? undefined : ((json['coveredIndividuals'] as Array<any>)?.map(CoveredIndividualRequestFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
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

export function Form1095BRequestToJSON(value?: Form1095BRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'employeeFirstName': value.employeeFirstName,
        'employeeMiddleName': value.employeeMiddleName,
        'employeeLastName': value.employeeLastName,
        'employeeNameSuffix': value.employeeNameSuffix,
        'employeeDateOfBirth': value.employeeDateOfBirth === undefined ? undefined : (value.employeeDateOfBirth === null ? null : value.employeeDateOfBirth.toISOString()),
        'originOfHealthCoverageCode': value.originOfHealthCoverageCode,
        'coveredIndividuals': value.coveredIndividuals === undefined ? undefined : ((value.coveredIndividuals as Array<any>)?.map(CoveredIndividualRequestToJSON)),
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

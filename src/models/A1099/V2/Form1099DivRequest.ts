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
 * @interface Form1099DivRequest
 */
export interface Form1099DivRequest {
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    totalOrdinaryDividends?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    qualifiedDividends?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    totalCapitalGainDistr?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    unrecapSec1250Gain?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    section1202Gain?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    collectiblesGain?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    section897OrdinaryDividends?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    section897CapitalGain?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    nondividendDistributions?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    federalIncomeTaxWithheld?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    section199ADividends?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    investmentExpenses?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    foreignTaxPaid?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    foreignCountryOrUSPossession?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    cashLiquidationDistributions?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    noncashLiquidationDistributions?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    exemptInterestDividends?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    specifiedPrivateActivityBondInterestDividends?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    fatcaFilingRequirement?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    readonly type?: Form1099DivRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    issuerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    recipientName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    recipientTin?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    tinType?: Form1099DivRequestTinTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    recipientSecondName?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    zip?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    recipientEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    accountNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    officeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    recipientNonUsProvince?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099DivRequest
     */
    countryCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Form1099DivRequest
     */
    federalEFile?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Form1099DivRequest
     */
    postalMail?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Form1099DivRequest
     */
    stateEFile?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Form1099DivRequest
     */
    tinMatch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Form1099DivRequest
     */
    addressVerification?: boolean;
    /**
     * 
     * @type {StateAndLocalWithholdingRequest}
     * @memberof Form1099DivRequest
     */
    stateAndLocalWithholding?: StateAndLocalWithholdingRequest;
}

/**
* @export
* @enum {string}
*/
export enum Form1099DivRequestTypeEnum {
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
export enum Form1099DivRequestTinTypeEnum {
    Ein = 'EIN',
    Ssn = 'SSN',
    Itin = 'ITIN',
    Atin = 'ATIN'
}

/**
 * Check if a given object implements the Form1099DivRequest interface.
 */
export function instanceOfForm1099DivRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Form1099DivRequestFromJSON(json: any): Form1099DivRequest {
    return Form1099DivRequestFromJSONTyped(json, false);
}

export function Form1099DivRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): Form1099DivRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalOrdinaryDividends': !exists(json, 'totalOrdinaryDividends') ? undefined : json['totalOrdinaryDividends'],
        'qualifiedDividends': !exists(json, 'qualifiedDividends') ? undefined : json['qualifiedDividends'],
        'totalCapitalGainDistr': !exists(json, 'totalCapitalGainDistr') ? undefined : json['totalCapitalGainDistr'],
        'unrecapSec1250Gain': !exists(json, 'unrecapSec1250Gain') ? undefined : json['unrecapSec1250Gain'],
        'section1202Gain': !exists(json, 'section1202Gain') ? undefined : json['section1202Gain'],
        'collectiblesGain': !exists(json, 'collectiblesGain') ? undefined : json['collectiblesGain'],
        'section897OrdinaryDividends': !exists(json, 'section897OrdinaryDividends') ? undefined : json['section897OrdinaryDividends'],
        'section897CapitalGain': !exists(json, 'section897CapitalGain') ? undefined : json['section897CapitalGain'],
        'nondividendDistributions': !exists(json, 'nondividendDistributions') ? undefined : json['nondividendDistributions'],
        'federalIncomeTaxWithheld': !exists(json, 'federalIncomeTaxWithheld') ? undefined : json['federalIncomeTaxWithheld'],
        'section199ADividends': !exists(json, 'section199ADividends') ? undefined : json['section199ADividends'],
        'investmentExpenses': !exists(json, 'investmentExpenses') ? undefined : json['investmentExpenses'],
        'foreignTaxPaid': !exists(json, 'foreignTaxPaid') ? undefined : json['foreignTaxPaid'],
        'foreignCountryOrUSPossession': !exists(json, 'foreignCountryOrUSPossession') ? undefined : json['foreignCountryOrUSPossession'],
        'cashLiquidationDistributions': !exists(json, 'cashLiquidationDistributions') ? undefined : json['cashLiquidationDistributions'],
        'noncashLiquidationDistributions': !exists(json, 'noncashLiquidationDistributions') ? undefined : json['noncashLiquidationDistributions'],
        'exemptInterestDividends': !exists(json, 'exemptInterestDividends') ? undefined : json['exemptInterestDividends'],
        'specifiedPrivateActivityBondInterestDividends': !exists(json, 'specifiedPrivateActivityBondInterestDividends') ? undefined : json['specifiedPrivateActivityBondInterestDividends'],
        'fatcaFilingRequirement': !exists(json, 'fatcaFilingRequirement') ? undefined : json['fatcaFilingRequirement'],
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

export function Form1099DivRequestToJSON(value?: Form1099DivRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalOrdinaryDividends': value.totalOrdinaryDividends,
        'qualifiedDividends': value.qualifiedDividends,
        'totalCapitalGainDistr': value.totalCapitalGainDistr,
        'unrecapSec1250Gain': value.unrecapSec1250Gain,
        'section1202Gain': value.section1202Gain,
        'collectiblesGain': value.collectiblesGain,
        'section897OrdinaryDividends': value.section897OrdinaryDividends,
        'section897CapitalGain': value.section897CapitalGain,
        'nondividendDistributions': value.nondividendDistributions,
        'federalIncomeTaxWithheld': value.federalIncomeTaxWithheld,
        'section199ADividends': value.section199ADividends,
        'investmentExpenses': value.investmentExpenses,
        'foreignTaxPaid': value.foreignTaxPaid,
        'foreignCountryOrUSPossession': value.foreignCountryOrUSPossession,
        'cashLiquidationDistributions': value.cashLiquidationDistributions,
        'noncashLiquidationDistributions': value.noncashLiquidationDistributions,
        'exemptInterestDividends': value.exemptInterestDividends,
        'specifiedPrivateActivityBondInterestDividends': value.specifiedPrivateActivityBondInterestDividends,
        'fatcaFilingRequirement': value.fatcaFilingRequirement,
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

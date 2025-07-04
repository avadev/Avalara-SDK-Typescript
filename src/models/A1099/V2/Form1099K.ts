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
    Form1099StatusDetail,
    Form1099StatusDetailFromJSON,
    Form1099StatusDetailFromJSONTyped,
    Form1099StatusDetailToJSON,
} from './Form1099StatusDetail';
import {
    StateAndLocalWithholding,
    StateAndLocalWithholdingFromJSON,
    StateAndLocalWithholdingFromJSONTyped,
    StateAndLocalWithholdingToJSON,
} from './StateAndLocalWithholding';
import {
    StateEfileStatusDetail,
    StateEfileStatusDetailFromJSON,
    StateEfileStatusDetailFromJSONTyped,
    StateEfileStatusDetailToJSON,
} from './StateEfileStatusDetail';
import {
    ValidationError,
    ValidationErrorFromJSON,
    ValidationErrorFromJSONTyped,
    ValidationErrorToJSON,
} from './ValidationError';

/**
 * 
 * @export
 * @interface Form1099K
 */
export interface Form1099K {
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    filerType?: Form1099KFilerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    paymentType?: Form1099KPaymentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    paymentSettlementEntityNamePhoneNumber?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    grossAmountPaymentCard?: number;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    cardNotPresentTransactions?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    merchantCategoryCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    paymentTransactionNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    federalIncomeTaxWithheld?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    january?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    february?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    march?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    april?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    may?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    june?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    july?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    august?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    sept?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    october?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    november?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    december?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    issuerId?: number;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    issuerReferenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    issuerTin?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Form1099K
     */
    taxYear?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Form1099K
     */
    federalEfile?: boolean;
    /**
     * 
     * @type {Form1099StatusDetail}
     * @memberof Form1099K
     */
    federalEfileStatus?: Form1099StatusDetail;
    /**
     * 
     * @type {boolean}
     * @memberof Form1099K
     */
    stateEfile?: boolean;
    /**
     * 
     * @type {Array<StateEfileStatusDetail>}
     * @memberof Form1099K
     */
    stateEfileStatus?: Array<StateEfileStatusDetail> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Form1099K
     */
    postalMail?: boolean;
    /**
     * 
     * @type {Form1099StatusDetail}
     * @memberof Form1099K
     */
    postalMailStatus?: Form1099StatusDetail | null;
    /**
     * 
     * @type {boolean}
     * @memberof Form1099K
     */
    tinMatch?: boolean;
    /**
     * 
     * @type {Form1099StatusDetail}
     * @memberof Form1099K
     */
    tinMatchStatus?: Form1099StatusDetail | null;
    /**
     * 
     * @type {boolean}
     * @memberof Form1099K
     */
    addressVerification?: boolean;
    /**
     * 
     * @type {Form1099StatusDetail}
     * @memberof Form1099K
     */
    addressVerificationStatus?: Form1099StatusDetail | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    tinType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    tin?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    recipientName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    recipientSecondName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    state?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    zip?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    foreignProvince?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Form1099K
     */
    countryCode?: string | null;
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof Form1099K
     */
    validationErrors?: Array<ValidationError> | null;
    /**
     * 
     * @type {Date}
     * @memberof Form1099K
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Form1099K
     */
    updatedAt?: Date;
    /**
     * 
     * @type {StateAndLocalWithholding}
     * @memberof Form1099K
     */
    stateAndLocalWithholding?: StateAndLocalWithholding | null;
}

/**
* @export
* @enum {string}
*/
export enum Form1099KFilerTypeEnum {
    Pse = 'PSE',
    Epf = 'EPF',
    Other = 'Other'
}/**
* @export
* @enum {string}
*/
export enum Form1099KPaymentTypeEnum {
    MerchantPaymentCard = 'MerchantPaymentCard',
    ThirdPartyNetwork = 'ThirdPartyNetwork'
}

/**
 * Check if a given object implements the Form1099K interface.
 */
export function instanceOfForm1099K(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Form1099KFromJSON(json: any): Form1099K {
    return Form1099KFromJSONTyped(json, false);
}

export function Form1099KFromJSONTyped(json: any, ignoreDiscriminator: boolean): Form1099K {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filerType': !exists(json, 'filerType') ? undefined : json['filerType'],
        'paymentType': !exists(json, 'paymentType') ? undefined : json['paymentType'],
        'paymentSettlementEntityNamePhoneNumber': !exists(json, 'paymentSettlementEntityNamePhoneNumber') ? undefined : json['paymentSettlementEntityNamePhoneNumber'],
        'grossAmountPaymentCard': !exists(json, 'grossAmountPaymentCard') ? undefined : json['grossAmountPaymentCard'],
        'cardNotPresentTransactions': !exists(json, 'cardNotPresentTransactions') ? undefined : json['cardNotPresentTransactions'],
        'merchantCategoryCode': !exists(json, 'merchantCategoryCode') ? undefined : json['merchantCategoryCode'],
        'paymentTransactionNumber': !exists(json, 'paymentTransactionNumber') ? undefined : json['paymentTransactionNumber'],
        'federalIncomeTaxWithheld': !exists(json, 'federalIncomeTaxWithheld') ? undefined : json['federalIncomeTaxWithheld'],
        'january': !exists(json, 'january') ? undefined : json['january'],
        'february': !exists(json, 'february') ? undefined : json['february'],
        'march': !exists(json, 'march') ? undefined : json['march'],
        'april': !exists(json, 'april') ? undefined : json['april'],
        'may': !exists(json, 'may') ? undefined : json['may'],
        'june': !exists(json, 'june') ? undefined : json['june'],
        'july': !exists(json, 'july') ? undefined : json['july'],
        'august': !exists(json, 'august') ? undefined : json['august'],
        'sept': !exists(json, 'sept') ? undefined : json['sept'],
        'october': !exists(json, 'october') ? undefined : json['october'],
        'november': !exists(json, 'november') ? undefined : json['november'],
        'december': !exists(json, 'december') ? undefined : json['december'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'issuerId': !exists(json, 'issuerId') ? undefined : json['issuerId'],
        'issuerReferenceId': !exists(json, 'issuerReferenceId') ? undefined : json['issuerReferenceId'],
        'issuerTin': !exists(json, 'issuerTin') ? undefined : json['issuerTin'],
        'taxYear': !exists(json, 'taxYear') ? undefined : json['taxYear'],
        'federalEfile': !exists(json, 'federalEfile') ? undefined : json['federalEfile'],
        'federalEfileStatus': !exists(json, 'federalEfileStatus') ? undefined : Form1099StatusDetailFromJSON(json['federalEfileStatus']),
        'stateEfile': !exists(json, 'stateEfile') ? undefined : json['stateEfile'],
        'stateEfileStatus': !exists(json, 'stateEfileStatus') ? undefined : (json['stateEfileStatus'] === null ? null : (json['stateEfileStatus'] as Array<any>)?.map(StateEfileStatusDetailFromJSON)),
        'postalMail': !exists(json, 'postalMail') ? undefined : json['postalMail'],
        'postalMailStatus': !exists(json, 'postalMailStatus') ? undefined : Form1099StatusDetailFromJSON(json['postalMailStatus']),
        'tinMatch': !exists(json, 'tinMatch') ? undefined : json['tinMatch'],
        'tinMatchStatus': !exists(json, 'tinMatchStatus') ? undefined : Form1099StatusDetailFromJSON(json['tinMatchStatus']),
        'addressVerification': !exists(json, 'addressVerification') ? undefined : json['addressVerification'],
        'addressVerificationStatus': !exists(json, 'addressVerificationStatus') ? undefined : Form1099StatusDetailFromJSON(json['addressVerificationStatus']),
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'tinType': !exists(json, 'tinType') ? undefined : json['tinType'],
        'tin': !exists(json, 'tin') ? undefined : json['tin'],
        'recipientName': !exists(json, 'recipientName') ? undefined : json['recipientName'],
        'recipientSecondName': !exists(json, 'recipientSecondName') ? undefined : json['recipientSecondName'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'zip': !exists(json, 'zip') ? undefined : json['zip'],
        'foreignProvince': !exists(json, 'foreignProvince') ? undefined : json['foreignProvince'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'validationErrors': !exists(json, 'validationErrors') ? undefined : (json['validationErrors'] === null ? null : (json['validationErrors'] as Array<any>)?.map(ValidationErrorFromJSON)),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'stateAndLocalWithholding': !exists(json, 'stateAndLocalWithholding') ? undefined : StateAndLocalWithholdingFromJSON(json['stateAndLocalWithholding']),
    };
}

export function Form1099KToJSON(value?: Form1099K | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filerType': value.filerType,
        'paymentType': value.paymentType,
        'paymentSettlementEntityNamePhoneNumber': value.paymentSettlementEntityNamePhoneNumber,
        'grossAmountPaymentCard': value.grossAmountPaymentCard,
        'cardNotPresentTransactions': value.cardNotPresentTransactions,
        'merchantCategoryCode': value.merchantCategoryCode,
        'paymentTransactionNumber': value.paymentTransactionNumber,
        'federalIncomeTaxWithheld': value.federalIncomeTaxWithheld,
        'january': value.january,
        'february': value.february,
        'march': value.march,
        'april': value.april,
        'may': value.may,
        'june': value.june,
        'july': value.july,
        'august': value.august,
        'sept': value.sept,
        'october': value.october,
        'november': value.november,
        'december': value.december,
        'id': value.id,
        'type': value.type,
        'issuerId': value.issuerId,
        'issuerReferenceId': value.issuerReferenceId,
        'issuerTin': value.issuerTin,
        'taxYear': value.taxYear,
        'federalEfile': value.federalEfile,
        'federalEfileStatus': Form1099StatusDetailToJSON(value.federalEfileStatus),
        'stateEfile': value.stateEfile,
        'stateEfileStatus': value.stateEfileStatus === undefined ? undefined : (value.stateEfileStatus === null ? null : (value.stateEfileStatus as Array<any>)?.map(StateEfileStatusDetailToJSON)),
        'postalMail': value.postalMail,
        'postalMailStatus': Form1099StatusDetailToJSON(value.postalMailStatus),
        'tinMatch': value.tinMatch,
        'tinMatchStatus': Form1099StatusDetailToJSON(value.tinMatchStatus),
        'addressVerification': value.addressVerification,
        'addressVerificationStatus': Form1099StatusDetailToJSON(value.addressVerificationStatus),
        'referenceId': value.referenceId,
        'email': value.email,
        'tinType': value.tinType,
        'tin': value.tin,
        'recipientName': value.recipientName,
        'recipientSecondName': value.recipientSecondName,
        'address': value.address,
        'address2': value.address2,
        'city': value.city,
        'state': value.state,
        'zip': value.zip,
        'foreignProvince': value.foreignProvince,
        'countryCode': value.countryCode,
        'validationErrors': value.validationErrors === undefined ? undefined : (value.validationErrors === null ? null : (value.validationErrors as Array<any>)?.map(ValidationErrorToJSON)),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'stateAndLocalWithholding': StateAndLocalWithholdingToJSON(value.stateAndLocalWithholding),
    };
}

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
 * @interface FormRequestModel
 */
export interface FormRequestModel {
    /**
     * 
     * @type {string}
     * @memberof FormRequestModel
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof FormRequestModel
     */
    type?: FormRequestModelTypeEnum;
    /**
     * "W9" is currently the only supported value
     * @type {string}
     * @memberof FormRequestModel
     */
    formType?: FormRequestModelFormTypeEnum;
    /**
     * Track1099's ID of your company, found in the W-9 UI
     * @type {number}
     * @memberof FormRequestModel
     */
    companyId?: number;
    /**
     * Name of your company, set in the W-9 UI
     * @type {string}
     * @memberof FormRequestModel
     */
    companyName?: string;
    /**
     * Contact email of your company, set in the W-9 UI
     * @type {string}
     * @memberof FormRequestModel
     */
    companyEmail?: string;
    /**
     * Your internal identifier for the vendor from whom you are requesting a form
     * @type {string}
     * @memberof FormRequestModel
     */
    referenceId?: string;
    /**
     * The timestamp this vendor (identified by your ReferenceId) last signed a complete W-9, null if you did not include a ReferenceId or the vendor has not yet signed a W-9 in Track1099
     * @type {Date}
     * @memberof FormRequestModel
     */
    signedAt?: Date;
    /**
     * Result of IRS TIN match query for name and TIN in the last signed form, null if signed_at is null
     * @type {string}
     * @memberof FormRequestModel
     */
    tinMatchStatus?: FormRequestModelTinMatchStatusEnum;
    /**
     * Timestamp when this FormRequest will expire, ttl (or 3600) seconds from creation
     * @type {Date}
     * @memberof FormRequestModel
     */
    expiresAt?: Date;
    /**
     * URL of PDF representation of just-signed form, otherwise null. Integrations may use this value to offer a "download for your records" function after a vendor completes and signs a form. Link expires at the same time as this FormRequest. Treat the format of this URL as opaque and expect it to change in the future.
     * @type {string}
     * @memberof FormRequestModel
     */
    signedPdf?: string;
}

/**
* @export
* @enum {string}
*/
export enum FormRequestModelTypeEnum {
    FormRequest = 'FormRequest'
}/**
* @export
* @enum {string}
*/
export enum FormRequestModelFormTypeEnum {
    W9 = 'W9'
}/**
* @export
* @enum {string}
*/
export enum FormRequestModelTinMatchStatusEnum {
    None = 'None',
    Matched = 'Matched'
}

/**
 * Check if a given object implements the FormRequestModel interface.
 */
export function instanceOfFormRequestModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FormRequestModelFromJSON(json: any): FormRequestModel {
    return FormRequestModelFromJSONTyped(json, false);
}

export function FormRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormRequestModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'formType': !exists(json, 'formType') ? undefined : json['formType'],
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'companyName': !exists(json, 'companyName') ? undefined : json['companyName'],
        'companyEmail': !exists(json, 'companyEmail') ? undefined : json['companyEmail'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'signedAt': !exists(json, 'signedAt') ? undefined : (new Date(json['signedAt'])),
        'tinMatchStatus': !exists(json, 'tinMatchStatus') ? undefined : json['tinMatchStatus'],
        'expiresAt': !exists(json, 'expiresAt') ? undefined : (new Date(json['expiresAt'])),
        'signedPdf': !exists(json, 'signedPdf') ? undefined : json['signedPdf'],
    };
}

export function FormRequestModelToJSON(value?: FormRequestModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'formType': value.formType,
        'companyId': value.companyId,
        'companyName': value.companyName,
        'companyEmail': value.companyEmail,
        'referenceId': value.referenceId,
        'signedAt': value.signedAt === undefined ? undefined : (value.signedAt.toISOString()),
        'tinMatchStatus': value.tinMatchStatus,
        'expiresAt': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
        'signedPdf': value.signedPdf,
    };
}

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
 * @interface StateEfileStatusDetail
 */
export interface StateEfileStatusDetail {
    /**
     * 
     * @type {string}
     * @memberof StateEfileStatusDetail
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StateEfileStatusDetail
     */
    time?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StateEfileStatusDetail
     */
    jurisdiction?: string | null;
}



/**
 * Check if a given object implements the StateEfileStatusDetail interface.
 */
export function instanceOfStateEfileStatusDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StateEfileStatusDetailFromJSON(json: any): StateEfileStatusDetail {
    return StateEfileStatusDetailFromJSONTyped(json, false);
}

export function StateEfileStatusDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateEfileStatusDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'time': !exists(json, 'time') ? undefined : json['time'],
        'jurisdiction': !exists(json, 'jurisdiction') ? undefined : json['jurisdiction'],
    };
}

export function StateEfileStatusDetailToJSON(value?: StateEfileStatusDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'time': value.time,
        'jurisdiction': value.jurisdiction,
    };
}

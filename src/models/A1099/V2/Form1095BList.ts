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
    Form1095BListItem,
    Form1095BListItemFromJSON,
    Form1095BListItemFromJSONTyped,
    Form1095BListItemToJSON,
} from './Form1095BListItem';

/**
 * 
 * @export
 * @interface Form1095BList
 */
export interface Form1095BList {
    /**
     * 
     * @type {Array<Form1095BListItem>}
     * @memberof Form1095BList
     */
    forms?: Array<Form1095BListItem>;
    /**
     * 
     * @type {string}
     * @memberof Form1095BList
     */
    formType?: string;
}



/**
 * Check if a given object implements the Form1095BList interface.
 */
export function instanceOfForm1095BList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Form1095BListFromJSON(json: any): Form1095BList {
    return Form1095BListFromJSONTyped(json, false);
}

export function Form1095BListFromJSONTyped(json: any, ignoreDiscriminator: boolean): Form1095BList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'forms': !exists(json, 'forms') ? undefined : ((json['forms'] as Array<any>)?.map(Form1095BListItemFromJSON)),
        'formType': !exists(json, 'formType') ? undefined : json['formType'],
    };
}

export function Form1095BListToJSON(value?: Form1095BList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'forms': value.forms === undefined ? undefined : ((value.forms as Array<any>)?.map(Form1095BListItemToJSON)),
        'formType': value.formType,
    };
}

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


import * as runtime from '../../../runtime';
import { RequestInit } from 'node-fetch';
import LogObject from '../../../utils/logObject';

import {
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    SubmitInteropDocument202Response,
    SubmitInteropDocument202ResponseFromJSON,
    SubmitInteropDocument202ResponseToJSON,
} from '../../../packages/EInvoicing/V1';

export interface SubmitInteropDocumentRequest {
    documentType: SubmitInteropDocumentDocumentTypeEnum;
    interchangeType: SubmitInteropDocumentInterchangeTypeEnum;
    avalaraVersion: string;
    xAvalaraClient?: string;
    xCorrelationID?: string;
    fileName?: Blob;
}

/**
 * 
 */
export class InteropApi extends runtime.ApiClient {
    public sdkVersion: string = '';

    constructor(apiClient: runtime.ApiClient) {
        super(apiClient.configuration);
    }

    /**
     * This API used by the interoperability partners to submit a document to  their trading partners in Avalara on behalf of their customers. 
     * Submit a document
     */
    async submitInteropDocumentRaw(requestParameters: SubmitInteropDocumentRequest, initOverrides?: RequestInit): Promise<{ response: runtime.ApiResponse<SubmitInteropDocument202Response>, logObject: LogObject }> {
        if (requestParameters.documentType === null || requestParameters.documentType === undefined) {
            throw new runtime.RequiredError('documentType','Required parameter requestParameters.documentType was null or undefined when calling submitInteropDocument.');
        }

        if (requestParameters.interchangeType === null || requestParameters.interchangeType === undefined) {
            throw new runtime.RequiredError('interchangeType','Required parameter requestParameters.interchangeType was null or undefined when calling submitInteropDocument.');
        }

        if (requestParameters.avalaraVersion === null || requestParameters.avalaraVersion === undefined) {
            throw new runtime.RequiredError('avalaraVersion','Required parameter requestParameters.avalaraVersion was null or undefined when calling submitInteropDocument.');
        }

        const queryParameters: any = {};
        const requiredScopes = "";
        const authNames: string[] = ['http'];
        if (requestParameters.documentType !== undefined) {
            queryParameters['documentType'] = requestParameters.documentType;
        }

        if (requestParameters.interchangeType !== undefined) {
            queryParameters['interchangeType'] = requestParameters.interchangeType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['avalara-version'] = '1.2';

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xAvalaraClient !== undefined && requestParameters.xAvalaraClient !== null) {
            headerParameters['X-Avalara-Client'] = String(requestParameters.xAvalaraClient);
        }

        if (requestParameters.xCorrelationID !== undefined && requestParameters.xCorrelationID !== null) {
            headerParameters['X-Correlation-ID'] = String(requestParameters.xCorrelationID);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.fileName !== undefined) {
            formParams.append('fileName', requestParameters.fileName as any);
        }

        const { response, logObject } = await this.request({
            path: `/einvoicing/interop/documents`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides, requiredScopes);
        logObject.populateResponseInfo(response);
        return { response: new runtime.JSONApiResponse(response, (jsonValue) => SubmitInteropDocument202ResponseFromJSON(jsonValue)), logObject };
    }

    /**
     * This API used by the interoperability partners to submit a document to  their trading partners in Avalara on behalf of their customers. 
     * Submit a document
     */
    async submitInteropDocument(requestParameters: SubmitInteropDocumentRequest, initOverrides?: RequestInit): Promise<SubmitInteropDocument202Response> {
        const { response, logObject } = await this.submitInteropDocumentRaw(requestParameters, initOverrides);
        const value = await response.value();
        logObject.populateResponseBody(value);
        this.createLogEntry(logObject);
        return value;
    }

}

/**
    * @export
    * @enum {string}
    */
export enum SubmitInteropDocumentDocumentTypeEnum {
    Invoice21 = 'ubl-invoice-2.1',
    Creditnote21 = 'ubl-creditnote-2.1',
    Applicationresponse21 = 'ubl-applicationresponse-2.1'
}
/**
    * @export
    * @enum {string}
    */
export enum SubmitInteropDocumentInterchangeTypeEnum {
    B2B = 'FI-B2B',
    B2C = 'FI-B2C',
    B2G = 'FI-B2G'
}
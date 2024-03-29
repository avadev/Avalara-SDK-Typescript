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


import * as runtime from '../../../runtime';
import { RequestInit } from 'node-fetch';
import LogObject from '../../../utils/logObject';

import {
    BadDownloadRequest,
    BadDownloadRequestFromJSON,
    BadDownloadRequestToJSON,
    BadRequest,
    BadRequestFromJSON,
    BadRequestToJSON,
    DocumentListResponse,
    DocumentListResponseFromJSON,
    DocumentListResponseToJSON,
    DocumentStatusResponse,
    DocumentStatusResponseFromJSON,
    DocumentStatusResponseToJSON,
    DocumentSubmissionError,
    DocumentSubmissionErrorFromJSON,
    DocumentSubmissionErrorToJSON,
    DocumentSubmitResponse,
    DocumentSubmitResponseFromJSON,
    DocumentSubmitResponseToJSON,
    ForbiddenError,
    ForbiddenErrorFromJSON,
    ForbiddenErrorToJSON,
    NotFoundError,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    SubmitDocumentData,
    SubmitDocumentDataFromJSON,
    SubmitDocumentDataToJSON,
    SubmitDocumentMetadata,
    SubmitDocumentMetadataFromJSON,
    SubmitDocumentMetadataToJSON,
} from '../../../packages/EInvoicing/V1';

export interface DownloadDocumentRequest {
    avalaraVersion: string;
    accept: string;
    documentId: string;
    xAvalaraClient?: string;
}

export interface GetDocumentListRequest {
    avalaraVersion: string;
    xAvalaraClient?: string;
    startDate?: Date;
    endDate?: Date;
    flow?: string;
    $count?: string;
    $countOnly?: string;
    $filter?: string;
    $top?: number;
    $skip?: string;
}

export interface GetDocumentStatusRequest {
    avalaraVersion: string;
    documentId: string;
    xAvalaraClient?: string;
}

export interface SubmitDocumentRequest {
    avalaraVersion: string;
    metadata: SubmitDocumentMetadata;
    data: SubmitDocumentData;
    xAvalaraClient?: string;
}

/**
 * 
 */
export class DocumentsApi extends runtime.ApiClient {
    public sdkVersion: string = '';

    constructor(apiClient: runtime.ApiClient) {
        super(apiClient.configuration);
    }

    /**
     * When the document is available, use this endpoint to download it as text, XML, or PDF. The output format needs to be specified in the Accept header and it will vary depending on the mandate. If the file has not yet been created, then status code 404 (not found) is returned.
     * Returns a copy of the document
     */
    async downloadDocumentRaw(requestParameters: DownloadDocumentRequest, initOverrides?: RequestInit): Promise<{ response: runtime.ApiResponse<Blob>, logObject: LogObject }> {
        if (requestParameters.avalaraVersion === null || requestParameters.avalaraVersion === undefined) {
            throw new runtime.RequiredError('avalaraVersion','Required parameter requestParameters.avalaraVersion was null or undefined when calling downloadDocument.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling downloadDocument.');
        }

        if (requestParameters.documentId === null || requestParameters.documentId === undefined) {
            throw new runtime.RequiredError('documentId','Required parameter requestParameters.documentId was null or undefined when calling downloadDocument.');
        }

        const queryParameters: any = {};
        const requiredScopes = "";
        const authNames: string[] = ['http'];
        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['avalara-version'] = '1.0';

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.xAvalaraClient !== undefined && requestParameters.xAvalaraClient !== null) {
            headerParameters['X-Avalara-Client'] = String(requestParameters.xAvalaraClient);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const { response, logObject } = await this.request({
            path: `/einvoicing/documents/{documentId}/$download`.replace(`{${"documentId"}}`, encodeURIComponent(String(requestParameters.documentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides, requiredScopes);
        logObject.populateResponseInfo(response);
        return { response: new runtime.BlobApiResponse(response), logObject };
    }

    /**
     * When the document is available, use this endpoint to download it as text, XML, or PDF. The output format needs to be specified in the Accept header and it will vary depending on the mandate. If the file has not yet been created, then status code 404 (not found) is returned.
     * Returns a copy of the document
     */
    async downloadDocument(requestParameters: DownloadDocumentRequest, initOverrides?: RequestInit): Promise<Blob> {
        const { response, logObject } = await this.downloadDocumentRaw(requestParameters, initOverrides);
        const value = await response.value();
        logObject.populateResponseBody(value);
        this.createLogEntry(logObject);
        return value;
    }

    /**
     * Get a list of documents on the Avalara E-Invoicing platform that have a processing date within the specified date range.
     * Returns a summary of documents for a date range
     */
    async getDocumentListRaw(requestParameters: GetDocumentListRequest, initOverrides?: RequestInit): Promise<{ response: runtime.ApiResponse<DocumentListResponse>, logObject: LogObject }> {
        if (requestParameters.avalaraVersion === null || requestParameters.avalaraVersion === undefined) {
            throw new runtime.RequiredError('avalaraVersion','Required parameter requestParameters.avalaraVersion was null or undefined when calling getDocumentList.');
        }

        const queryParameters: any = {};
        const requiredScopes = "";
        const authNames: string[] = ['http'];
        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = (requestParameters.startDate as any).toISOString();
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['endDate'] = (requestParameters.endDate as any).toISOString();
        }

        if (requestParameters.flow !== undefined) {
            queryParameters['flow'] = requestParameters.flow;
        }

        if (requestParameters.$count !== undefined) {
            queryParameters['$count'] = requestParameters.$count;
        }

        if (requestParameters.$countOnly !== undefined) {
            queryParameters['$countOnly'] = requestParameters.$countOnly;
        }

        if (requestParameters.$filter !== undefined) {
            queryParameters['$filter'] = requestParameters.$filter;
        }

        if (requestParameters.$top !== undefined) {
            queryParameters['$top'] = requestParameters.$top;
        }

        if (requestParameters.$skip !== undefined) {
            queryParameters['$skip'] = requestParameters.$skip;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['avalara-version'] = '1.0';

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xAvalaraClient !== undefined && requestParameters.xAvalaraClient !== null) {
            headerParameters['X-Avalara-Client'] = String(requestParameters.xAvalaraClient);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const { response, logObject } = await this.request({
            path: `/einvoicing/documents`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides, requiredScopes);
        logObject.populateResponseInfo(response);
        return { response: new runtime.JSONApiResponse(response, (jsonValue) => DocumentListResponseFromJSON(jsonValue)), logObject };
    }

    /**
     * Get a list of documents on the Avalara E-Invoicing platform that have a processing date within the specified date range.
     * Returns a summary of documents for a date range
     */
    async getDocumentList(requestParameters: GetDocumentListRequest, initOverrides?: RequestInit): Promise<DocumentListResponse> {
        const { response, logObject } = await this.getDocumentListRaw(requestParameters, initOverrides);
        const value = await response.value();
        logObject.populateResponseBody(value);
        this.createLogEntry(logObject);
        return value;
    }

    /**
     * Using the unique ID from POST /einvoicing/documents response body, request the current status of a document.
     * Checks the status of a document
     */
    async getDocumentStatusRaw(requestParameters: GetDocumentStatusRequest, initOverrides?: RequestInit): Promise<{ response: runtime.ApiResponse<DocumentStatusResponse>, logObject: LogObject }> {
        if (requestParameters.avalaraVersion === null || requestParameters.avalaraVersion === undefined) {
            throw new runtime.RequiredError('avalaraVersion','Required parameter requestParameters.avalaraVersion was null or undefined when calling getDocumentStatus.');
        }

        if (requestParameters.documentId === null || requestParameters.documentId === undefined) {
            throw new runtime.RequiredError('documentId','Required parameter requestParameters.documentId was null or undefined when calling getDocumentStatus.');
        }

        const queryParameters: any = {};
        const requiredScopes = "";
        const authNames: string[] = ['http'];
        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['avalara-version'] = '1.0';

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xAvalaraClient !== undefined && requestParameters.xAvalaraClient !== null) {
            headerParameters['X-Avalara-Client'] = String(requestParameters.xAvalaraClient);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const { response, logObject } = await this.request({
            path: `/einvoicing/document/{documentId}/status`.replace(`{${"documentId"}}`, encodeURIComponent(String(requestParameters.documentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides, requiredScopes);
        logObject.populateResponseInfo(response);
        return { response: new runtime.JSONApiResponse(response, (jsonValue) => DocumentStatusResponseFromJSON(jsonValue)), logObject };
    }

    /**
     * Using the unique ID from POST /einvoicing/documents response body, request the current status of a document.
     * Checks the status of a document
     */
    async getDocumentStatus(requestParameters: GetDocumentStatusRequest, initOverrides?: RequestInit): Promise<DocumentStatusResponse> {
        const { response, logObject } = await this.getDocumentStatusRaw(requestParameters, initOverrides);
        const value = await response.value();
        logObject.populateResponseBody(value);
        this.createLogEntry(logObject);
        return value;
    }

    /**
     * For both e-invoices and credit notes, when a document is sent to this endpoint, it generates an invoice or credit note in the required format as mandated by the specified country. Additionally, it initiates the workflow to transmit the generated document to the relevant tax authority, if necessary.<br><br>The response from the endpoint contains a unique document ID, which can be used to request the status of the document and verify if it was successfully accepted at the destination.<br><br>Furthermore, the unique ID enables the download of a copy of the e-invoice or credit note for reference purposes.
     * Submits a document to Avalara E-Invoicing API
     */
    async submitDocumentRaw(requestParameters: SubmitDocumentRequest, initOverrides?: RequestInit): Promise<{ response: runtime.ApiResponse<DocumentSubmitResponse>, logObject: LogObject }> {
        if (requestParameters.avalaraVersion === null || requestParameters.avalaraVersion === undefined) {
            throw new runtime.RequiredError('avalaraVersion','Required parameter requestParameters.avalaraVersion was null or undefined when calling submitDocument.');
        }

        if (requestParameters.metadata === null || requestParameters.metadata === undefined) {
            throw new runtime.RequiredError('metadata','Required parameter requestParameters.metadata was null or undefined when calling submitDocument.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling submitDocument.');
        }

        const queryParameters: any = {};
        const requiredScopes = "";
        const authNames: string[] = ['http'];
        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['avalara-version'] = '1.0';

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xAvalaraClient !== undefined && requestParameters.xAvalaraClient !== null) {
            headerParameters['X-Avalara-Client'] = String(requestParameters.xAvalaraClient);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.metadata !== undefined) {
            formParams.append('metadata', new Blob([JSON.stringify(SubmitDocumentMetadataToJSON(requestParameters.metadata))], { type: "application/json", }));
        }

        if (requestParameters.data !== undefined) {
            formParams.append('data', new Blob([JSON.stringify(SubmitDocumentDataToJSON(requestParameters.data))], { type: "application/json", }));
        }

        const { response, logObject } = await this.request({
            path: `/einvoicing/documents`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides, requiredScopes);
        logObject.populateResponseInfo(response);
        return { response: new runtime.JSONApiResponse(response, (jsonValue) => DocumentSubmitResponseFromJSON(jsonValue)), logObject };
    }

    /**
     * For both e-invoices and credit notes, when a document is sent to this endpoint, it generates an invoice or credit note in the required format as mandated by the specified country. Additionally, it initiates the workflow to transmit the generated document to the relevant tax authority, if necessary.<br><br>The response from the endpoint contains a unique document ID, which can be used to request the status of the document and verify if it was successfully accepted at the destination.<br><br>Furthermore, the unique ID enables the download of a copy of the e-invoice or credit note for reference purposes.
     * Submits a document to Avalara E-Invoicing API
     */
    async submitDocument(requestParameters: SubmitDocumentRequest, initOverrides?: RequestInit): Promise<DocumentSubmitResponse> {
        const { response, logObject } = await this.submitDocumentRaw(requestParameters, initOverrides);
        const value = await response.value();
        logObject.populateResponseBody(value);
        this.createLogEntry(logObject);
        return value;
    }

}

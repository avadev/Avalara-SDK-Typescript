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
    BatchSearch,
    BatchSearchFromJSON,
    BatchSearchToJSON,
    BatchSearchListResponse,
    BatchSearchListResponseFromJSON,
    BatchSearchListResponseToJSON,
    DirectorySearchResponse,
    DirectorySearchResponseFromJSON,
    DirectorySearchResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../../../packages/EInvoicing/V1';

export interface BatchSearchParticipantsInterface {
    avalaraVersion?: string;
    name: string;
    notificationEmail: string;
    file: Blob;
    xAvalaraClient?: string;
    xCorrelationID?: string;
}

export interface DownloadBatchSearchReportInterface {
    avalaraVersion?: string;
    id: string;
    xAvalaraClient?: string;
    xCorrelationID?: string;
}

export interface GetBatchSearchDetailInterface {
    avalaraVersion?: string;
    id: string;
    xAvalaraClient?: string;
    xCorrelationID?: string;
}

export interface ListBatchSearchesInterface {
    avalaraVersion?: string;
    xAvalaraClient?: string;
    $filter?: string;
    count?: boolean;
    $top?: string;
    $skip?: string;
    $orderBy?: string;
    xCorrelationID?: string;
}

export interface SearchParticipantsInterface {
    avalaraVersion?: string;
    $search: string;
    xAvalaraClient?: string;
    count?: boolean;
    $filter?: string;
    $top?: string;
    $skip?: string;
    $orderBy?: string;
    xCorrelationID?: string;
}

/**
 * 
 */
export class TradingPartnersApi extends runtime.ApiClient {
    public sdkVersion: string = '';

    constructor(apiClient: runtime.ApiClient) {
        super(apiClient.configuration);
    }

    /**
     * Handles batch search requests by uploading a file containing search parameters.
     * Creates a batch search and performs a batch search in the directory for participants in the background.
     */
    async batchSearchParticipantsRaw(requestParameters: BatchSearchParticipantsInterface, initOverrides?: RequestInit): Promise<{ response: runtime.ApiResponse<void>, logObject: LogObject }> {
        requestParameters.avalaraVersion = requestParameters.avalaraVersion || '1.2';
        if (requestParameters.avalaraVersion === null || requestParameters.avalaraVersion === undefined) {
            throw new runtime.RequiredError('avalaraVersion','Required parameter requestParameters.avalaraVersion was null or undefined when calling batchSearchParticipants.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling batchSearchParticipants.');
        }

        if (requestParameters.notificationEmail === null || requestParameters.notificationEmail === undefined) {
            throw new runtime.RequiredError('notificationEmail','Required parameter requestParameters.notificationEmail was null or undefined when calling batchSearchParticipants.');
        }

        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError('file','Required parameter requestParameters.file was null or undefined when calling batchSearchParticipants.');
        }

        const queryParameters: any = {};
        const requiredScopes = "";
        const authNames: string[] = ['http'];
        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.notificationEmail !== undefined) {
            queryParameters['notificationEmail'] = requestParameters.notificationEmail;
        }

        const headerParameters: runtime.HTTPHeaders = {};

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

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const { response, logObject } = await this.request({
            path: `/einvoicing/trading-partners/batch-searches`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides, requiredScopes);
        logObject.populateResponseInfo(response);
        return { response: new runtime.VoidApiResponse(response), logObject };
    }

    /**
     * Handles batch search requests by uploading a file containing search parameters.
     * Creates a batch search and performs a batch search in the directory for participants in the background.
     */
    async batchSearchParticipants(requestParameters: BatchSearchParticipantsInterface, initOverrides?: RequestInit): Promise<void> {
        const { logObject } = await this.batchSearchParticipantsRaw(requestParameters, initOverrides);
        logObject.populateResponseBody(null);
        this.createLogEntry(logObject);
    }

    /**
     * Downloads the report for a specific batch search using the batch search ID.
     * Download batch search results in a csv file.
     */
    async downloadBatchSearchReportRaw(requestParameters: DownloadBatchSearchReportInterface, initOverrides?: RequestInit): Promise<{ response: runtime.ApiResponse<Blob>, logObject: LogObject }> {
        requestParameters.avalaraVersion = requestParameters.avalaraVersion || '1.2';
        if (requestParameters.avalaraVersion === null || requestParameters.avalaraVersion === undefined) {
            throw new runtime.RequiredError('avalaraVersion','Required parameter requestParameters.avalaraVersion was null or undefined when calling downloadBatchSearchReport.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling downloadBatchSearchReport.');
        }

        const queryParameters: any = {};
        const requiredScopes = "";
        const authNames: string[] = ['http'];
        const headerParameters: runtime.HTTPHeaders = {};

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
        const { response, logObject } = await this.request({
            path: `/einvoicing/trading-partners/batch-searches/{id}/$download-results`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides, requiredScopes);
        logObject.populateResponseInfo(response);
        return { response: new runtime.BlobApiResponse(response), logObject };
    }

    /**
     * Downloads the report for a specific batch search using the batch search ID.
     * Download batch search results in a csv file.
     */
    async downloadBatchSearchReport(requestParameters: DownloadBatchSearchReportInterface, initOverrides?: RequestInit): Promise<Blob> {
        const { response, logObject } = await this.downloadBatchSearchReportRaw(requestParameters, initOverrides);
        const value = await response.value();
        logObject.populateResponseBody(value);
        this.createLogEntry(logObject);
        return value;
    }

    /**
     * Get the batch search details for a given id.
     * Get the batch search details for a given id.
     */
    async getBatchSearchDetailRaw(requestParameters: GetBatchSearchDetailInterface, initOverrides?: RequestInit): Promise<{ response: runtime.ApiResponse<BatchSearch>, logObject: LogObject }> {
        requestParameters.avalaraVersion = requestParameters.avalaraVersion || '1.2';
        if (requestParameters.avalaraVersion === null || requestParameters.avalaraVersion === undefined) {
            throw new runtime.RequiredError('avalaraVersion','Required parameter requestParameters.avalaraVersion was null or undefined when calling getBatchSearchDetail.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getBatchSearchDetail.');
        }

        const queryParameters: any = {};
        const requiredScopes = "";
        const authNames: string[] = ['http'];
        const headerParameters: runtime.HTTPHeaders = {};

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
        const { response, logObject } = await this.request({
            path: `/einvoicing/trading-partners/batch-searches/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides, requiredScopes);
        logObject.populateResponseInfo(response);
        return { response: new runtime.JSONApiResponse(response, (jsonValue) => BatchSearchFromJSON(jsonValue)), logObject };
    }

    /**
     * Get the batch search details for a given id.
     * Get the batch search details for a given id.
     */
    async getBatchSearchDetail(requestParameters: GetBatchSearchDetailInterface, initOverrides?: RequestInit): Promise<BatchSearch> {
        const { response, logObject } = await this.getBatchSearchDetailRaw(requestParameters, initOverrides);
        const value = await response.value();
        logObject.populateResponseBody(value);
        this.createLogEntry(logObject);
        return value;
    }

    /**
     * Retrieves all batch searches performed by the user.
     * List all batch searches that were previously submitted.
     */
    async listBatchSearchesRaw(requestParameters: ListBatchSearchesInterface, initOverrides?: RequestInit): Promise<{ response: runtime.ApiResponse<BatchSearchListResponse>, logObject: LogObject }> {
        requestParameters.avalaraVersion = requestParameters.avalaraVersion || '1.2';
        if (requestParameters.avalaraVersion === null || requestParameters.avalaraVersion === undefined) {
            throw new runtime.RequiredError('avalaraVersion','Required parameter requestParameters.avalaraVersion was null or undefined when calling listBatchSearches.');
        }

        const queryParameters: any = {};
        const requiredScopes = "";
        const authNames: string[] = ['http'];
        if (requestParameters.$filter !== undefined) {
            queryParameters['$filter'] = requestParameters.$filter;
        }

        if (requestParameters.count !== undefined) {
            queryParameters['count'] = requestParameters.count;
        }

        if (requestParameters.$top !== undefined) {
            queryParameters['$top'] = requestParameters.$top;
        }

        if (requestParameters.$skip !== undefined) {
            queryParameters['$skip'] = requestParameters.$skip;
        }

        if (requestParameters.$orderBy !== undefined) {
            queryParameters['$orderBy'] = requestParameters.$orderBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

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
        const { response, logObject } = await this.request({
            path: `/einvoicing/trading-partners/batch-searches`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides, requiredScopes);
        logObject.populateResponseInfo(response);
        return { response: new runtime.JSONApiResponse(response, (jsonValue) => BatchSearchListResponseFromJSON(jsonValue)), logObject };
    }

    /**
     * Retrieves all batch searches performed by the user.
     * List all batch searches that were previously submitted.
     */
    async listBatchSearches(requestParameters: ListBatchSearchesInterface, initOverrides?: RequestInit): Promise<BatchSearchListResponse> {
        const { response, logObject } = await this.listBatchSearchesRaw(requestParameters, initOverrides);
        const value = await response.value();
        logObject.populateResponseBody(value);
        this.createLogEntry(logObject);
        return value;
    }

    /**
     * Returns a list of participants matching the input query.
     * Returns a list of participants matching the input query.
     */
    async searchParticipantsRaw(requestParameters: SearchParticipantsInterface, initOverrides?: RequestInit): Promise<{ response: runtime.ApiResponse<DirectorySearchResponse>, logObject: LogObject }> {
        requestParameters.avalaraVersion = requestParameters.avalaraVersion || '1.2';
        if (requestParameters.avalaraVersion === null || requestParameters.avalaraVersion === undefined) {
            throw new runtime.RequiredError('avalaraVersion','Required parameter requestParameters.avalaraVersion was null or undefined when calling searchParticipants.');
        }

        if (requestParameters.$search === null || requestParameters.$search === undefined) {
            throw new runtime.RequiredError('$search','Required parameter requestParameters.$search was null or undefined when calling searchParticipants.');
        }

        const queryParameters: any = {};
        const requiredScopes = "";
        const authNames: string[] = ['http'];
        if (requestParameters.count !== undefined) {
            queryParameters['count'] = requestParameters.count;
        }

        if (requestParameters.$search !== undefined) {
            queryParameters['$search'] = requestParameters.$search;
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

        if (requestParameters.$orderBy !== undefined) {
            queryParameters['$orderBy'] = requestParameters.$orderBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

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
        const { response, logObject } = await this.request({
            path: `/einvoicing/trading-partners`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides, requiredScopes);
        logObject.populateResponseInfo(response);
        return { response: new runtime.JSONApiResponse(response, (jsonValue) => DirectorySearchResponseFromJSON(jsonValue)), logObject };
    }

    /**
     * Returns a list of participants matching the input query.
     * Returns a list of participants matching the input query.
     */
    async searchParticipants(requestParameters: SearchParticipantsInterface, initOverrides?: RequestInit): Promise<DirectorySearchResponse> {
        const { response, logObject } = await this.searchParticipantsRaw(requestParameters, initOverrides);
        const value = await response.value();
        logObject.populateResponseBody(value);
        this.createLogEntry(logObject);
        return value;
    }

}

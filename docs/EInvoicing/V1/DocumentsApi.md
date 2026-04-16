# AvalaraSdk.EInvoicing.V1.DocumentsApi

All URIs are relative to *https://api.sbx.avalara.com/einvoicing*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadDocument**](DocumentsApi.md#downloaddocument) | **GET** /documents/{documentId}/$download | Returns a copy of the document
[**fetchDocuments**](DocumentsApi.md#fetchdocumentsoperation) | **POST** /documents/$fetch | Fetch the inbound document from a tax authority
[**getDocumentList**](DocumentsApi.md#getdocumentlist) | **GET** /documents | Returns a summary of documents for a date range
[**getDocumentStatus**](DocumentsApi.md#getdocumentstatus) | **GET** /documents/{documentId}/status | Checks the status of a document
[**submitDocument**](DocumentsApi.md#submitdocument) | **POST** /documents | Submits a document to Avalara E-Invoicing API


<a name="downloaddocument"></a>
# **downloadDocument**
> Blob downloadDocument (string avalaraVersion, string accept, string documentId, string xAvalaraClient)

Returns a copy of the document

Downloads the document when it is available. Specify the output format in the Accept header. Returns 404 if the file has not been created.

### Example
```typescript
import * as AvalaraSdk from 'avalara-sdk';

const configParams: AvalaraSdk.Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.Sandbox,
    machineName: 'test-machine',
    timeout:3000,
    bearerToken: 'YOUR_BEARER_TOKEN',
    testBasePath: 'https://localhost:3000'
};
const config = new AvalaraSdk.Configuration(configParams);
let client = new AvalaraSdk.Runtime.ApiClient(config);
let api = new AvalaraSdk.EInvoicing.V1.UserApi(client);
const result = await api.createUser();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **avalaraVersion** | **string**| Header that specifies the API version to use (for example \&quot;1.6\&quot;). | [default to undefined]
 **accept** | **string**| Header that specifies the MIME type of the returned document. | [default to undefined]
 **documentId** | **string**| The unique documentId returned in the POST /documents response body. | [default to undefined]
 **xAvalaraClient** | **string**| Optional header for a client identifier string used for diagnostics (for example \&quot;Fingerprint\&quot;). | [optional] [default to undefined]

### Return type

**Blob**

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the document content in the format specified by the Accept header. |  * Content-type -  <br>  |
| **401** | Unauthorized. |  -  |
| **403** | Forbidden. |  -  |
| **404** | A document for the specified ID was not found. |  -  |
| **406** | Unsupported document format was requested in the Accept header. |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="fetchdocumentsoperation"></a>
# **fetchDocuments**
> DocumentFetch fetchDocuments (string avalaraVersion, FetchDocumentsRequest fetchDocumentsRequest, string xAvalaraClient)

Fetch the inbound document from a tax authority

Retrieves an inbound document. Provide key-value pairs as request parameters. Supported parameters vary by tax authority and country.

### Example
```typescript
import * as AvalaraSdk from 'avalara-sdk';

const configParams: AvalaraSdk.Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.Sandbox,
    machineName: 'test-machine',
    timeout:3000,
    bearerToken: 'YOUR_BEARER_TOKEN',
    testBasePath: 'https://localhost:3000'
};
const config = new AvalaraSdk.Configuration(configParams);
let client = new AvalaraSdk.Runtime.ApiClient(config);
let api = new AvalaraSdk.EInvoicing.V1.UserApi(client);
const result = await api.createUser();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **avalaraVersion** | **string**| Header that specifies the API version to use (for example \&quot;1.6\&quot;). | [default to undefined]
 **fetchDocumentsRequest** | [**FetchDocumentsRequest**](FetchDocumentsRequest.md)|  | 
 **xAvalaraClient** | **string**| Optional header for a client identifier string used for diagnostics (for example \&quot;Fingerprint\&quot;). | [optional] [default to undefined]

### Return type

[**DocumentFetch**](DocumentFetch.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response from the inbound document fetch endpoint. Contains the platform documentId for status checks and downloads, the returned status (e.g. Accepted), and eventDateTime when the document was accepted. |  -  |
| **401** | Unauthorized. |  -  |
| **403** | Forbidden. |  -  |
| **500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="getdocumentlist"></a>
# **getDocumentList**
> DocumentListResponse getDocumentList (string avalaraVersion, string xAvalaraClient, Date startDate, Date endDate, string flow, string $count, string $countOnly, string $filter, string $include, number $top, number $skip)

Returns a summary of documents for a date range

Returns a list of document summaries with a processing date within the specified date range.

### Example
```typescript
import * as AvalaraSdk from 'avalara-sdk';

const configParams: AvalaraSdk.Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.Sandbox,
    machineName: 'test-machine',
    timeout:3000,
    bearerToken: 'YOUR_BEARER_TOKEN',
    testBasePath: 'https://localhost:3000'
};
const config = new AvalaraSdk.Configuration(configParams);
let client = new AvalaraSdk.Runtime.ApiClient(config);
let api = new AvalaraSdk.EInvoicing.V1.UserApi(client);
const result = await api.createUser();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **avalaraVersion** | **string**| Header that specifies the API version to use (for example \&quot;1.6\&quot;). | [default to undefined]
 **xAvalaraClient** | **string**| Optional header for a client identifier string used for diagnostics (for example \&quot;Fingerprint\&quot;). | [optional] [default to undefined]
 **startDate** | **Date**| Start date for documents to return. Defaults to the previous month. Format: \&quot;YYYY-MM-DDThh:mm:ss\&quot;. | [optional] [default to undefined]
 **endDate** | **Date**| End date for documents to return. Defaults to the current date. Format: \&quot;YYYY-MM-DDThh:mm:ss\&quot;. | [optional] [default to undefined]
 **flow** | **string**| Optional filter for document direction: issued uses \&quot;out\&quot; and received uses \&quot;in\&quot;. | [optional] [default to undefined]
 **$count** | **string**| When set to true, the response body also includes the count of items in the collection. | [optional] [default to undefined]
 **$countOnly** | **string**| When set to true, the response returns only the count of items in the collection. | [optional] [default to undefined]
 **$filter** | **string**| Filter by field name and value. This filter supports only eq. For more information, refer to the Avalara filtering guide. | [optional] [default to undefined]
 **$include** | **string**| When set to &#x60;events&#x60;, each document in the response includes its events array. Omit this parameter or use any other value to exclude events from the response. | [optional] [default to undefined]
 **$top** | **number**| The number of items to include in the result. | [optional] [default to undefined]
 **$skip** | **number**| The number of items to skip in the result. | [optional] [default to undefined]

### Return type

[**DocumentListResponse**](DocumentListResponse.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a collection of document summaries for the specified date range. |  -  |
| **400** | Bad request. |  -  |
| **401** | Unauthorized. |  -  |
| **403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="getdocumentstatus"></a>
# **getDocumentStatus**
> DocumentStatusResponse getDocumentStatus (string avalaraVersion, string documentId, string xAvalaraClient)

Checks the status of a document

Uses the documentId from the POST /documents response body to return the current status of a document.

### Example
```typescript
import * as AvalaraSdk from 'avalara-sdk';

const configParams: AvalaraSdk.Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.Sandbox,
    machineName: 'test-machine',
    timeout:3000,
    bearerToken: 'YOUR_BEARER_TOKEN',
    testBasePath: 'https://localhost:3000'
};
const config = new AvalaraSdk.Configuration(configParams);
let client = new AvalaraSdk.Runtime.ApiClient(config);
let api = new AvalaraSdk.EInvoicing.V1.UserApi(client);
const result = await api.createUser();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **avalaraVersion** | **string**| Header that specifies the API version to use (for example \&quot;1.6\&quot;). | [default to undefined]
 **documentId** | **string**| The unique documentId returned in the POST /documents response body. | [default to undefined]
 **xAvalaraClient** | **string**| Optional header for a client identifier string used for diagnostics (for example \&quot;Fingerprint\&quot;). | [optional] [default to undefined]

### Return type

[**DocumentStatusResponse**](DocumentStatusResponse.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the current status for the specified documentId. |  -  |
| **401** | Unauthorized. |  -  |
| **403** | Forbidden. |  -  |
| **404** | A document for the specified ID was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="submitdocument"></a>
# **submitDocument**
> DocumentSubmitResponse submitDocument (string avalaraVersion, SubmitDocumentMetadata metadata, object data, string xAvalaraClient)

Submits a document to Avalara E-Invoicing API

When a UBL document is sent to this endpoint, it generates a document in the required format as mandated by the specified country. Additionally, it initiates the workflow to transmit the generated document to the relevant tax authority, if necessary.<br><br>The response from the endpoint contains a unique document ID, which can be used to request the status of the document and verify if it was successfully accepted at the destination.<br><br>Furthermore, the unique ID enables the download of a copy of the generated document for reference purposes.

### Example
```typescript
import * as AvalaraSdk from 'avalara-sdk';

const configParams: AvalaraSdk.Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.Sandbox,
    machineName: 'test-machine',
    timeout:3000,
    bearerToken: 'YOUR_BEARER_TOKEN',
    testBasePath: 'https://localhost:3000'
};
const config = new AvalaraSdk.Configuration(configParams);
let client = new AvalaraSdk.Runtime.ApiClient(config);
let api = new AvalaraSdk.EInvoicing.V1.UserApi(client);
const result = await api.createUser();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **avalaraVersion** | **string**| Header that specifies the API version to use (for example \&quot;1.6\&quot;). | [default to undefined]
 **metadata** | [**SubmitDocumentMetadata**](SubmitDocumentMetadata.md)|  | [default to undefined]
 **data** | [**object**](object.md)| The document to be submitted, as indicated by the metadata fields \\\&#39;dataFormat\\\&#39; and \\\&#39;dataFormatVersion\\\&#39; | [default to undefined]
 **xAvalaraClient** | **string**| Optional header for a client identifier string used for diagnostics (for example \&quot;Fingerprint\&quot;). | [optional] [default to undefined]

### Return type

[**DocumentSubmitResponse**](DocumentSubmitResponse.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns a unique documentId for the submitted document. |  -  |
| **400** | Bad request. |  -  |
| **401** | Unauthorized. |  -  |
| **403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


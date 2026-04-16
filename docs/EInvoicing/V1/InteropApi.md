# AvalaraSdk.EInvoicing.V1.InteropApi

All URIs are relative to *https://api.sbx.avalara.com/einvoicing*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitInteropDocument**](InteropApi.md#submitinteropdocument) | **POST** /interop/documents | Submit a document


<a name="submitinteropdocument"></a>
# **submitInteropDocument**
> SubmitInteropDocument202Response submitInteropDocument ('ubl-invoice-2.1' | 'ubl-creditnote-2.1' | 'ubl-applicationresponse-2.1' documentType, 'FI-B2B-TIEKE' | 'FI-B2G-TIEKE' interchangeType, string avalaraVersion, string xAvalaraClient, string xCorrelationID, Blob fileName)

Submit a document

Upload documents on behalf of interoperability partners and submit them to trading partners through the Avalara platform.

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
 **documentType** | **&#39;ubl-invoice-2.1&#39; | &#39;ubl-creditnote-2.1&#39; | &#39;ubl-applicationresponse-2.1&#39;**| Type of the document being uploaded. Partners will be configured in Avalara system to send only certain types of documents. | [default to undefined]
 **interchangeType** | **&#39;FI-B2B-TIEKE&#39; | &#39;FI-B2G-TIEKE&#39;**| Type of interchange (codes in Avalara system that uniquely identifies a type of interchange). Partners will be configured in Avalara system to send documents belonging to certain types of interchanges. | [default to undefined]
 **avalaraVersion** | **string**| Header that specifies the API version to use (for example \&quot;1.6\&quot;). | [default to undefined]
 **xAvalaraClient** | **string**| Optional header for a client identifier string used for diagnostics (for example \&quot;Fingerprint\&quot;). | [optional] [default to undefined]
 **xCorrelationID** | **string**| Optional correlation identifier provided by the caller to trace the call (for example \&quot;f3f0d19a-01a1-4748-8a58-f000d0424f43\&quot;). | [optional] [default to undefined]
 **fileName** | **Blob****Blob**| The file to be uploaded (e.g., UBL XML, CII XML). | [optional] [default to undefined]

### Return type

[**SubmitInteropDocument202Response**](SubmitInteropDocument202Response.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Document accepted for processing. Returns the interchange ID and acceptance message. This is a transport acknowledgment; processing occurs asynchronously. |  * X-Correlation-ID -  <br>  |
| **400** | Bad request. The request is invalid or contains missing or incorrect parameters. |  * X-Correlation-ID -  <br>  |
| **401** | Unauthorized. |  * X-Correlation-ID -  <br>  |
| **403** | Forbidden. |  * X-Correlation-ID -  <br>  |
| **500** | Internal server error. |  * X-Correlation-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


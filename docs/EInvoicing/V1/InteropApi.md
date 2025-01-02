# AvalaraSdk.EInvoicing.V1.InteropApi

All URIs are relative to *https://api.sbx.avalara.com/einvoicing*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitInteropDocument**](InteropApi.md#submitinteropdocument) | **POST** /interop/documents | Submit a document


<a name="submitinteropdocument"></a>
# **submitInteropDocument**
> SubmitInteropDocument202Response submitInteropDocument ('ubl-invoice-2.1' | 'ubl-creditnote-2.1' | 'ubl-applicationresponse-2.1' documentType, 'FI-B2B' | 'FI-B2C' | 'FI-B2G' interchangeType, string avalaraVersion, string xAvalaraClient, string xCorrelationID, Blob fileName)

Submit a document

This API used by the interoperability partners to submit a document to  their trading partners in Avalara on behalf of their customers. 

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
 **interchangeType** | **&#39;FI-B2B&#39; | &#39;FI-B2C&#39; | &#39;FI-B2G&#39;**| Type of interchange (codes in Avalara system that uniquely identifies a type of interchange). Partners will be configured in Avalara system to send documents belonging to certain types of interchanges. | [default to undefined]
 **avalaraVersion** | **string**| The HTTP Header meant to specify the version of the API intended to be used | [default to undefined]
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot; | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]
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
| **202** | Document Accepted. This doesn\&#39;t mean it is processed. This is just a transport ack. |  * X-Correlation-ID -  <br>  |
| **400** | Bad/Invalid Request. |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


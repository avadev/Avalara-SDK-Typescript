# AvalaraSdk.EInvoicing.V1.MandatesApi

All URIs are relative to *https://api.sbx.avalara.com/einvoicing*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMandateDataInputFields**](MandatesApi.md#getmandatedatainputfields) | **GET** /mandates/{mandateId}/data-input-fields | Returns document field information for a country mandate, a selected document type, and its version
[**getMandates**](MandatesApi.md#getmandates) | **GET** /mandates | List country mandates that are supported by the Avalara E-Invoicing platform


<a name="getmandatedatainputfields"></a>
# **getMandateDataInputFields**
> Array&lt;MandateDataInputField&gt; getMandateDataInputFields (string avalaraVersion, string mandateId, string documentType, string documentVersion, string xAvalaraClient)

Returns document field information for a country mandate, a selected document type, and its version

This endpoint provides document field details and the optionality of fields (required, conditional, optional) of different documents supported by the country mandate. Use the GET <code>/mandates</code> endpoint to retrieve all available country mandates, their supported document types and supported versions. You can use the `documentType` and `documentVersion` query parameters to retrieve the input fields for a particular document type and document version.

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
 **avalaraVersion** | **string**| The HTTP Header meant to specify the version of the API intended to be used | [default to undefined]
 **mandateId** | **string**| The unique ID for the mandate that was returned in the GET /einvoicing/mandates response body | [default to undefined]
 **documentType** | **string**| Select the documentType for which you wish to view the data-input-fields (You may obtain the supported documentTypes from the GET /mandates endpoint) | [default to undefined]
 **documentVersion** | **string**| Select the document version of the documentType (You may obtain the supported documentVersion from the GET /mandates endpoint) | [default to undefined]
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a fingerprint. | [optional] [default to undefined]

### Return type

[**Array&lt;MandateDataInputField&gt;**](MandateDataInputField.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="getmandates"></a>
# **getMandates**
> MandatesResponse getMandates (string avalaraVersion, string xAvalaraClient, string $filter, Decimal $top, Decimal $skip, boolean $count, boolean $countOnly)

List country mandates that are supported by the Avalara E-Invoicing platform

This endpoint offers a list of country mandates supported by the Avalara E-Invoicing API.

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
 **avalaraVersion** | **string**| The HTTP Header meant to specify the version of the API intended to be used | [default to undefined]
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a fingerprint. | [optional] [default to undefined]
 **$filter** | **string**| Filter by field name and value. This filter only supports &lt;code&gt;eq&lt;/code&gt; and &lt;code&gt;contains&lt;/code&gt;. Refer to [https://developer.avalara.com/avatax/filtering-in-rest/](https://developer.avalara.com/avatax/filtering-in-rest/) for more information on filtering. | [optional] [default to undefined]
 **$top** | **Decimal**| If nonzero, return no more than this number of results. Used with &lt;code&gt;$skip&lt;/code&gt; to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records. | [optional] [default to undefined]
 **$skip** | **Decimal**| If nonzero, skip this number of results before returning data. Used with &lt;code&gt;$top&lt;/code&gt; to provide pagination for large datasets. | [optional] [default to undefined]
 **$count** | **boolean**| When set to true, the count of the collection is also returned in the response body. | [optional] [default to undefined]
 **$countOnly** | **boolean**| When set to true, only the count of the collection is returned | [optional] [default to undefined]

### Return type

[**MandatesResponse**](MandatesResponse.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


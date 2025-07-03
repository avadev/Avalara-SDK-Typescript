# AvalaraSdk.EInvoicing.V1.DataInputFieldsApi

All URIs are relative to *https://api.sbx.avalara.com/einvoicing*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataInputFields**](DataInputFieldsApi.md#getdatainputfields) | **GET** /data-input-fields | Returns the optionality of document fields for different country mandates


<a name="getdatainputfields"></a>
# **getDataInputFields**
> DataInputFieldsResponse getDataInputFields (string avalaraVersion, string xAvalaraClient, string $filter, number $top, string $skip, boolean $count, boolean $countOnly)

Returns the optionality of document fields for different country mandates

This endpoint provides a list of required, conditional, and optional fields for each country mandate. You can use the <code>mandates</code> endpoint to retrieve all available country mandates. You can use the $filter query parameter to retrieve fields for a particular mandate

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
 **$top** | **number**| The number of items to include in the result. | [optional] [default to undefined]
 **$skip** | **string**| If nonzero, skip this number of results before returning data. Used with &lt;code&gt;$top&lt;/code&gt; to provide pagination for large datasets. | [optional] [default to undefined]
 **$count** | **boolean**| When set to true, the count of the collection is also returned in the response body | [optional] [default to undefined]
 **$countOnly** | **boolean**| When set to true, only the count of the collection is returned | [optional] [default to undefined]

### Return type

[**DataInputFieldsResponse**](DataInputFieldsResponse.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


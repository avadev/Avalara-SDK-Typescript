# AvalaraSdk.EInvoicing.V1.DataInputFieldsApi

All URIs are relative to *https://api.sbx.avalara.com/einvoicing*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataInputFields**](DataInputFieldsApi.md#getdatainputfields) | **GET** /data-input-fields | Returns the optionality of document fields for different country mandates


<a name="getdatainputfields"></a>
# **getDataInputFields**
> DataInputFieldsResponse getDataInputFields (string avalaraVersion, string xAvalaraClient, string $filter, number $top, number $skip, boolean $count, boolean $countOnly)

Returns the optionality of document fields for different country mandates

This endpoint returns a list of required, conditional, and optional fields for each country mandate. Use the mandates endpoint to retrieve all available country mandates. Use the $filter query parameter to retrieve fields for a specific mandate.

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
 **$filter** | **string**| Filter by field name and value. This filter supports only eq and contains. For more information, refer to the Avalara filtering guide. | [optional] [default to undefined]
 **$top** | **number**| The number of items to include in the result. | [optional] [default to undefined]
 **$skip** | **number**| The number of items to skip in the result. | [optional] [default to undefined]
 **$count** | **boolean**| When set to true, the response body also includes the count of items in the collection. | [optional] [default to undefined]
 **$countOnly** | **boolean**| When set to true, the response returns only the count of items in the collection. | [optional] [default to undefined]

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
| **200** | Returns a DataInputFieldsResponse object containing the data input fields and their optionality for the requested mandate. |  -  |
| **401** | Unauthorized. |  -  |
| **403** | Forbidden. |  -  |
| **500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


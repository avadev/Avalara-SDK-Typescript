# AvalaraSdk.EInvoicing.V1.TaxIdentifiersApi

All URIs are relative to *https://api.sbx.avalara.com/einvoicing*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taxIdentifierSchemaByCountry**](TaxIdentifiersApi.md#taxidentifierschemabycountry) | **GET** /tax-identifiers/schema | Returns the tax identifier request &amp; response schema for a specific country.
[**validateTaxIdentifier**](TaxIdentifiersApi.md#validatetaxidentifier) | **POST** /tax-identifiers/validate | Validates a tax identifier.


<a name="taxidentifierschemabycountry"></a>
# **taxIdentifierSchemaByCountry**
> TaxIdentifierSchemaByCountry200Response taxIdentifierSchemaByCountry (string avalaraVersion, string countryCode, string xAvalaraClient, string xCorrelationID, 'request' | 'response' type)

Returns the tax identifier request & response schema for a specific country.

This endpoint retrieves the request and response schema required to validate tax identifiers based on a specific country\'s requirements. This can include both standard fields and any additional parameters required by the respective country\'s tax authority.

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
 **avalaraVersion** | **string**| The HTTP Header meant to specify the version of the API intended to be used. | [default to undefined]
 **countryCode** | **string**| The two-letter ISO-3166 country code for which the schema should be retrieved. | [default to undefined]
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot;. | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]
 **type** | **&#39;request&#39; | &#39;response&#39;**| Specifies whether to return the request or response schema. | [optional] [default to undefined]

### Return type

[**TaxIdentifierSchemaByCountry200Response**](TaxIdentifierSchemaByCountry200Response.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * X-Correlation-Id -  <br>  |
| **400** | Invalid request |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="validatetaxidentifier"></a>
# **validateTaxIdentifier**
> TaxIdentifierResponse validateTaxIdentifier (string avalaraVersion, TaxIdentifierRequest taxIdentifierRequest, string xAvalaraClient, string xCorrelationID)

Validates a tax identifier.

This endpoint verifies whether a given tax identifier is valid and properly formatted according to the rules of the applicable country or tax system.

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
 **avalaraVersion** | **string**| The HTTP Header meant to specify the version of the API intended to be used. | [default to undefined]
 **taxIdentifierRequest** | [**TaxIdentifierRequest**](TaxIdentifierRequest.md)|  | 
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot;. | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]

### Return type

[**TaxIdentifierResponse**](TaxIdentifierResponse.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success response. |  * X-Correlation-Id -  <br>  |
| **400** | Invalid request |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **429** | Rate limit exceeded |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


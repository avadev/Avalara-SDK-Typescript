# AvalaraSdk.EInvoicing.V1.TradingPartnersApi

All URIs are relative to *https://api.sbx.avalara.com/einvoicing*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchSearchParticipants**](TradingPartnersApi.md#batchsearchparticipants) | **POST** /trading-partners/batch-searches | Handles batch search requests by uploading a file containing search parameters.
[**createTradingPartner**](TradingPartnersApi.md#createtradingpartner) | **POST** /trading-partners | Creates a new trading partner.
[**createTradingPartnersBatch**](TradingPartnersApi.md#createtradingpartnersbatchoperation) | **POST** /trading-partners/batch | Creates a batch of multiple trading partners.
[**deleteTradingPartner**](TradingPartnersApi.md#deletetradingpartner) | **DELETE** /trading-partners/{id} | Deletes a trading partner using ID.
[**downloadBatchSearchReport**](TradingPartnersApi.md#downloadbatchsearchreport) | **GET** /trading-partners/batch-searches/{id}/$download-results | Downloads batch search results in a csv file.
[**getBatchSearchDetail**](TradingPartnersApi.md#getbatchsearchdetail) | **GET** /trading-partners/batch-searches/{id} | Returns the batch search details using ID.
[**listBatchSearches**](TradingPartnersApi.md#listbatchsearches) | **GET** /trading-partners/batch-searches | Lists all batch searches that were previously submitted.
[**searchParticipants**](TradingPartnersApi.md#searchparticipants) | **GET** /trading-partners | Returns a list of participants matching the input query.
[**updateTradingPartner**](TradingPartnersApi.md#updatetradingpartner) | **PUT** /trading-partners/{id} | Updates a trading partner using ID.


<a name="batchsearchparticipants"></a>
# **batchSearchParticipants**
> BatchSearchParticipants202Response batchSearchParticipants (string avalaraVersion, string name, string notificationEmail, Blob file, string xAvalaraClient, string xCorrelationID)

Handles batch search requests by uploading a file containing search parameters.

This endpoint creates a batch search and performs a batch search in the directory for participants in the background.

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
 **name** | **string**| A &lt;b&gt;human-readable&lt;/b&gt; name for the batch search. | [default to undefined]
 **notificationEmail** | **string**| The email address to which a notification will be sent once the batch search is complete. | [default to undefined]
 **file** | **Blob****Blob**| CSV file containing search parameters.  Input Constraints: - Maximum file size: 1 MB - File Header: Must be less than 500 KB - Total number of lines (including header): Must be 101 or fewer | [default to undefined]
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot;. | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]

### Return type

[**BatchSearchParticipants202Response**](BatchSearchParticipants202Response.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Batch search file accepted for processing the search. |  * X-Correlation-Id -  <br>  |
| **400** | Invalid request |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="createtradingpartner"></a>
# **createTradingPartner**
> CreateTradingPartner201Response createTradingPartner (string avalaraVersion, TradingPartner tradingPartner, string xAvalaraClient, string xCorrelationID)

Creates a new trading partner.

This endpoint creates a new trading partner with the provided details. The request body must include the necessary information as defined in the `TradingPartner` schema.

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
 **tradingPartner** | [**TradingPartner**](TradingPartner.md)|  | 
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot;. | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]

### Return type

[**CreateTradingPartner201Response**](CreateTradingPartner201Response.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The trading partner has been successfully created. |  * X-Correlation-Id -  <br>  |
| **400** | Bad request |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **409** | Conflict |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="createtradingpartnersbatchoperation"></a>
# **createTradingPartnersBatch**
> CreateTradingPartnersBatch200Response createTradingPartnersBatch (string avalaraVersion, CreateTradingPartnersBatchRequest createTradingPartnersBatchRequest, string xAvalaraClient, string xCorrelationID)

Creates a batch of multiple trading partners.

This endpoint creates multiple trading partners in a single batch request. It accepts an array of trading partners and processes them synchronously. Supports a maximum of 100 records or 1 MB request payload. The batch is processed atomically and partial success is not allowed.

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
 **createTradingPartnersBatchRequest** | [**CreateTradingPartnersBatchRequest**](CreateTradingPartnersBatchRequest.md)|  | 
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot;. | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]

### Return type

[**CreateTradingPartnersBatch200Response**](CreateTradingPartnersBatch200Response.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Batch processing completed |  * X-Correlation-Id -  <br>  |
| **400** | Bad request |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **409** | Conflict |  * X-Correlation-Id -  <br>  |
| **413** | ContentTooLarge |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="deletetradingpartner"></a>
# **deleteTradingPartner**
> void deleteTradingPartner (string avalaraVersion, string id, string xAvalaraClient, string xCorrelationID)

Deletes a trading partner using ID.

This endpoint deletes an existing trading partner identified by the provided ID.

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
 **id** | **string**| The ID of the trading partner which is being deleted. | [default to undefined]
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot;. | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]

### Return type

void (empty response body)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Trading partner deleted successfully. |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **404** | NotFound |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="downloadbatchsearchreport"></a>
# **downloadBatchSearchReport**
> Blob downloadBatchSearchReport (string avalaraVersion, string id, string xAvalaraClient, string xCorrelationID)

Downloads batch search results in a csv file.

This endpoint downloads the report for a specific batch search using the batch search ID. It returns a CSV file containing up to 1,000 query results.

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
 **id** | **string**| The ID of the batch search for which the report should be downloaded. | [default to undefined]
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot;. | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]

### Return type

**Blob**

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful report download  Output Constraints: - Maximum of 1000 query results returned in the CSV |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **404** | Report not found |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="getbatchsearchdetail"></a>
# **getBatchSearchDetail**
> BatchSearch getBatchSearchDetail (string avalaraVersion, string id, string xAvalaraClient, string xCorrelationID)

Returns the batch search details using ID.

This endpoint returns detailed information for a specific batch search using the provided ID. It is useful for tracking the status and progress of a previously initiated batch search operation.

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
 **id** | **string**| The ID of the batch search that was submitted earlier. | [default to undefined]
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot;. | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]

### Return type

[**BatchSearch**](BatchSearch.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The batch search details for a given ID. |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **404** | Report not found |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="listbatchsearches"></a>
# **listBatchSearches**
> BatchSearchListResponse listBatchSearches (string avalaraVersion, string xAvalaraClient, string $filter, boolean count, number $top, number $skip, string $orderBy, string xCorrelationID)

Lists all batch searches that were previously submitted.

This endpoint retrieves a list of all batch search operations that have been previously submitted. It returns details such as the batch search ID, status, creation date, and associated metadata. It is useful for tracking the progress of a previously initiated batch search operations.

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
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot;. | [optional] [default to undefined]
 **$filter** | **string**| Filters the results by field name. Only the &lt;code&gt;eq&lt;/code&gt; operator and the name field is supported. For more information, refer to [AvaTax filtering guide](https://developer.avalara.com/avatax/filtering-in-rest/). | [optional] [default to undefined]
 **count** | **boolean**| When set to &lt;code&gt;true&lt;/code&gt;, returns the total count of matching records included as &lt;code&gt;@recordSetCount&lt;/code&gt; in the response body. | [optional] [default to undefined]
 **$top** | **number**| The number of items to include in the result. | [optional] [default to undefined]
 **$skip** | **number**| The number of items to skip in the result. | [optional] [default to undefined]
 **$orderBy** | **string**| The &lt;code&gt;$orderBy&lt;/code&gt; query parameter specifies the field and sorting direction for ordering the result set. The value is a string that combines a field name and a sorting direction (asc for ascending or desc for descending), separated by a space. | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]

### Return type

[**BatchSearchListResponse**](BatchSearchListResponse.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of batch searches |  * X-Correlation-Id -  <br>  |
| **400** | Bad request |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="searchparticipants"></a>
# **searchParticipants**
> SearchParticipants200Response searchParticipants (string avalaraVersion, string $search, string xAvalaraClient, boolean count, string $filter, number $top, number $skip, string $orderBy, string xCorrelationID)

Returns a list of participants matching the input query.

This endpoint retrieves a list of trading partners that match the specified search criteria. It supports filtering, search text, and other relevant query parameters to narrow down the results.

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
 **$search** | **string**| Search by value supports logical &lt;code&gt;AND&lt;/code&gt; / &lt;code&gt;OR&lt;/code&gt; operators. Search is performed only over the name and identifier value fields. For more information, refer to [Query options overview - OData.](https://learn.microsoft.com/en-us/odata/concepts/queryoptions-overview#search). | [default to undefined]
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot;. | [optional] [default to undefined]
 **count** | **boolean**| When set to &lt;code&gt;true&lt;/code&gt;, returns the total count of matching records included as &lt;code&gt;@recordSetCount&lt;/code&gt; in the response body. | [optional] [default to undefined]
 **$filter** | **string**| Filters the results using the &lt;code&gt;eq&lt;/code&gt; operator. Supported fields: &lt;code&gt;network&lt;/code&gt;, &lt;code&gt;country&lt;/code&gt;, &lt;code&gt;documentType&lt;/code&gt;, &lt;code&gt;idType&lt;/code&gt;. For more information, refer to [AvaTax filtering guide](https://developer.avalara.com/avatax/filtering-in-rest/). | [optional] [default to undefined]
 **$top** | **number**| The number of items to include in the result. | [optional] [default to undefined]
 **$skip** | **number**| The number of items to skip in the result. | [optional] [default to undefined]
 **$orderBy** | **string**| The &lt;code&gt;$orderBy&lt;/code&gt; query parameter specifies the field and sorting direction for ordering the result set. The value is a string that combines a field name and a sorting direction (asc for ascending or desc for descending), separated by a space. | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]

### Return type

[**SearchParticipants200Response**](SearchParticipants200Response.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * X-Correlation-Id -  <br>  |
| **400** | Bad request |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="updatetradingpartner"></a>
# **updateTradingPartner**
> UpdateTradingPartner200Response updateTradingPartner (string avalaraVersion, string id, TradingPartner tradingPartner, string xAvalaraClient, string xCorrelationID)

Updates a trading partner using ID.

This endpoint updates the details of an existing trading partner specified by the provided ID. It performs a full update, and the request body must include all required fields.

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
 **id** | **string**| The ID of the trading partner which is being updated. | [default to undefined]
 **tradingPartner** | [**TradingPartner**](TradingPartner.md)|  | 
 **xAvalaraClient** | **string**| You can freely use any text you wish for this value. This feature can help you diagnose and solve problems with your software. The header can be treated like a \&quot;Fingerprint\&quot;. | [optional] [default to undefined]
 **xCorrelationID** | **string**| The caller can use this as an identifier to use as a correlation id to trace the call. | [optional] [default to undefined]

### Return type

[**UpdateTradingPartner200Response**](UpdateTradingPartner200Response.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The trading partner has been successfully created. |  -  |
| **400** | Bad request |  * X-Correlation-Id -  <br>  |
| **401** | Unauthorized |  * X-Correlation-Id -  <br>  |
| **403** | Forbidden |  * X-Correlation-Id -  <br>  |
| **404** | NotFound |  * X-Correlation-Id -  <br>  |
| **409** | Conflict |  * X-Correlation-Id -  <br>  |
| **500** | Internal server error |  * X-Correlation-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


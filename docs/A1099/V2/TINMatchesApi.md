# AvalaraSdk.A1099.V2.TINMatchesApi

All URIs are relative to *https://api.sbx.avalara.com/avalara1099*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBulkTinMatch**](TINMatchesApi.md#getbulktinmatch) | **GET** /tin-matches/$bulk/{id} | Get bulk TIN match details
[**getBulkTinMatchResults**](TINMatchesApi.md#getbulktinmatchresults) | **GET** /tin-matches/$bulk/{id}/results | List bulk TIN match results
[**performRealTimeTinMatch**](TINMatchesApi.md#performrealtimetinmatch) | **POST** /tin-matches/$real-time | Perform real time TIN Match
[**submitBulkTinMatch**](TINMatchesApi.md#submitbulktinmatch) | **POST** /tin-matches/$bulk | Submit bulk TIN match


<a name="getbulktinmatch"></a>
# **getBulkTinMatch**
> BulkTinMatchResponse getBulkTinMatch (string id, string avalaraVersion, string xCorrelationId, string xAvalaraClient)

Get bulk TIN match details

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
let api = new AvalaraSdk.A1099.V2.UserApi(client);
const result = await api.createUser();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The bulk ID | [default to undefined]
 **avalaraVersion** | **string**| API version | [default to undefined]
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Identifies the software you are using to call this API. For more information on the client header, see [Client Headers](https://developer.avalara.com/avatax/client-headers/) . | [optional] [default to undefined]

### Return type

[**BulkTinMatchResponse**](BulkTinMatchResponse.md)

### Authorization

[bearer](../../../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bulk TIN match details |  -  |
| **401** | Authentication failed |  -  |
| **404** | Bulk not found |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="getbulktinmatchresults"></a>
# **getBulkTinMatchResults**
> PaginatedQueryResultModelBulkTinMatchResultItemResponse getBulkTinMatchResults (string id, string avalaraVersion, string $filter, number $top, number $skip, string $orderBy, boolean count, boolean countOnly, string xCorrelationId, string xAvalaraClient)

List bulk TIN match results

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
let api = new AvalaraSdk.A1099.V2.UserApi(client);
const result = await api.createUser();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The bulk ID | [default to undefined]
 **avalaraVersion** | **string**| API version | [default to undefined]
 **$filter** | **string**| A filter statement to identify specific records to retrieve.  For more information on filtering, see &lt;a href&#x3D;\&quot;https://developer.avalara.com/avatax/filtering-in-rest/\&quot;&gt;Filtering in REST&lt;/a&gt;. | [optional] [default to undefined]
 **$top** | **number**| If zero or greater than 1000, return at most 1000 results.  Otherwise, return this number of results.  Used with skip to provide pagination for large datasets. | [optional] [default to undefined]
 **$skip** | **number**| If nonzero, skip this number of results before returning data. Used with top to provide pagination for large datasets. | [optional] [default to undefined]
 **$orderBy** | **string**| A comma separated list of sort statements in the format (fieldname) [ASC|DESC], for example id ASC. | [optional] [default to undefined]
 **count** | **boolean**| If true, return the global count of elements in the collection. | [optional] [default to undefined]
 **countOnly** | **boolean**| If true, return ONLY the global count of elements in the collection.  It only applies when count&#x3D;true. | [optional] [default to undefined]
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Identifies the software you are using to call this API. For more information on the client header, see [Client Headers](https://developer.avalara.com/avatax/client-headers/) . | [optional] [default to undefined]

### Return type

[**PaginatedQueryResultModelBulkTinMatchResultItemResponse**](PaginatedQueryResultModelBulkTinMatchResultItemResponse.md)

### Authorization

[bearer](../../../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of TIN match responses |  -  |
| **400** | Bad request (e.g., invalid sort key) |  -  |
| **401** | Authentication failed |  -  |
| **404** | Bulk not found |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="performrealtimetinmatch"></a>
# **performRealTimeTinMatch**
> RealTimeTinMatchResponse performRealTimeTinMatch (string avalaraVersion, string xCorrelationId, string xAvalaraClient, RealTimeTinMatchRequest realTimeTinMatchRequest)

Perform real time TIN Match

Perform real time TIN Match.

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
let api = new AvalaraSdk.A1099.V2.UserApi(client);
const result = await api.createUser();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **avalaraVersion** | **string**| API version | [default to undefined]
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Identifies the software you are using to call this API. For more information on the client header, see [Client Headers](https://developer.avalara.com/avatax/client-headers/) . | [optional] [default to undefined]
 **realTimeTinMatchRequest** | [**RealTimeTinMatchRequest**](RealTimeTinMatchRequest.md)| Required data to perform TIN match | [optional] 

### Return type

[**RealTimeTinMatchResponse**](RealTimeTinMatchResponse.md)

### Authorization

[bearer](../../../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | TIN match result (matched or rejected) |  -  |
| **400** | Bad request (e.g. invalid field values) |  -  |
| **401** | Authentication failed |  -  |
| **429** | Usage limit exceeded (10,000 successful calls per 24 hours) |  -  |
| **403** | Authorization failed (lack of permissions or product not purchased) |  -  |
| **503** | IRS Service is not available. Client should retry later. |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="submitbulktinmatch"></a>
# **submitBulkTinMatch**
> BulkTinMatchAcceptedResponse submitBulkTinMatch (string avalaraVersion, string xCorrelationId, string xAvalaraClient, BulkTinMatchRequest bulkTinMatchRequest)

Submit bulk TIN match

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
let api = new AvalaraSdk.A1099.V2.UserApi(client);
const result = await api.createUser();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **avalaraVersion** | **string**| API version | [default to undefined]
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Identifies the software you are using to call this API. For more information on the client header, see [Client Headers](https://developer.avalara.com/avatax/client-headers/) . | [optional] [default to undefined]
 **bulkTinMatchRequest** | [**BulkTinMatchRequest**](BulkTinMatchRequest.md)| Required TIN collection to perform bulk TIN match | [optional] 

### Return type

[**BulkTinMatchAcceptedResponse**](BulkTinMatchAcceptedResponse.md)

### Authorization

[bearer](../../../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Accepted submission, indicating it will be processed later and where to get results from |  -  |
| **400** | Bad request (e.g. invalid field values) |  -  |
| **401** | Authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


# AvalaraSdk.EInvoicing.V1.ReportsApi

All URIs are relative to *https://api.sbx.avalara.com/einvoicing*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadReport**](ReportsApi.md#downloadreport) | **GET** /reports/{reportId}/$download | Returns a pre-signed download URL for a report
[**getReportById**](ReportsApi.md#getreportbyid) | **GET** /reports/{reportId}/status | Retrieves a report by its unique ID
[**getReports**](ReportsApi.md#getreports) | **GET** /reports | Returns a list of reports


<a name="downloadreport"></a>
# **downloadReport**
> ReportDownloadResponse downloadReport (string avalaraVersion, string reportId, string xAvalaraClient, string xCorrelationID)

Returns a pre-signed download URL for a report

Returns a pre-signed URL to download the report file when it is available. If the report has not yet been generated, a 404 (not found) is returned.

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
 **reportId** | **string**| The unique ID for this report as returned in a GET /reports response. | [default to undefined]
 **xAvalaraClient** | **string**| Optional header for a client identifier string used for diagnostics (for example \&quot;Fingerprint\&quot;). | [optional] [default to undefined]
 **xCorrelationID** | **string**| Optional correlation identifier provided by the caller to trace the call (for example \&quot;f3f0d19a-01a1-4748-8a58-f000d0424f43\&quot;). | [optional] [default to undefined]

### Return type

[**ReportDownloadResponse**](ReportDownloadResponse.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a pre-signed URL to download the report. |  -  |
| **401** | Unauthorized. |  -  |
| **403** | Forbidden. |  -  |
| **404** | Report not found or not yet available for download. |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="getreportbyid"></a>
# **getReportById**
> ReportItem getReportById (string avalaraVersion, string reportId, string xAvalaraClient, string xCorrelationID)

Retrieves a report by its unique ID

Retrieves a specific report by its unique identifier. Returns complete report details including metadata, status, and associated information.

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
 **reportId** | **string**| The unique ID for this report as returned in a GET /reports response. | [default to undefined]
 **xAvalaraClient** | **string**| Optional header for a client identifier string used for diagnostics (for example \&quot;Fingerprint\&quot;). | [optional] [default to undefined]
 **xCorrelationID** | **string**| Optional correlation identifier provided by the caller to trace the call (for example \&quot;f3f0d19a-01a1-4748-8a58-f000d0424f43\&quot;). | [optional] [default to undefined]

### Return type

[**ReportItem**](ReportItem.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Report found and returned successfully. |  -  |
| **400** | Bad request. |  -  |
| **401** | Unauthorized. |  -  |
| **403** | Forbidden. |  -  |
| **404** | Report not found. |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="getreports"></a>
# **getReports**
> ReportListResponse getReports (string avalaraVersion, string xAvalaraClient, string xCorrelationID, string $filter, number $top, number $skip, string $count, string $countOnly, string $orderby)

Returns a list of reports

Retrieves all reports with optional filtering, paging, and sorting. Results are filtered by tenant. Supports OData-style filtering using the $filter parameter. Use $top and $skip for paging; when more results exist, the response includes @nextLink to fetch the next page. Default sort order is by report generation date (descending).

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
 **xCorrelationID** | **string**| Optional correlation identifier provided by the caller to trace the call (for example \&quot;f3f0d19a-01a1-4748-8a58-f000d0424f43\&quot;). | [optional] [default to undefined]
 **$filter** | **string**| OData-style filter expression. Supports operators: eq, ne, gt, ge, lt, le, like, ilike, contains. Examples: status eq \&#39;COMPLETED\&#39;, reportGenerateDate gt \&#39;2025-11-01\&#39;, transactionIds contains \&#39;TXN-2025-001\&#39; | [optional] [default to undefined]
 **$top** | **number**| The number of items to include in the result. | [optional] [default to undefined]
 **$skip** | **number**| The number of items to skip in the result. | [optional] [default to undefined]
 **$count** | **string**| When set to true, the response body also includes the count of items in the collection. | [optional] [default to undefined]
 **$countOnly** | **string**| When set to true, the response returns only the count of items in the collection. | [optional] [default to undefined]
 **$orderby** | **string**| OData-style orderby expression. Format: \&#39;field asc\&#39; or \&#39;field desc\&#39;. Default: reportGenerateDate desc | [optional] [default to &#39;reportGenerateDate desc&#39;]

### Return type

[**ReportListResponse**](ReportListResponse.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reports retrieved successfully. |  -  |
| **400** | Bad request. |  -  |
| **401** | Unauthorized. |  -  |
| **403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


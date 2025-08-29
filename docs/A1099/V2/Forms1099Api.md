# AvalaraSdk.A1099.V2.Forms1099Api

All URIs are relative to *https://api.sbx.avalara.com/avalara1099*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkUpsert1099Forms**](Forms1099Api.md#bulkupsert1099forms) | **POST** /1099/forms/$bulk-upsert | Create or update multiple 1099/1095/W2/1042S forms
[**create1099Form**](Forms1099Api.md#create1099form) | **POST** /1099/forms | Create a 1099/1095/W2/1042S form
[**delete1099Form**](Forms1099Api.md#delete1099form) | **DELETE** /1099/forms/{id} | Delete a 1099/1095/W2/1042S form
[**get1099Form**](Forms1099Api.md#get1099form) | **GET** /1099/forms/{id} | Retrieve a 1099/1095/W2/1042S form
[**get1099FormPdf**](Forms1099Api.md#get1099formpdf) | **GET** /1099/forms/{id}/pdf | Retrieve the PDF file for a 1099/1095/W2/1042S form
[**list1099Forms**](Forms1099Api.md#list1099forms) | **GET** /1099/forms | List 1099/1095/W2/1042S forms
[**update1099Form**](Forms1099Api.md#update1099form) | **PUT** /1099/forms/{id} | Update a 1099/1095/W2/1042S form


<a name="bulkupsert1099forms"></a>
# **bulkUpsert1099Forms**
> JobResponse bulkUpsert1099Forms (string avalaraVersion, boolean dryRun, string xCorrelationId, string xAvalaraClient, Form1099ListRequest form1099ListRequest)

Create or update multiple 1099/1095/W2/1042S forms

This endpoint allows you to create or update multiple 1099/1095/W2/1042S forms.  Maximum of 5000 forms can be processed in a single bulk request.

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
 **dryRun** | **boolean**| defaults to false. If true, it will NOT change the DB. It will just return a report of what would\&#39;ve have been changed in the DB | [optional] [default to false]
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Identifies the software you are using to call this API. For more information on the client header, see [Client Headers](https://developer.avalara.com/avatax/client-headers/) . | [optional] [default to undefined]
 **form1099ListRequest** | [**Form1099ListRequest**](Form1099ListRequest.md)|  | [optional] 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

[bearer](../../../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **500** | Server Error |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="create1099form"></a>
# **create1099Form**
> Get1099Form200Response create1099Form (string avalaraVersion, string xCorrelationId, string xAvalaraClient, Get1099Form200Response get1099Form200Response)

Create a 1099/1095/W2/1042S form

Create a 1099/1095/W2/1042S form.

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
 **get1099Form200Response** | [**Get1099Form200Response**](Get1099Form200Response.md)|  | [optional] 

### Return type

[**Get1099Form200Response**](Get1099Form200Response.md)

### Authorization

[bearer](../../../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **500** | Server Error |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="delete1099form"></a>
# **delete1099Form**
> void delete1099Form (string id, string avalaraVersion, string xCorrelationId, string xAvalaraClient)

Delete a 1099/1095/W2/1042S form

Delete a 1099/1095/W2/1042S form.

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
 **id** | **string**| The unique identifier of the desired form to delete. | [default to undefined]
 **avalaraVersion** | **string**| API version | [default to undefined]
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Identifies the software you are using to call this API. For more information on the client header, see [Client Headers](https://developer.avalara.com/avatax/client-headers/) . | [optional] [default to undefined]

### Return type

void (empty response body)

### Authorization

[bearer](../../../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **422** | Client Error |  -  |
| **500** | Server Error |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="get1099form"></a>
# **get1099Form**
> Get1099Form200Response get1099Form (string id, string avalaraVersion, string xCorrelationId, string xAvalaraClient)

Retrieve a 1099/1095/W2/1042S form

Retrieve a 1099/1095/W2/1042S form.

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
 **id** | **string**|  | [default to undefined]
 **avalaraVersion** | **string**| API version | [default to undefined]
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Identifies the software you are using to call this API. For more information on the client header, see [Client Headers](https://developer.avalara.com/avatax/client-headers/) . | [optional] [default to undefined]

### Return type

[**Get1099Form200Response**](Get1099Form200Response.md)

### Authorization

[bearer](../../../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **500** | Server Error |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="get1099formpdf"></a>
# **get1099FormPdf**
> Blob get1099FormPdf (string id, string avalaraVersion, boolean markEdelivered, string xCorrelationId, string xAvalaraClient)

Retrieve the PDF file for a 1099/1095/W2/1042S form

Retrieve the PDF file for a 1099/1095/W2/1042S form.

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
 **id** | **string**| The ID of the form | [default to undefined]
 **avalaraVersion** | **string**| API version | [default to undefined]
 **markEdelivered** | **boolean**| Optional boolean that if set indicates that the form should be marked as having been successfully edelivered | [optional] [default to undefined]
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Identifies the software you are using to call this API. For more information on the client header, see [Client Headers](https://developer.avalara.com/avatax/client-headers/) . | [optional] [default to undefined]

### Return type

**Blob**

### Authorization

[bearer](../../../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **500** | Server Error |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="list1099forms"></a>
# **list1099Forms**
> PaginatedQueryResultModelForm1099Base list1099Forms (string avalaraVersion, string $filter, number $top, number $skip, string $orderBy, boolean count, boolean countOnly, string xCorrelationId, string xAvalaraClient)

List 1099/1095/W2/1042S forms

List 1099/1095/W2/1042S forms.                Collections support filtering only on certain fields. An attempt to filter on an unsupported field will receive a 400 Bad Request response.                Supported filtering fields are as follows:                - issuerId  - issuerReferenceId  - taxYear  - addressVerificationStatus - possible values are: unknown, pending, failed, incomplete, unchanged, verified  - createdAt  - edeliveryStatus - possible values are: sent, unscheduled, bad_verify, bad_verify_limit, scheduled, bounced, accepted  - email  - federalEfileStatus - possible values are: unscheduled, scheduled, sent, corrected_scheduled, accepted, corrected, corrected_accepted, held  - recipientName  - mailStatus - possible values are: sent, unscheduled, pending, delivered  - referenceId  - tinMatchStatus - possible values are: none, pending, matched, failed  - type - possible values are: 940, 941, 943, 944, 945, 1042, 1042-S, 1095-B, 1095-C, 1097-BTC, 1098, 1098-C, 1098-E, 1098-Q, 1098-T, 3921, 3922, 5498, 5498-ESA, 5498-SA, 1099-MISC, 1099-A, 1099-B, 1099-C, 1099-CAP, 1099-DIV, 1099-G, 1099-INT, 1099-K, 1099-LS, 1099-LTC, 1099-NEC, 1099-OID, 1099-PATR, 1099-Q, 1099-R, 1099-S, 1099-SA, T4A, W-2, W-2G, 1099-HC  - updatedAt  - validity - possible values are: true, false                For more information on filtering, see <see href=\"https://developer.avalara.com/avatax/filtering-in-rest/\">Filtering in REST</see>.

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
 **$filter** | **string**| A filter statement to identify specific records to retrieve.  For more information on filtering, see &lt;a href&#x3D;\&quot;https://developer.avalara.com/avatax/filtering-in-rest/\&quot;&gt;Filtering in REST&lt;/a&gt;. | [optional] [default to undefined]
 **$top** | **number**| If zero or greater than 1000, return at most 1000 results.  Otherwise, return this number of results.  Used with skip to provide pagination for large datasets. | [optional] [default to undefined]
 **$skip** | **number**| If nonzero, skip this number of results before returning data. Used with top to provide pagination for large datasets. | [optional] [default to undefined]
 **$orderBy** | **string**| A comma separated list of sort statements in the format (fieldname) [ASC|DESC], for example id ASC. | [optional] [default to undefined]
 **count** | **boolean**| If true, return the global count of elements in the collection. | [optional] [default to undefined]
 **countOnly** | **boolean**| If true, return ONLY the global count of elements in the collection.  It only applies when count&#x3D;true. | [optional] [default to undefined]
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Identifies the software you are using to call this API. For more information on the client header, see [Client Headers](https://developer.avalara.com/avatax/client-headers/) . | [optional] [default to undefined]

### Return type

[**PaginatedQueryResultModelForm1099Base**](PaginatedQueryResultModelForm1099Base.md)

### Authorization

[bearer](../../../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **500** | Server Error |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="update1099form"></a>
# **update1099Form**
> Get1099Form200Response update1099Form (string id, string avalaraVersion, string xCorrelationId, string xAvalaraClient, Get1099Form200Response get1099Form200Response)

Update a 1099/1095/W2/1042S form

Update a 1099/1095/W2/1042S form.

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
 **id** | **string**|  | [default to undefined]
 **avalaraVersion** | **string**| API version | [default to undefined]
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Identifies the software you are using to call this API. For more information on the client header, see [Client Headers](https://developer.avalara.com/avatax/client-headers/) . | [optional] [default to undefined]
 **get1099Form200Response** | [**Get1099Form200Response**](Get1099Form200Response.md)|  | [optional] 

### Return type

[**Get1099Form200Response**](Get1099Form200Response.md)

### Authorization

[bearer](../../../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **500** | Server Error |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


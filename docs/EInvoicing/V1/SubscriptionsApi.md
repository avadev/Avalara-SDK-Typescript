# AvalaraSdk.EInvoicing.V1.SubscriptionsApi

All URIs are relative to *https://api.sbx.avalara.com/einvoicing*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhookSubscription**](SubscriptionsApi.md#createwebhooksubscription) | **POST** /webhooks/subscriptions | Create a subscription to events
[**deleteWebhookSubscription**](SubscriptionsApi.md#deletewebhooksubscription) | **DELETE** /webhooks/subscriptions/{subscriptionId} | Unsubscribe from events
[**getWebhookSubscription**](SubscriptionsApi.md#getwebhooksubscription) | **GET** /webhooks/subscriptions/{subscriptionId} | Get details of a subscription
[**listWebhookSubscriptions**](SubscriptionsApi.md#listwebhooksubscriptions) | **GET** /webhooks/subscriptions | List all subscriptions


<a name="createwebhooksubscription"></a>
# **createWebhookSubscription**
> SuccessResponse createWebhookSubscription (string avalaraVersion, SubscriptionRegistration subscriptionRegistration, string xCorrelationID, string xAvalaraClient)

Create a subscription to events

Create a new webhook subscription and return the created subscription details.

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
 **avalaraVersion** | **string**| The version of the API to use, e.g., \&quot;1.6\&quot;. | [default to undefined]
 **subscriptionRegistration** | [**SubscriptionRegistration**](SubscriptionRegistration.md)|  | 
 **xCorrelationID** | **string**| A unique identifier for tracking the request and its response | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Client application identification | [optional] [default to undefined]

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Subscription created successfully. Returns the created SubscriptionDetail object. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **400** | Bad request. The request payload is invalid or contains missing required fields. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **401** | Unauthorized. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **403** | Forbidden. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="deletewebhooksubscription"></a>
# **deleteWebhookSubscription**
> void deleteWebhookSubscription (string subscriptionId, string avalaraVersion, string xCorrelationID, string xAvalaraClient)

Unsubscribe from events

Delete the specified webhook subscription.

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
 **subscriptionId** | **string**| Unique identifier of the subscription. | [default to undefined]
 **avalaraVersion** | **string**| The version of the API to use, e.g., \&quot;1.6\&quot;. | [default to undefined]
 **xCorrelationID** | **string**| A unique identifier for tracking the request and its response | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Client application identification | [optional] [default to undefined]

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
| **204** | Subscription deleted successfully. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **401** | Unauthorized. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **403** | Forbidden. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **404** | Subscription not found for the specified subscriptionId. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="getwebhooksubscription"></a>
# **getWebhookSubscription**
> SubscriptionDetail getWebhookSubscription (string subscriptionId, string avalaraVersion, string xCorrelationID, string xAvalaraClient)

Get details of a subscription

Retrieve details of a specific subscription.

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
 **subscriptionId** | **string**| Unique identifier of the subscription. | [default to undefined]
 **avalaraVersion** | **string**| The version of the API to use, e.g., \&quot;1.6\&quot;. | [default to undefined]
 **xCorrelationID** | **string**| A unique identifier for tracking the request and its response | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Client application identification | [optional] [default to undefined]

### Return type

[**SubscriptionDetail**](SubscriptionDetail.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the SubscriptionDetail object for the specified subscriptionId. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **401** | Unauthorized. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **403** | Forbidden. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **404** | Subscription not found for the specified subscriptionId. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

<a name="listwebhooksubscriptions"></a>
# **listWebhookSubscriptions**
> SubscriptionListResponse listWebhookSubscriptions (string avalaraVersion, string xCorrelationID, string xAvalaraClient, number $top, number $skip, boolean count, boolean countOnly)

List all subscriptions

Retrieve a list of webhook subscriptions.

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
 **avalaraVersion** | **string**| The version of the API to use, e.g., \&quot;1.6\&quot;. | [default to undefined]
 **xCorrelationID** | **string**| A unique identifier for tracking the request and its response | [optional] [default to undefined]
 **xAvalaraClient** | **string**| Client application identification | [optional] [default to undefined]
 **$top** | **number**| The number of items to include in the result. | [optional] [default to undefined]
 **$skip** | **number**| The number of items to skip in the result. | [optional] [default to undefined]
 **count** | **boolean**| Whether to include the total count of records in the result. | [optional] [default to undefined]
 **countOnly** | **boolean**| Whether to return only the count of records, without the list of records. | [optional] [default to undefined]

### Return type

[**SubscriptionListResponse**](SubscriptionListResponse.md)

### Authorization

[Bearer](../../../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a list of webhook subscriptions in a SubscriptionListResponse object. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **401** | Unauthorized. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **403** | Forbidden. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |
| **500** | Internal server error. |  * X-Correlation-ID - Correlation ID from the request, or a new one if not provided in request <br>  |

[[Back to top]](#) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)


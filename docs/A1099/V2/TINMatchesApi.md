# AvalaraSdk.A1099.V2.TINMatchesApi

All URIs are relative to *https://api-ava1099.edge.qa.us-east-1.aws.avalara.io/avalara1099*

Method | HTTP request | Description
------------- | ------------- | -------------
[**performRealTimeTinMatch**](TINMatchesApi.md#performrealtimetinmatch) | **POST** /tin-matches/$real-time | Perform real time TIN Match


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


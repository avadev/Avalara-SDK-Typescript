# AvalaraSdk.A1099.V2.Forms1099Api

All URIs are relative to *https://api-ava1099.eta.sbx.us-east-1.aws.avalara.io/avalara1099*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkUpsert1099Forms**](Forms1099Api.md#bulkupsert1099formsoperation) | **POST** /1099/forms/$bulk-upsert | Creates or updates multiple 1099 forms.
[**create1099Form**](Forms1099Api.md#create1099form) | **POST** /1099/forms | Creates a 1099 form.
[**delete1099Form**](Forms1099Api.md#delete1099form) | **DELETE** /1099/forms/{id} | Deletes a 1099 form.
[**get1099Form**](Forms1099Api.md#get1099form) | **GET** /1099/forms/{id} | Retrieves a 1099 form.
[**get1099FormPdf**](Forms1099Api.md#get1099formpdf) | **GET** /1099/forms/{id}/pdf | Retrieves the PDF file for a single 1099 by form id.
[**list1099Forms**](Forms1099Api.md#list1099forms) | **GET** /1099/forms | Retrieves a list of 1099 forms based on query parameters.
[**update1099Form**](Forms1099Api.md#update1099form) | **PUT** /1099/forms/{id} | Updates a 1099 form.


<a name="bulkupsert1099formsoperation"></a>
# **bulkUpsert1099Forms**
> Form1099ProccessResult bulkUpsert1099Forms (string avalaraVersion, string xCorrelationId, boolean dryRun, BulkUpsert1099FormsRequest bulkUpsert1099FormsRequest)

Creates or updates multiple 1099 forms.

This endpoint allows you to create or update multiple 1099 forms.  You can use one of the following payload structures:                **Form 1099-MISC:**  ```json  {     \"formType\": \"1099-MISC\",     \"forms\": [         {             \"IssuerId\": \"123456\",             \"IssuerReferenceId\": \"REF123\",             \"IssuerTin\": \"12-3456789\",             \"TaxYear\": 2023,             \"ReferenceId\": \"FORM123456\",             \"RecipientName\": \"John Doe\",             \"RecipientTin\": \"987-65-4321\",             \"TinType\": \"IEN\",             \"RecipientSecondName\": \"Jane Doe\",             \"StreetAddress\": \"123 Main Street\",             \"StreetAddressLine2\": \"Apt 4B\",             \"City\": \"New York\",             \"State\": \"NY\",             \"Zip\": \"10001\",             \"RecipientEmail\": \"john.doe@email.com\",             \"AccountNumber\": \"ACC123456\",             \"OfficeCode\": \"NYC01\",             \"SecondTinNotice\": false,             \"RecipientNonUsProvince\": \"\",             \"CountryCode\": \"US\",             \"Rents\": 12000.00,             \"Royalties\": 5000.00,             \"OtherIncome\": 3000.00,             \"FishingBoatProceeds\": 0.00,             \"MedicalHealthCarePayments\": 15000.00,             \"SubstitutePayments\": 1000.00,             \"CropInsuranceProceeds\": 0.00,             \"GrossProceedsPaidToAttorney\": 7500.00,             \"FishPurchasedForResale\": 0.00,             \"FedIncomeTaxWithheld\": 5000.00,             \"Section409ADeferrals\": 0.00,             \"ExcessGoldenParachutePayments\": 0.00,             \"NonqualifiedDeferredCompensation\": 0.00,             \"PayerMadeDirectSales\": false,             \"FatcaFilingRequirement\": false,             \"StateAndLocalWithholding\": {               \"StateTaxWithheld\": 2500.00,               \"LocalTaxWithheld\": 1000.00,               \"State\": \"NY\",               \"StateIdNumber\": \"NY123456\",               \"Locality\": \"New York City\",               \"StateIncome\": 35000.00,               \"LocalIncome\": 35000.00             }         }     ]  }  ```                **Form 1099-NEC:**  ```json  {    \"formType\": \"1099-NEC\",    \"forms\": [      {        \"issuerID\": \"180337282\",        \"issuerReferenceId\": \"ISS123\",        \"issuerTin\": \"12-3000000\",        \"taxYear\": 2024,        \"referenceID\": \"REF-002\",        \"recipientName\": \"Jane Smith\",        \"recipientSecondName\": \"\",        \"recipientTin\": \"987-65-4321\",        \"tinType\": \"IEN\",        \"streetAddress\": \"123 Center St\",        \"streetAddressLine2\": \"\",        \"city\": \"Santa Monica\",        \"state\": \"CA\",        \"zip\": \"90401\",        \"countryCode\": \"US\",        \"recipientNonUsProvince\": \"\",        \"recipientEmail\": \"\",        \"accountNumber\": \"\",        \"officeCode\": \"\",        \"secondTinNotice\": false,        \"nonemployeeCompensation\": 123.45,        \"payerMadeDirectSales\": false,        \"federalIncomeTaxWithheld\": 12.34,        \"stateAndLocalWithholding\": {          \"state\": \"CA\",          \"stateIdNumber\": \"123123123\"          \"stateIncome\": 123.45,          \"stateTaxWithheld\": 12.34,          \"locality\": \"Santa Monica\",          \"localityIdNumber\": \"456456\",          \"localTaxWithheld\": 12.34          \"localIncome\": 50000.00         },        \"federalEFile\": true,        \"postalMail\": true,        \"stateEFile\": true,        \"tinMatch\": true,        \"addressVerification\": true       }     ]   }  ```  For the full version of the payload and its schema details, refer to the Swagger schemas section.

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
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [default to undefined]
 **dryRun** | **boolean**|  | [optional] [default to false]
 **bulkUpsert1099FormsRequest** | [**BulkUpsert1099FormsRequest**](BulkUpsert1099FormsRequest.md)|  | [optional] 

### Return type

[**Form1099ProccessResult**](Form1099ProccessResult.md)

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
> Get1099Form200Response create1099Form (string avalaraVersion, string xCorrelationId, ICreateForm1099Request iCreateForm1099Request)

Creates a 1099 form.

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
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [default to undefined]
 **iCreateForm1099Request** | [**ICreateForm1099Request**](ICreateForm1099Request.md)|  | [optional] 

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
> void delete1099Form (string id, string avalaraVersion, string xCorrelationId)

Deletes a 1099 form.

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
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [default to undefined]

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
> Get1099Form200Response get1099Form (string id, string avalaraVersion, string xCorrelationId)

Retrieves a 1099 form.

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
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [default to undefined]

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
> FormResponseBase get1099FormPdf (string id, string avalaraVersion, string xCorrelationId, boolean markEdelivered)

Retrieves the PDF file for a single 1099 by form id.

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
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [default to undefined]
 **markEdelivered** | **boolean**| The parameter for marked e-delivered | [optional] [default to undefined]

### Return type

[**FormResponseBase**](FormResponseBase.md)

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

<a name="list1099forms"></a>
# **list1099Forms**
> Form1099List list1099Forms (string avalaraVersion, string xCorrelationId, string $filter, number $top, number $skip, string $orderBy)

Retrieves a list of 1099 forms based on query parameters.

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
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [default to undefined]
 **$filter** | **string**| A filter statement to identify specific records to retrieve. For more information on filtering, see &lt;a href&#x3D;\&quot;https://developer.avalara.com/avatax/filtering-in-rest/\&quot;&gt;Filtering in REST&lt;/a&gt;.    Collections support filtering only on certain fields. An attempt to filter on an unsupported field will receive a 400 Bad Request response.    Supported filtering fields are as follows:        issuerId      issuerReferenceId      taxYear      addressVerificationStatus - possible values are: unknown, pending, failed, incomplete, unchanged, verified      createdAt      edeliveryStatus - possible values are: sent, unscheduled, bad_verify, bad_verify_limit, scheduled, bounced, accepted      email      federalEfileStatus - possible values are: unscheduled, scheduled, sent, corrected_scheduled, accepted, corrected, corrected_accepted, held      recipientName      mailStatus - possible values are: sent, unscheduled, pending, delivered      referenceId      tinMatchStatus - possible values are: none, pending, matched, failed      type - possible values are: 940, 941, 943, 944, 945, 1042, 1042-S, 1095-B, 1095-C, 1097-BTC, 1098, 1098-C, 1098-E, 1098-Q, 1098-T, 3921, 3922, 5498, 5498-ESA, 5498-SA, 1099-MISC, 1099-A, 1099-B, 1099-C, 1099-CAP, 1099-DIV, 1099-G, 1099-INT, 1099-K, 1099-LS, 1099-LTC, 1099-NEC, 1099-OID, 1099-PATR, 1099-Q, 1099-R, 1099-S, 1099-SA, T4A, W-2, W-2G, 1099-HC      updatedAt      validity - possible values are: true, false | [optional] [default to undefined]
 **$top** | **number**| If nonzero, return no more than this number of results.     Used with skip to provide pagination for large datasets.     Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records. | [optional] [default to 10]
 **$skip** | **number**| If nonzero, skip this number of results before returning data. Used with top to provide pagination for large datasets. | [optional] [default to 0]
 **$orderBy** | **string**| A comma separated list of sort statements in the format (fieldname) [ASC|DESC], for example issuerReferenceId ASC.    Supported sorting fields are:         issuerReferenceId       taxYear       createdAt       recipientName      updatedAt | [optional] [default to undefined]

### Return type

[**Form1099List**](Form1099List.md)

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
> FormResponseBase update1099Form (string id, string avalaraVersion, string xCorrelationId, IUpdateForm1099Request iUpdateForm1099Request)

Updates a 1099 form.

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
 **xCorrelationId** | **string**| Unique correlation Id in a GUID format | [default to undefined]
 **iUpdateForm1099Request** | [**IUpdateForm1099Request**](IUpdateForm1099Request.md)|  | [optional] 

### Return type

[**FormResponseBase**](FormResponseBase.md)

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


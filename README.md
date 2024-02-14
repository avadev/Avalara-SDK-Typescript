## avalara-sdk@2.4.40

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install avalara-sdk@2.4.40 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

<a name="getting-started"></a>
## Getting Started

```typescript
import * as AvalaraSdk from 'avalara-sdk';

const configParams: AvalaraSdk.Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.Sandbox,
    machineName: 'test-machine',
    timeout:3000,
    bearerToken: '<YOUR BEARER TOKEN>',
    testBasePath: 'https://localhost:3000'
};
const config = new AvalaraSdk.Runtime.Configuration(configParams);
let client = new AvalaraSdk.Runtime.ApiClient(config);
let api = new AvalaraSdk.Avatax.V2.UtilitiesApi(client);
const result = await api.ping();

```

<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="OAuth Client Credentials Flow"></a>
### OAuth Client Credentials

- **Type**: OAuth
- **Flow**: client_credentials
- **Scopes**: 
  - avatax_api: avatax_api scope.

```typescript
import * as AvalaraSdk from 'avalara-sdk';

const configParams: Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.Sandbox,
    machineName: 'test-machine',
    timeout:3000,
    clientId: '<YOUR CLIENT ID>',
    clientSecret: '<YOUR CLIENT SECRET>',
    testBasePath: 'https://localhost:3000'
};
const config = new AvalaraSdk.Runtime.Configuration(configParams);
let client = new AvalaraSdk.Runtime.ApiClient(config);
// Client ID and Client Secret will be used to perform client credentials flow prior to making the request.
// Bearer token will be appended to the Authorization header.
let api = new AvalaraSdk.Avatax.V2.UtilitiesApi(client);
const result = await api.ping();
```

<a name="OAuth Device Code Flow"></a>
### OAuth Device Code

- **Type**: OAuth
- **Flow**: device_code
- **Scopes**: 
  - avatax_api: avatax_api scope.

```typescript
import * as AvalaraSdk from 'avalara-sdk';

const configParams: Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.Sandbox,
    machineName: 'test-machine',
    timeout:3000,
    clientId: '<YOUR AVALARA IDENTITY CLIENT ID>',
    testBasePath: 'https://localhost:3000'
};
const config = new AvalaraSdk.Runtime.Configuration(configParams);
// Pass in the scope (avatax_api in this instance), and the configuration object, clientID is a required property for the flow.
// Fetches the device code and verification url required for the user part of the flow (where they open the URI in their web browser and authenticate)
const response = await OAuthHelper.initiateDeviceAuthorizationFlow('avatax_api', config);
// User Interaction needs to happen here - some polling logic is needed to wait for offline user to authenticate to verification_uri through browser
// Once completed, bearer token will be returned.
const tokenResponse = await OAuthHelper.getAccessTokenForDeviceFlow(response.deviceCode, config);
// Add bearer token into the configuration options.
configuration.bearerToken = tokenResponse.accessToken;
let client = new AvalaraSdk.Runtime.ApiClient(config);
// Provided bearer token will be appended to Authorization header for each request.
let api = new AvalaraSdk.Avatax.V2.UtilitiesApi(client);
const result = await api.ping();

```
<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

<a name="documentation-for-EInvoicing-V1-api-endpoints"></a>
### EInvoicing V1 API Documentation

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DataInputFieldsApi* | [**getDataInputFields**](docs/EInvoicing/V1/DataInputFieldsApi.md#getdatainputfields) | **GET** /data-input-fields | Returns the mandatory and conditional invoice or creditnote input fields for different country mandates
*DocumentsApi* | [**downloadDocument**](docs/EInvoicing/V1/DocumentsApi.md#downloaddocument) | **GET** /documents/{documentId}/$download | Returns a copy of the document
*DocumentsApi* | [**getDocumentList**](docs/EInvoicing/V1/DocumentsApi.md#getdocumentlist) | **GET** /documents | Returns a summary of documents for a date range
*DocumentsApi* | [**getDocumentStatus**](docs/EInvoicing/V1/DocumentsApi.md#getdocumentstatus) | **GET** /document/{documentId}/status | Checks the status of a document
*DocumentsApi* | [**submitDocument**](docs/EInvoicing/V1/DocumentsApi.md#submitdocument) | **POST** /documents | Submits a document to Avalara E-Invoicing API
*MandatesApi* | [**getMandates**](docs/EInvoicing/V1/MandatesApi.md#getmandates) | **GET** /mandates | List country mandates that are supported by the Avalara E-Invoicing platform

<a name="documentation-for-models"></a>
## Documentation for Models

<a name="documentation-for-EInvoicing-V1-models"></a>
### EInvoicing V1 Model Documentation

 - [EInvoicing.V1.BadDownloadRequest](docs/EInvoicing/V1/BadDownloadRequest.md)
 - [EInvoicing.V1.BadRequest](docs/EInvoicing/V1/BadRequest.md)
 - [EInvoicing.V1.ConditionalForField](docs/EInvoicing/V1/ConditionalForField.md)
 - [EInvoicing.V1.DataInputField](docs/EInvoicing/V1/DataInputField.md)
 - [EInvoicing.V1.DataInputFieldNotUsedFor](docs/EInvoicing/V1/DataInputFieldNotUsedFor.md)
 - [EInvoicing.V1.DataInputFieldOptionalFor](docs/EInvoicing/V1/DataInputFieldOptionalFor.md)
 - [EInvoicing.V1.DataInputFieldRequiredFor](docs/EInvoicing/V1/DataInputFieldRequiredFor.md)
 - [EInvoicing.V1.DataInputFieldsResponse](docs/EInvoicing/V1/DataInputFieldsResponse.md)
 - [EInvoicing.V1.DocumentListResponse](docs/EInvoicing/V1/DocumentListResponse.md)
 - [EInvoicing.V1.DocumentStatusResponse](docs/EInvoicing/V1/DocumentStatusResponse.md)
 - [EInvoicing.V1.DocumentSubmissionError](docs/EInvoicing/V1/DocumentSubmissionError.md)
 - [EInvoicing.V1.DocumentSubmitResponse](docs/EInvoicing/V1/DocumentSubmitResponse.md)
 - [EInvoicing.V1.DocumentSummary](docs/EInvoicing/V1/DocumentSummary.md)
 - [EInvoicing.V1.ForbiddenError](docs/EInvoicing/V1/ForbiddenError.md)
 - [EInvoicing.V1.InputDataFormats](docs/EInvoicing/V1/InputDataFormats.md)
 - [EInvoicing.V1.InternalServerError](docs/EInvoicing/V1/InternalServerError.md)
 - [EInvoicing.V1.Mandate](docs/EInvoicing/V1/Mandate.md)
 - [EInvoicing.V1.MandatesResponse](docs/EInvoicing/V1/MandatesResponse.md)
 - [EInvoicing.V1.NotFoundError](docs/EInvoicing/V1/NotFoundError.md)
 - [EInvoicing.V1.NotUsedForField](docs/EInvoicing/V1/NotUsedForField.md)
 - [EInvoicing.V1.RequiredWhenField](docs/EInvoicing/V1/RequiredWhenField.md)
 - [EInvoicing.V1.StatusEvent](docs/EInvoicing/V1/StatusEvent.md)
 - [EInvoicing.V1.SubmitDocumentData](docs/EInvoicing/V1/SubmitDocumentData.md)
 - [EInvoicing.V1.SubmitDocumentMetadata](docs/EInvoicing/V1/SubmitDocumentMetadata.md)
 - [EInvoicing.V1.WorkflowIds](docs/EInvoicing/V1/WorkflowIds.md)

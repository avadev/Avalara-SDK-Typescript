## Avalara-SDK

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment

- Node.js
- Webpack
- Browserify

Language level

- ES5 - you must have a Promises/A+ library installed
- ES6

Module system

- CommonJS
- ES6 module system
  

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install avalara-sdk@24.12.0 --save
```

<a name="getting-started"></a>

## Getting Started

```typescript
import * as AvalaraSdk from "avalara-sdk";
import { AvaTaxEnvironment } from "avalara-sdk/runtime";

const configParams: AvalaraSdk.Runtime.ConfigurationParameters = {
  appName: "asv-sdk-test-app",
  appVersion: "1.0",
  environment: AvaTaxEnvironment.Sandbox,
  machineName: "test-machine",
  timeout: 3000,
  bearerToken: "<YOUR BEARER TOKEN>",
  testBasePath: "https://localhost:3000",
};
const config = new AvalaraSdk.Runtime.Configuration(configParams);
let client = new AvalaraSdk.Runtime.ApiClient(config);
let api = new AvalaraSdk.EInvoicing.V1.MandatesApi(client);
let requestParameters: AvalaraSdk.EInvoicing.V1.GetMandatesInterface = {
  xAvalaraClient: "Swagger UI; 22.7.0; Custom; 1.0",
};
const result = await api.getMandates(requestParameters);
console.log(result);
```

## Documentation for API Endpoints

<a name="documentation-for-EInvoicing-V1-api-endpoints"></a>

### EInvoicing V1 API Documentation

| Class                | Method                                                                                              | HTTP request                                                    | Description                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| _DataInputFieldsApi_ | [**getDataInputFields**](docs/EInvoicing/V1/DataInputFieldsApi.md#getdatainputfields)               | **GET** /data-input-fields                                      | Returns the optionality of document fields for different country mandates                               |
| _DocumentsApi_       | [**downloadDocument**](docs/EInvoicing/V1/DocumentsApi.md#downloaddocument)                         | **GET** /documents/{documentId}/$download                       | Returns a copy of the document                                                                          |
| _DocumentsApi_       | [**fetchDocuments**](docs/EInvoicing/V1/DocumentsApi.md#fetchdocuments)                             | **POST** /documents/$fetch                                      | Fetch the inbound document from a tax authority                                                         |
| _DocumentsApi_       | [**getDocumentList**](docs/EInvoicing/V1/DocumentsApi.md#getdocumentlist)                           | **GET** /documents                                              | Returns a summary of documents for a date range                                                         |
| _DocumentsApi_       | [**getDocumentStatus**](docs/EInvoicing/V1/DocumentsApi.md#getdocumentstatus)                       | **GET** /documents/{documentId}/status                          | Checks the status of a document                                                                         |
| _DocumentsApi_       | [**submitDocument**](docs/EInvoicing/V1/DocumentsApi.md#submitdocument)                             | **POST** /documents                                             | Submits a document to Avalara E-Invoicing API                                                           |
| _InteropApi_         | [**submitInteropDocument**](docs/EInvoicing/V1/InteropApi.md#submitinteropdocument)                 | **POST** /interop/documents                                     | Submit a document                                                                                       |
| _MandatesApi_        | [**getMandateDataInputFields**](docs/EInvoicing/V1/MandatesApi.md#getmandatedatainputfields)        | **GET** /mandates/{mandateId}/data-input-fields                 | Returns document field information for a country mandate, a selected document type, and its version     |
| _MandatesApi_        | [**getMandates**](docs/EInvoicing/V1/MandatesApi.md#getmandates)                                    | **GET** /mandates                                               | List country mandates that are supported by the Avalara E-Invoicing platform                            |
| _TradingPartnersApi_ | [**batchSearchParticipants**](docs/EInvoicing/V1/TradingPartnersApi.md#batchsearchparticipants)     | **POST** /trading-partners/batch-searches                       | Creates a batch search and performs a batch search in the directory for participants in the background. |
| _TradingPartnersApi_ | [**downloadBatchSearchReport**](docs/EInvoicing/V1/TradingPartnersApi.md#downloadbatchsearchreport) | **GET** /trading-partners/batch-searches/{id}/$download-results | Download batch search results in a csv file.                                                            |
| _TradingPartnersApi_ | [**getBatchSearchDetail**](docs/EInvoicing/V1/TradingPartnersApi.md#getbatchsearchdetail)           | **GET** /trading-partners/batch-searches/{id}                   | Get the batch search details for a given id.                                                            |
| _TradingPartnersApi_ | [**listBatchSearches**](docs/EInvoicing/V1/TradingPartnersApi.md#listbatchsearches)                 | **GET** /trading-partners/batch-searches                        | List all batch searches that were previously submitted.                                                 |
| _TradingPartnersApi_ | [**searchParticipants**](docs/EInvoicing/V1/TradingPartnersApi.md#searchparticipants)               | **GET** /trading-partners                                       | Returns a list of participants matching the input query.                                                |

<a name="documentation-for-models"></a>

## Documentation for Models

<a name="documentation-for-EInvoicing-V1-models"></a>

### EInvoicing V1 Model Documentation

- [EInvoicing.V1.BadDownloadRequest](docs/EInvoicing/V1/BadDownloadRequest.md)
- [EInvoicing.V1.BadRequest](docs/EInvoicing/V1/BadRequest.md)
- [EInvoicing.V1.BatchSearch](docs/EInvoicing/V1/BatchSearch.md)
- [EInvoicing.V1.BatchSearchListResponse](docs/EInvoicing/V1/BatchSearchListResponse.md)
- [EInvoicing.V1.ConditionalForField](docs/EInvoicing/V1/ConditionalForField.md)
- [EInvoicing.V1.DataInputField](docs/EInvoicing/V1/DataInputField.md)
- [EInvoicing.V1.DataInputFieldNotUsedFor](docs/EInvoicing/V1/DataInputFieldNotUsedFor.md)
- [EInvoicing.V1.DataInputFieldOptionalFor](docs/EInvoicing/V1/DataInputFieldOptionalFor.md)
- [EInvoicing.V1.DataInputFieldRequiredFor](docs/EInvoicing/V1/DataInputFieldRequiredFor.md)
- [EInvoicing.V1.DataInputFieldsResponse](docs/EInvoicing/V1/DataInputFieldsResponse.md)
- [EInvoicing.V1.DirectorySearchResponse](docs/EInvoicing/V1/DirectorySearchResponse.md)
- [EInvoicing.V1.DirectorySearchResponseValueInner](docs/EInvoicing/V1/DirectorySearchResponseValueInner.md)
- [EInvoicing.V1.DirectorySearchResponseValueInnerAddressesInner](docs/EInvoicing/V1/DirectorySearchResponseValueInnerAddressesInner.md)
- [EInvoicing.V1.DirectorySearchResponseValueInnerIdentifiersInner](docs/EInvoicing/V1/DirectorySearchResponseValueInnerIdentifiersInner.md)
- [EInvoicing.V1.DirectorySearchResponseValueInnerSupportedDocumentTypesInner](docs/EInvoicing/V1/DirectorySearchResponseValueInnerSupportedDocumentTypesInner.md)
- [EInvoicing.V1.DocumentFetch](docs/EInvoicing/V1/DocumentFetch.md)
- [EInvoicing.V1.DocumentFetchRequest](docs/EInvoicing/V1/DocumentFetchRequest.md)
- [EInvoicing.V1.DocumentFetchRequestDataInner](docs/EInvoicing/V1/DocumentFetchRequestDataInner.md)
- [EInvoicing.V1.DocumentFetchRequestMetadata](docs/EInvoicing/V1/DocumentFetchRequestMetadata.md)
- [EInvoicing.V1.DocumentListResponse](docs/EInvoicing/V1/DocumentListResponse.md)
- [EInvoicing.V1.DocumentStatusResponse](docs/EInvoicing/V1/DocumentStatusResponse.md)
- [EInvoicing.V1.DocumentSubmissionError](docs/EInvoicing/V1/DocumentSubmissionError.md)
- [EInvoicing.V1.DocumentSubmitResponse](docs/EInvoicing/V1/DocumentSubmitResponse.md)
- [EInvoicing.V1.DocumentSummary](docs/EInvoicing/V1/DocumentSummary.md)
- [EInvoicing.V1.ErrorResponse](docs/EInvoicing/V1/ErrorResponse.md)
- [EInvoicing.V1.ForbiddenError](docs/EInvoicing/V1/ForbiddenError.md)
- [EInvoicing.V1.InputDataFormats](docs/EInvoicing/V1/InputDataFormats.md)
- [EInvoicing.V1.InternalServerError](docs/EInvoicing/V1/InternalServerError.md)
- [EInvoicing.V1.Mandate](docs/EInvoicing/V1/Mandate.md)
- [EInvoicing.V1.MandateDataInputField](docs/EInvoicing/V1/MandateDataInputField.md)
- [EInvoicing.V1.MandateDataInputFieldNamespace](docs/EInvoicing/V1/MandateDataInputFieldNamespace.md)
- [EInvoicing.V1.MandatesResponse](docs/EInvoicing/V1/MandatesResponse.md)
- [EInvoicing.V1.NotFoundError](docs/EInvoicing/V1/NotFoundError.md)
- [EInvoicing.V1.NotUsedForField](docs/EInvoicing/V1/NotUsedForField.md)
- [EInvoicing.V1.RequiredWhenField](docs/EInvoicing/V1/RequiredWhenField.md)
- [EInvoicing.V1.StatusEvent](docs/EInvoicing/V1/StatusEvent.md)
- [EInvoicing.V1.SubmitDocumentMetadata](docs/EInvoicing/V1/SubmitDocumentMetadata.md)
- [EInvoicing.V1.SubmitInteropDocument202Response](docs/EInvoicing/V1/SubmitInteropDocument202Response.md)
- [EInvoicing.V1.WorkflowIds](docs/EInvoicing/V1/WorkflowIds.md)
<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

<a name="documentation-for-EInvoicing-V1-api-endpoints"></a>
### EInvoicing V1 API Documentation

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DataInputFieldsApi* | [**getDataInputFields**](docs/EInvoicing/V1/DataInputFieldsApi.md#getdatainputfields) | **GET** /data-input-fields | Returns the optionality of document fields for different country mandates
*DocumentsApi* | [**downloadDocument**](docs/EInvoicing/V1/DocumentsApi.md#downloaddocument) | **GET** /documents/{documentId}/$download | Returns a copy of the document
*DocumentsApi* | [**fetchDocuments**](docs/EInvoicing/V1/DocumentsApi.md#fetchdocumentsoperation) | **POST** /documents/$fetch | Fetch the inbound document from a tax authority
*DocumentsApi* | [**getDocumentList**](docs/EInvoicing/V1/DocumentsApi.md#getdocumentlist) | **GET** /documents | Returns a summary of documents for a date range
*DocumentsApi* | [**getDocumentStatus**](docs/EInvoicing/V1/DocumentsApi.md#getdocumentstatus) | **GET** /documents/{documentId}/status | Checks the status of a document
*DocumentsApi* | [**submitDocument**](docs/EInvoicing/V1/DocumentsApi.md#submitdocument) | **POST** /documents | Submits a document to Avalara E-Invoicing API
*InteropApi* | [**submitInteropDocument**](docs/EInvoicing/V1/InteropApi.md#submitinteropdocument) | **POST** /interop/documents | Submit a document
*MandatesApi* | [**getMandateDataInputFields**](docs/EInvoicing/V1/MandatesApi.md#getmandatedatainputfields) | **GET** /mandates/{mandateId}/data-input-fields | Returns document field information for a country mandate, a selected document type, and its version
*MandatesApi* | [**getMandates**](docs/EInvoicing/V1/MandatesApi.md#getmandates) | **GET** /mandates | List country mandates that are supported by the Avalara E-Invoicing platform
*SubscriptionsApi* | [**createWebhookSubscription**](docs/EInvoicing/V1/SubscriptionsApi.md#createwebhooksubscription) | **POST** /webhooks/subscriptions | Create a subscription to events
*SubscriptionsApi* | [**deleteWebhookSubscription**](docs/EInvoicing/V1/SubscriptionsApi.md#deletewebhooksubscription) | **DELETE** /webhooks/subscriptions/{subscription-id} | Unsubscribe from events
*SubscriptionsApi* | [**getWebhookSubscription**](docs/EInvoicing/V1/SubscriptionsApi.md#getwebhooksubscription) | **GET** /webhooks/subscriptions/{subscription-id} | Get details of a subscription
*SubscriptionsApi* | [**listWebhookSubscriptions**](docs/EInvoicing/V1/SubscriptionsApi.md#listwebhooksubscriptions) | **GET** /webhooks/subscriptions | List all subscriptions
*TaxIdentifiersApi* | [**taxIdentifierSchemaByCountry**](docs/EInvoicing/V1/TaxIdentifiersApi.md#taxidentifierschemabycountry) | **GET** /tax-identifiers/schema | Returns the tax identifier request & response schema for a specific country.
*TaxIdentifiersApi* | [**validateTaxIdentifier**](docs/EInvoicing/V1/TaxIdentifiersApi.md#validatetaxidentifier) | **POST** /tax-identifiers/validate | Validates a tax identifier.
*TradingPartnersApi* | [**batchSearchParticipants**](docs/EInvoicing/V1/TradingPartnersApi.md#batchsearchparticipants) | **POST** /trading-partners/batch-searches | Handles batch search requests by uploading a file containing search parameters.
*TradingPartnersApi* | [**createTradingPartner**](docs/EInvoicing/V1/TradingPartnersApi.md#createtradingpartner) | **POST** /trading-partners | Creates a new trading partner.
*TradingPartnersApi* | [**createTradingPartnersBatch**](docs/EInvoicing/V1/TradingPartnersApi.md#createtradingpartnersbatchoperation) | **POST** /trading-partners/batch | Creates a batch of multiple trading partners.
*TradingPartnersApi* | [**deleteTradingPartner**](docs/EInvoicing/V1/TradingPartnersApi.md#deletetradingpartner) | **DELETE** /trading-partners/{id} | Deletes a trading partner using ID.
*TradingPartnersApi* | [**downloadBatchSearchReport**](docs/EInvoicing/V1/TradingPartnersApi.md#downloadbatchsearchreport) | **GET** /trading-partners/batch-searches/{id}/$download-results | Downloads batch search results in a csv file.
*TradingPartnersApi* | [**getBatchSearchDetail**](docs/EInvoicing/V1/TradingPartnersApi.md#getbatchsearchdetail) | **GET** /trading-partners/batch-searches/{id} | Returns the batch search details using ID.
*TradingPartnersApi* | [**listBatchSearches**](docs/EInvoicing/V1/TradingPartnersApi.md#listbatchsearches) | **GET** /trading-partners/batch-searches | Lists all batch searches that were previously submitted.
*TradingPartnersApi* | [**searchParticipants**](docs/EInvoicing/V1/TradingPartnersApi.md#searchparticipants) | **GET** /trading-partners | Returns a list of participants matching the input query.
*TradingPartnersApi* | [**updateTradingPartner**](docs/EInvoicing/V1/TradingPartnersApi.md#updatetradingpartner) | **PUT** /trading-partners/{id} | Updates a trading partner using ID.

<a name="documentation-for-A1099-V2-api-endpoints"></a>
### A1099 V2 API Documentation

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CompaniesW9Api* | [**createCompany**](docs/A1099/V2/CompaniesW9Api.md#createcompany) | **POST** /w9/companies | Create a company
*CompaniesW9Api* | [**deleteCompany**](docs/A1099/V2/CompaniesW9Api.md#deletecompany) | **DELETE** /w9/companies/{id} | Delete a company
*CompaniesW9Api* | [**getCompanies**](docs/A1099/V2/CompaniesW9Api.md#getcompanies) | **GET** /w9/companies | List companies
*CompaniesW9Api* | [**getCompany**](docs/A1099/V2/CompaniesW9Api.md#getcompany) | **GET** /w9/companies/{id} | Retrieve a company
*CompaniesW9Api* | [**updateCompany**](docs/A1099/V2/CompaniesW9Api.md#updatecompany) | **PUT** /w9/companies/{id} | Update a company
*Forms1099Api* | [**bulkUpsert1099Forms**](docs/A1099/V2/Forms1099Api.md#bulkupsert1099forms) | **POST** /1099/forms/$bulk-upsert | Create or update multiple 1099/1095/W2/1042S forms
*Forms1099Api* | [**create1099Form**](docs/A1099/V2/Forms1099Api.md#create1099form) | **POST** /1099/forms | Create a 1099/1095/W2/1042S form
*Forms1099Api* | [**delete1099Form**](docs/A1099/V2/Forms1099Api.md#delete1099form) | **DELETE** /1099/forms/{id} | Delete a 1099/1095/W2/1042S form
*Forms1099Api* | [**get1099Form**](docs/A1099/V2/Forms1099Api.md#get1099form) | **GET** /1099/forms/{id} | Retrieve a 1099/1095/W2/1042S form
*Forms1099Api* | [**get1099FormPdf**](docs/A1099/V2/Forms1099Api.md#get1099formpdf) | **GET** /1099/forms/{id}/pdf | Retrieve the PDF file for a 1099/1095/W2/1042S form
*Forms1099Api* | [**list1099Forms**](docs/A1099/V2/Forms1099Api.md#list1099forms) | **GET** /1099/forms | List 1099/1095/W2/1042S forms
*Forms1099Api* | [**update1099Form**](docs/A1099/V2/Forms1099Api.md#update1099form) | **PUT** /1099/forms/{id} | Update a 1099/1095/W2/1042S form
*FormsW9Api* | [**createAndSendW9FormEmail**](docs/A1099/V2/FormsW9Api.md#createandsendw9formemailoperation) | **POST** /w9/forms/$create-and-send-email | Create a minimal W9/W4/W8 form and sends the e-mail request
*FormsW9Api* | [**createW9Form**](docs/A1099/V2/FormsW9Api.md#createw9formoperation) | **POST** /w9/forms | Create a W9/W4/W8 form
*FormsW9Api* | [**deleteW9Form**](docs/A1099/V2/FormsW9Api.md#deletew9form) | **DELETE** /w9/forms/{id} | Delete a W9/W4/W8 form
*FormsW9Api* | [**getW9Form**](docs/A1099/V2/FormsW9Api.md#getw9form) | **GET** /w9/forms/{id} | Retrieve a W9/W4/W8 form
*FormsW9Api* | [**listW9Forms**](docs/A1099/V2/FormsW9Api.md#listw9forms) | **GET** /w9/forms | List W9/W4/W8 forms
*FormsW9Api* | [**sendW9FormEmail**](docs/A1099/V2/FormsW9Api.md#sendw9formemail) | **POST** /w9/forms/{id}/$send-email | Send an email to the vendor/payee requesting they fill out a W9/W4/W8 form
*FormsW9Api* | [**updateW9Form**](docs/A1099/V2/FormsW9Api.md#updatew9form) | **PUT** /w9/forms/{id} | Update a W9/W4/W8 form
*FormsW9Api* | [**uploadW9Files**](docs/A1099/V2/FormsW9Api.md#uploadw9files) | **POST** /w9/forms/{id}/attachment | Replace the PDF file for a W9/W4/W8 form
*Issuers1099Api* | [**createIssuer**](docs/A1099/V2/Issuers1099Api.md#createissuer) | **POST** /1099/issuers | Create an issuer
*Issuers1099Api* | [**deleteIssuer**](docs/A1099/V2/Issuers1099Api.md#deleteissuer) | **DELETE** /1099/issuers/{id} | Delete an issuer
*Issuers1099Api* | [**getIssuer**](docs/A1099/V2/Issuers1099Api.md#getissuer) | **GET** /1099/issuers/{id} | Retrieve an issuer
*Issuers1099Api* | [**getIssuers**](docs/A1099/V2/Issuers1099Api.md#getissuers) | **GET** /1099/issuers | List issuers
*Issuers1099Api* | [**updateIssuer**](docs/A1099/V2/Issuers1099Api.md#updateissuer) | **PUT** /1099/issuers/{id} | Update an issuer
*JobsApi* | [**getJob**](docs/A1099/V2/JobsApi.md#getjob) | **GET** /jobs/{id} | Retrieves information about the job

<a name="documentation-for-models"></a>
## Documentation for Models

<a name="documentation-for-EInvoicing-V1-models"></a>
### EInvoicing V1 Model Documentation

 - [EInvoicing.V1.Address](docs/EInvoicing/V1/Address.md)
 - [EInvoicing.V1.BadDownloadRequest](docs/EInvoicing/V1/BadDownloadRequest.md)
 - [EInvoicing.V1.BadRequest](docs/EInvoicing/V1/BadRequest.md)
 - [EInvoicing.V1.BatchErrorDetail](docs/EInvoicing/V1/BatchErrorDetail.md)
 - [EInvoicing.V1.BatchSearch](docs/EInvoicing/V1/BatchSearch.md)
 - [EInvoicing.V1.BatchSearchListResponse](docs/EInvoicing/V1/BatchSearchListResponse.md)
 - [EInvoicing.V1.BatchSearchParticipants202Response](docs/EInvoicing/V1/BatchSearchParticipants202Response.md)
 - [EInvoicing.V1.ConditionalForField](docs/EInvoicing/V1/ConditionalForField.md)
 - [EInvoicing.V1.Consents](docs/EInvoicing/V1/Consents.md)
 - [EInvoicing.V1.CreateTradingPartner201Response](docs/EInvoicing/V1/CreateTradingPartner201Response.md)
 - [EInvoicing.V1.CreateTradingPartnersBatch200Response](docs/EInvoicing/V1/CreateTradingPartnersBatch200Response.md)
 - [EInvoicing.V1.CreateTradingPartnersBatch200ResponseValueInner](docs/EInvoicing/V1/CreateTradingPartnersBatch200ResponseValueInner.md)
 - [EInvoicing.V1.CreateTradingPartnersBatchRequest](docs/EInvoicing/V1/CreateTradingPartnersBatchRequest.md)
 - [EInvoicing.V1.DataInputField](docs/EInvoicing/V1/DataInputField.md)
 - [EInvoicing.V1.DataInputFieldNotUsedFor](docs/EInvoicing/V1/DataInputFieldNotUsedFor.md)
 - [EInvoicing.V1.DataInputFieldOptionalFor](docs/EInvoicing/V1/DataInputFieldOptionalFor.md)
 - [EInvoicing.V1.DataInputFieldRequiredFor](docs/EInvoicing/V1/DataInputFieldRequiredFor.md)
 - [EInvoicing.V1.DataInputFieldsResponse](docs/EInvoicing/V1/DataInputFieldsResponse.md)
 - [EInvoicing.V1.DocumentFetch](docs/EInvoicing/V1/DocumentFetch.md)
 - [EInvoicing.V1.DocumentListResponse](docs/EInvoicing/V1/DocumentListResponse.md)
 - [EInvoicing.V1.DocumentStatusResponse](docs/EInvoicing/V1/DocumentStatusResponse.md)
 - [EInvoicing.V1.DocumentSubmissionError](docs/EInvoicing/V1/DocumentSubmissionError.md)
 - [EInvoicing.V1.DocumentSubmitResponse](docs/EInvoicing/V1/DocumentSubmitResponse.md)
 - [EInvoicing.V1.DocumentSummary](docs/EInvoicing/V1/DocumentSummary.md)
 - [EInvoicing.V1.ErrorResponse](docs/EInvoicing/V1/ErrorResponse.md)
 - [EInvoicing.V1.EventId](docs/EInvoicing/V1/EventId.md)
 - [EInvoicing.V1.EventMessage](docs/EInvoicing/V1/EventMessage.md)
 - [EInvoicing.V1.EventPayload](docs/EInvoicing/V1/EventPayload.md)
 - [EInvoicing.V1.EventSubscription](docs/EInvoicing/V1/EventSubscription.md)
 - [EInvoicing.V1.Extension](docs/EInvoicing/V1/Extension.md)
 - [EInvoicing.V1.FetchDocumentsRequest](docs/EInvoicing/V1/FetchDocumentsRequest.md)
 - [EInvoicing.V1.FetchDocumentsRequestDataInner](docs/EInvoicing/V1/FetchDocumentsRequestDataInner.md)
 - [EInvoicing.V1.FetchDocumentsRequestMetadata](docs/EInvoicing/V1/FetchDocumentsRequestMetadata.md)
 - [EInvoicing.V1.ForbiddenError](docs/EInvoicing/V1/ForbiddenError.md)
 - [EInvoicing.V1.HmacSignature](docs/EInvoicing/V1/HmacSignature.md)
 - [EInvoicing.V1.HmacSignatureValue](docs/EInvoicing/V1/HmacSignatureValue.md)
 - [EInvoicing.V1.Id](docs/EInvoicing/V1/Id.md)
 - [EInvoicing.V1.Identifier](docs/EInvoicing/V1/Identifier.md)
 - [EInvoicing.V1.InputDataFormats](docs/EInvoicing/V1/InputDataFormats.md)
 - [EInvoicing.V1.InternalServerError](docs/EInvoicing/V1/InternalServerError.md)
 - [EInvoicing.V1.Mandate](docs/EInvoicing/V1/Mandate.md)
 - [EInvoicing.V1.MandateDataInputField](docs/EInvoicing/V1/MandateDataInputField.md)
 - [EInvoicing.V1.MandateDataInputFieldNamespace](docs/EInvoicing/V1/MandateDataInputFieldNamespace.md)
 - [EInvoicing.V1.MandatesResponse](docs/EInvoicing/V1/MandatesResponse.md)
 - [EInvoicing.V1.NotFoundError](docs/EInvoicing/V1/NotFoundError.md)
 - [EInvoicing.V1.NotUsedForField](docs/EInvoicing/V1/NotUsedForField.md)
 - [EInvoicing.V1.OutputDataFormats](docs/EInvoicing/V1/OutputDataFormats.md)
 - [EInvoicing.V1.Pagination](docs/EInvoicing/V1/Pagination.md)
 - [EInvoicing.V1.RequiredWhenField](docs/EInvoicing/V1/RequiredWhenField.md)
 - [EInvoicing.V1.SearchParticipants200Response](docs/EInvoicing/V1/SearchParticipants200Response.md)
 - [EInvoicing.V1.Signature](docs/EInvoicing/V1/Signature.md)
 - [EInvoicing.V1.SignatureSignature](docs/EInvoicing/V1/SignatureSignature.md)
 - [EInvoicing.V1.SignatureValue](docs/EInvoicing/V1/SignatureValue.md)
 - [EInvoicing.V1.SignatureValueSignature](docs/EInvoicing/V1/SignatureValueSignature.md)
 - [EInvoicing.V1.StatusEvent](docs/EInvoicing/V1/StatusEvent.md)
 - [EInvoicing.V1.SubmitDocumentMetadata](docs/EInvoicing/V1/SubmitDocumentMetadata.md)
 - [EInvoicing.V1.SubmitInteropDocument202Response](docs/EInvoicing/V1/SubmitInteropDocument202Response.md)
 - [EInvoicing.V1.SubscriptionCommon](docs/EInvoicing/V1/SubscriptionCommon.md)
 - [EInvoicing.V1.SubscriptionDetail](docs/EInvoicing/V1/SubscriptionDetail.md)
 - [EInvoicing.V1.SubscriptionListResponse](docs/EInvoicing/V1/SubscriptionListResponse.md)
 - [EInvoicing.V1.SubscriptionRegistration](docs/EInvoicing/V1/SubscriptionRegistration.md)
 - [EInvoicing.V1.SuccessResponse](docs/EInvoicing/V1/SuccessResponse.md)
 - [EInvoicing.V1.SupportedDocumentTypes](docs/EInvoicing/V1/SupportedDocumentTypes.md)
 - [EInvoicing.V1.TaxIdentifierRequest](docs/EInvoicing/V1/TaxIdentifierRequest.md)
 - [EInvoicing.V1.TaxIdentifierResponse](docs/EInvoicing/V1/TaxIdentifierResponse.md)
 - [EInvoicing.V1.TaxIdentifierResponseValue](docs/EInvoicing/V1/TaxIdentifierResponseValue.md)
 - [EInvoicing.V1.TaxIdentifierSchemaByCountry200Response](docs/EInvoicing/V1/TaxIdentifierSchemaByCountry200Response.md)
 - [EInvoicing.V1.TradingPartner](docs/EInvoicing/V1/TradingPartner.md)
 - [EInvoicing.V1.UpdateTradingPartner200Response](docs/EInvoicing/V1/UpdateTradingPartner200Response.md)
 - [EInvoicing.V1.ValidationError](docs/EInvoicing/V1/ValidationError.md)
 - [EInvoicing.V1.WebhookInvocation](docs/EInvoicing/V1/WebhookInvocation.md)
 - [EInvoicing.V1.WebhooksErrorInfo](docs/EInvoicing/V1/WebhooksErrorInfo.md)
 - [EInvoicing.V1.WebhooksErrorResponse](docs/EInvoicing/V1/WebhooksErrorResponse.md)
 - [EInvoicing.V1.WorkflowIds](docs/EInvoicing/V1/WorkflowIds.md)


<a name="documentation-for-A1099-V2-models"></a>
### A1099 V2 Model Documentation

 - [A1099.V2.CompanyBase](docs/A1099/V2/CompanyBase.md)
 - [A1099.V2.CompanyRequest](docs/A1099/V2/CompanyRequest.md)
 - [A1099.V2.CompanyResponse](docs/A1099/V2/CompanyResponse.md)
 - [A1099.V2.CoveredIndividual](docs/A1099/V2/CoveredIndividual.md)
 - [A1099.V2.CreateAndSendW9FormEmailRequest](docs/A1099/V2/CreateAndSendW9FormEmailRequest.md)
 - [A1099.V2.CreateW9Form201Response](docs/A1099/V2/CreateW9Form201Response.md)
 - [A1099.V2.CreateW9FormRequest](docs/A1099/V2/CreateW9FormRequest.md)
 - [A1099.V2.EntryStatusResponse](docs/A1099/V2/EntryStatusResponse.md)
 - [A1099.V2.ErrorResponse](docs/A1099/V2/ErrorResponse.md)
 - [A1099.V2.ErrorResponseItem](docs/A1099/V2/ErrorResponseItem.md)
 - [A1099.V2.Form1042S](docs/A1099/V2/Form1042S.md)
 - [A1099.V2.Form1095B](docs/A1099/V2/Form1095B.md)
 - [A1099.V2.Form1095C](docs/A1099/V2/Form1095C.md)
 - [A1099.V2.Form1099Base](docs/A1099/V2/Form1099Base.md)
 - [A1099.V2.Form1099Div](docs/A1099/V2/Form1099Div.md)
 - [A1099.V2.Form1099Int](docs/A1099/V2/Form1099Int.md)
 - [A1099.V2.Form1099K](docs/A1099/V2/Form1099K.md)
 - [A1099.V2.Form1099ListRequest](docs/A1099/V2/Form1099ListRequest.md)
 - [A1099.V2.Form1099Misc](docs/A1099/V2/Form1099Misc.md)
 - [A1099.V2.Form1099Nec](docs/A1099/V2/Form1099Nec.md)
 - [A1099.V2.Form1099R](docs/A1099/V2/Form1099R.md)
 - [A1099.V2.Form1099StatusDetail](docs/A1099/V2/Form1099StatusDetail.md)
 - [A1099.V2.Get1099Form200Response](docs/A1099/V2/Get1099Form200Response.md)
 - [A1099.V2.IntermediaryOrFlowThrough](docs/A1099/V2/IntermediaryOrFlowThrough.md)
 - [A1099.V2.IrsResponse](docs/A1099/V2/IrsResponse.md)
 - [A1099.V2.IssuerBase](docs/A1099/V2/IssuerBase.md)
 - [A1099.V2.IssuerRequest](docs/A1099/V2/IssuerRequest.md)
 - [A1099.V2.IssuerResponse](docs/A1099/V2/IssuerResponse.md)
 - [A1099.V2.JobResponse](docs/A1099/V2/JobResponse.md)
 - [A1099.V2.OfferAndCoverage](docs/A1099/V2/OfferAndCoverage.md)
 - [A1099.V2.PaginatedQueryResultModelCompanyResponse](docs/A1099/V2/PaginatedQueryResultModelCompanyResponse.md)
 - [A1099.V2.PaginatedQueryResultModelForm1099Base](docs/A1099/V2/PaginatedQueryResultModelForm1099Base.md)
 - [A1099.V2.PaginatedQueryResultModelIssuerResponse](docs/A1099/V2/PaginatedQueryResultModelIssuerResponse.md)
 - [A1099.V2.PaginatedQueryResultModelW9FormBaseResponse](docs/A1099/V2/PaginatedQueryResultModelW9FormBaseResponse.md)
 - [A1099.V2.PrimaryWithholdingAgent](docs/A1099/V2/PrimaryWithholdingAgent.md)
 - [A1099.V2.StateAndLocalWithholding](docs/A1099/V2/StateAndLocalWithholding.md)
 - [A1099.V2.StateEfileStatusDetail](docs/A1099/V2/StateEfileStatusDetail.md)
 - [A1099.V2.SubstantialUsOwnerRequest](docs/A1099/V2/SubstantialUsOwnerRequest.md)
 - [A1099.V2.SubstantialUsOwnerResponse](docs/A1099/V2/SubstantialUsOwnerResponse.md)
 - [A1099.V2.TinMatchStatusResponse](docs/A1099/V2/TinMatchStatusResponse.md)
 - [A1099.V2.ValidationError](docs/A1099/V2/ValidationError.md)
 - [A1099.V2.W4FormMinimalRequest](docs/A1099/V2/W4FormMinimalRequest.md)
 - [A1099.V2.W4FormRequest](docs/A1099/V2/W4FormRequest.md)
 - [A1099.V2.W4FormResponse](docs/A1099/V2/W4FormResponse.md)
 - [A1099.V2.W8BenEFormMinimalRequest](docs/A1099/V2/W8BenEFormMinimalRequest.md)
 - [A1099.V2.W8BenEFormRequest](docs/A1099/V2/W8BenEFormRequest.md)
 - [A1099.V2.W8BenEFormResponse](docs/A1099/V2/W8BenEFormResponse.md)
 - [A1099.V2.W8BenFormMinimalRequest](docs/A1099/V2/W8BenFormMinimalRequest.md)
 - [A1099.V2.W8BenFormRequest](docs/A1099/V2/W8BenFormRequest.md)
 - [A1099.V2.W8BenFormResponse](docs/A1099/V2/W8BenFormResponse.md)
 - [A1099.V2.W8ImyFormMinimalRequest](docs/A1099/V2/W8ImyFormMinimalRequest.md)
 - [A1099.V2.W8ImyFormRequest](docs/A1099/V2/W8ImyFormRequest.md)
 - [A1099.V2.W8ImyFormResponse](docs/A1099/V2/W8ImyFormResponse.md)
 - [A1099.V2.W9FormBaseMinimalRequest](docs/A1099/V2/W9FormBaseMinimalRequest.md)
 - [A1099.V2.W9FormBaseRequest](docs/A1099/V2/W9FormBaseRequest.md)
 - [A1099.V2.W9FormBaseResponse](docs/A1099/V2/W9FormBaseResponse.md)
 - [A1099.V2.W9FormMinimalRequest](docs/A1099/V2/W9FormMinimalRequest.md)
 - [A1099.V2.W9FormRequest](docs/A1099/V2/W9FormRequest.md)
 - [A1099.V2.W9FormResponse](docs/A1099/V2/W9FormResponse.md)

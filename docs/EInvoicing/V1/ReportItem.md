# AvalaraSdk.EInvoicing.V1.ReportItem
Represents a single report with full details including metadata and associated transaction IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportId** | **string** | The unique ID for this report. | [optional] [default to undefined]
**jobId** | **string** | The unique ID of the job that generated this report. | [optional] [default to undefined]
**reportGenerateDate** | **Date** | The date and time when the report was generated. | [optional] [default to undefined]
**reportFrom** | **Date** | The start date of the reporting period. | [optional] [default to undefined]
**reportTo** | **Date** | The end date of the reporting period. | [optional] [default to undefined]
**countryCode** | **string** | The two-letter ISO-3166 country code for which this report was generated. | [optional] [default to undefined]
**countryMandate** | **string** | The e-invoicing mandate for the specified country. | [optional] [default to undefined]
**documentType** | **string** | The type of document covered by this report. | [optional] [default to undefined]
**documentSubType** | **string** | The sub-type of the document. | [optional] [default to undefined]
**reportReference** | **string** | An internal reference path for the report. | [optional] [default to undefined]
**reportName** | **string** | The name of the report file. | [optional] [default to undefined]
**status** | **string** | The current status of the report. Possible values include: PENDING, PROCESSING, COMPLETED, FAILED, SENT_TO_PPF, ERROR. | [optional] [default to undefined]
**reportFormatMimetypes** | **string** | The MIME type of the report file. | [optional] [default to undefined]
**tenantId** | **string** | The tenant identifier associated with this report. | [optional] [default to undefined]
**taName** | **string** | The name of the tax authority for this report. | [optional] [default to undefined]
**taxInvoiceAmount** | **number** | The total invoice amount covered by this report. | [optional] [default to undefined]
**totalTaxAmount** | **number** | The total tax amount covered by this report. | [optional] [default to undefined]
**metadata** | **object** | Additional report metadata (free-form JSON). Contents vary by country mandate. | [optional] [default to undefined]
**transactionIds** | **Array&lt;string&gt;** | List of transaction IDs associated with this report. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


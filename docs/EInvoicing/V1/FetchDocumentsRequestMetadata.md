# AvalaraSdk.EInvoicing.V1.FetchDocumentsRequestMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflowId** | **string** | Specifies a unique ID for this workflow. | [default to undefined]
**dataFormat** | **string** | Specifies the data format for this workflow | [default to undefined]
**dataFormatVersion** | **number** | Specifies the data format version number | [default to undefined]
**outputDataFormat** | **string** | Specifies the format of the output document to be generated for the recipient. This format should be chosen based on the recipient\&#39;s preferences or requirements as defined by applicable e-invoicing regulations. When not specified for mandates that don\&#39;t require a specific output format, the system will use the default format defined for that mandate. | [default to undefined]
**outputDataFormatVersion** | **number** | Specifies the version of the selected output document format | [default to undefined]
**countryCode** | **string** | The two-letter ISO-3166 country code for the country for which document is being retrieved | [default to undefined]
**countryMandate** | **string** | The e-invoicing mandate for the specified country | [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


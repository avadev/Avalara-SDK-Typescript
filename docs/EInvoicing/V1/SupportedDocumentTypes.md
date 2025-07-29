# AvalaraSdk.EInvoicing.V1.SupportedDocumentTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Document type name. | [optional] [default to undefined]
**value** | **string** | Document type value. | [default to undefined]
**supportedByTradingPartner** | **boolean** | Does trading partner support receiving this document type. | [default to undefined]
**supportedByAvalara** | **boolean** | Does avalara support exchanging this document type. | [optional] [default to undefined]
**extensions** | [**Array&lt;Extension&gt;**](Extension.md) | Optional array used to carry additional metadata or configuration values that may be required by specific document types. When creating or updating a trading partner, the keys provided in the \&#39;extensions\&#39; attribute must be selected from a predefined list of supported extensions. Using any unsupported keys will result in a validation error. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


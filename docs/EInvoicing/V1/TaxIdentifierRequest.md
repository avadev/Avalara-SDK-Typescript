# AvalaraSdk.EInvoicing.V1.TaxIdentifierRequest
Represents a request to validate company’s tax identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countryCode** | **string** | The two-letter ISO-3166 country code of the tax identifier. | [default to undefined]
**identifierType** | **string** | Type of the identifier. | [default to undefined]
**identifier** | **string** | The tax identifier of the company. | [default to undefined]
**extensions** | **object** | Optional field for adding additional details required by specific tax authorities. Refer to the GET /tax-identifiers/schema API endpoint for the full request structure for a given country. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


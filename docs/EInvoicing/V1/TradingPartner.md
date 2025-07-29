# AvalaraSdk.EInvoicing.V1.TradingPartner
Represents a participant in the Avalara directory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Avalara unique ID of the participant in the directory. | [optional] [readonly] [default to undefined]
**name** | **string** | Name of the participant (typically, the name of the business entity). | [default to undefined]
**network** | **string** | The network where the participant is present. When creating or updating a trading partner, the value provided for the attribute \&#39;network\&#39; will be ignored. | [optional] [readonly] [default to undefined]
**registrationDate** | **string** | Registration date of the participant if available. | [optional] [default to undefined]
**identifiers** | [**Array&lt;Identifier&gt;**](Identifier.md) | A list of identifiers associated with the trading partner. Each identifier should consistently include the fields name, and value to maintain clarity and ensure consistent structure across entries. When creating or updating a trading partner, the attribute \&#39;name\&#39; must be agreed upon with Avalara to ensure consistency. Failing to adhere to the agreed values will result in a validation error. Further, when creating or updating a trading partner, the value provided for the attribute \&#39;displayName\&#39; will be ignored and instead retrieved from the standard set of display names maintained. | [default to undefined]
**addresses** | [**Array&lt;Address&gt;**](Address.md) |  | [default to undefined]
**supportedDocumentTypes** | [**Array&lt;SupportedDocumentTypes&gt;**](SupportedDocumentTypes.md) | A list of document types supported by the trading partner for exchange. Each document type identifier value must match the standard list maintained by Avalara, which includes Peppol and other public network document type identifier schemes and values, as well as any approved partner-specific identifiers. The \&#39;value\&#39; field must exactly match an entry from the provided document identifier list. Any attempt to submit unsupported document types will result in a validation error. Further, when creating or updating a trading partner, the value provided for the attributes \&#39;name\&#39; and \&#39;supportedByAvalara\&#39; will be ignored. | [default to undefined]
**consents** | [**Consents**](Consents.md) |  | [optional] [default to undefined]
**extensions** | [**Array&lt;Extension&gt;**](Extension.md) | Optional array used to carry additional metadata or configuration values that may be required by specific networks. When creating or updating a trading partner, the keys provided in the \&#39;extensions\&#39; attribute must be selected from a predefined list of supported extensions. Using any unsupported keys will result in a validation error. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


# AvalaraSdk.A1099.V2.IssuerResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier set when the record is created | [optional] [readonly] [default to undefined]
**name** | **string** | Legal name, not DBA | [optional] [default to undefined]
**nameDba** | **string** | Optional DBA name or continuation of a long legal name | [optional] [default to undefined]
**tin** | **string** | Tax identification number | [optional] [default to undefined]
**referenceId** | **string** | Optional identifier for your reference, never shown to any agency or recipient.  We will also prefix download filenames with this value, if present.  Can only include letters, numbers, dashes, underscores and spaces. | [optional] [default to undefined]
**telephone** | **string** | Telephone number | [optional] [default to undefined]
**taxYear** | **number** | Tax year | [optional] [default to undefined]
**countryCode** | **string** | If there is a transfer agent, use the address of the transfer agent. | [optional] [default to undefined]
**email** | **string** | Email address | [optional] [default to undefined]
**address** | **string** | Address | [optional] [default to undefined]
**city** | **string** | City | [optional] [default to undefined]
**state** | **string** | State | [optional] [default to undefined]
**zip** | **string** | Zip code | [optional] [default to undefined]
**foreignProvince** | **string** | Foreign province | [optional] [default to undefined]
**transferAgentName** | **string** | Transfer Agent\&#39;s Name | [optional] [default to undefined]
**lastFiling** | **boolean** | Last year of filing for this payer | [optional] [default to undefined]
**createdAt** | **Date** | Date time when the issuer was created | [optional] [readonly] [default to undefined]
**updatedAt** | **Date** | Date time when the issuer was updated | [optional] [readonly] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


# AvalaraSdk.A1099.V2.CreateIssuerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Legal name. Not the DBA name. | [default to undefined]
**dbaName** | **string** | Doing Business As (DBA) name or continuation of a long legal name. Use either this or \&#39;transferAgentName\&#39;. | [optional] [default to undefined]
**tin** | **string** | Federal Tax Identification Number (TIN). | [optional] [default to undefined]
**referenceId** | **string** | Internal reference ID. Never shown to any agency or recipient. If present, it will prefix download filenames. Allowed characters: letters, numbers, dashes, underscores, and spaces. | [optional] [default to undefined]
**telephone** | **string** | Contact phone number (must contain at least 10 digits, max 15 characters). For recipient inquiries. | [default to undefined]
**taxYear** | **number** | Tax year for which the forms are being filed (e.g., 2024). Must be within current tax year and current tax year - 4. | [default to undefined]
**countryCode** | **string** | Two-letter IRS country code (e.g., \&#39;US\&#39;, \&#39;CA\&#39;), as defined at https://www.irs.gov/e-file-providers/country-codes. If there is a transfer agent, use the transfer agent\&#39;s shipping address. | [optional] [default to undefined]
**email** | **string** | Contact email address. For recipient inquiries. | [default to undefined]
**address** | **string** | Address. | [default to undefined]
**city** | **string** | City. | [default to undefined]
**state** | **string** | Two-letter US state or Canadian province code (required for US/CA addresses). | [default to undefined]
**zip** | **string** | ZIP/postal code. | [default to undefined]
**foreignProvince** | **string** | Province or region for non-US/CA addresses. | [optional] [default to undefined]
**transferAgentName** | **string** | Name of the transfer agent, if applicable — optional; use either this or \&#39;dbaName\&#39;. | [optional] [default to undefined]
**lastFiling** | **boolean** | Indicates if this is the issuer\&#39;s final year filing. | [default to undefined]
**id** | **string** | Unique identifier set when the record is created. | [optional] [default to undefined]
**createdAt** | **Date** | Date time when the record was created. | [optional] [default to undefined]
**updatedAt** | **Date** | Date time when the record was last updated. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


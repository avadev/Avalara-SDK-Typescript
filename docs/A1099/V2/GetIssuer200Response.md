# AvalaraSdk.A1099.V2.GetIssuer200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier set when the record is created. | [optional] [default to undefined]
**createdAt** | **Date** | Date time when the record was created. | [optional] [default to undefined]
**updatedAt** | **Date** | Date time when the record was last updated. | [optional] [default to undefined]
**businessName** | **string** | Business name. Required when the recipient of the form is a business; should only be used for businesses. | [default to undefined]
**businessName2** | **string** | Business name line 2. Should only be used for businesses. Use either this or \&#39;transferAgentName\&#39;. | [optional] [default to undefined]
**name** | **string** | Legal name. Not the DBA name. Deprecated alias for \&#39;businessName\&#39;. | [optional] [default to undefined]
**dbaName** | **string** | Doing Business As (DBA) name or continuation of a long legal name. Deprecated alias for \&#39;businessName2\&#39;. Use either this or \&#39;transferAgentName\&#39;. | [optional] [default to undefined]
**tinType** | **string** | Recipient classification.  The platform is transitioning from tax identifier classifications to recipient entity classifications. New values represent recipient entity types and should be preferred. Deprecated values represent identifier formats and remain supported for backward compatibility only.  Available values: - INDIVIDUAL: Recipient is an individual - BUSINESS: Recipient is a business - UNKNOWN: Recipient classification is unknown - EIN: (Deprecated - use BUSINESS) Employer Identification Number - SSN: (Deprecated - use INDIVIDUAL) Social Security Number - ITIN: (Deprecated - use INDIVIDUAL) Individual Taxpayer Identification Number - ATIN: (Deprecated - use INDIVIDUAL) Adoption Taxpayer Identification Number | [optional] [default to undefined]
**firstName** | **string** | First name. Required when the recipient of the form is an individual; should only be used for individuals. | [optional] [default to undefined]
**middleName** | **string** | Middle name. Should only be used for individuals. | [optional] [default to undefined]
**lastName** | **string** | Last name. Required when the recipient of the form is an individual; should only be used for individuals. | [optional] [default to undefined]
**suffix** | **string** | Suffix name. Should only be used for individuals. | [optional] [default to undefined]
**tin** | **string** | Federal Tax Identification Number (TIN). | [optional] [default to undefined]
**referenceId** | **string** | Internal reference ID. Never shown to any agency or recipient. If present, it will prefix download filenames. Allowed characters: letters, numbers, dashes, underscores, and spaces. | [optional] [default to undefined]
**telephone** | **string** | Contact phone number (must contain at least 10 digits, max 15 characters). For recipient inquiries. | [default to undefined]
**taxYear** | **number** | Tax year for which the forms are being filed (e.g., 2024). Must be within current tax year and current tax year - 4. It\&#39;s only required on creation, and cannot be modified on update. | [default to undefined]
**countryCode** | **string** | Two-letter IRS country code (e.g., \&#39;US\&#39;, \&#39;CA\&#39;), as defined at https://www.irs.gov/e-file-providers/country-codes. If there is a transfer agent, use the transfer agent\&#39;s shipping address. | [default to undefined]
**email** | **string** | Contact email address. For recipient inquiries. Phone will be used on communications if you don\&#39;t specify an email | [optional] [default to undefined]
**address** | **string** | Address. | [default to undefined]
**city** | **string** | City. | [default to undefined]
**state** | **string** | Two-letter US state or Canadian province code (required for US/CA addresses). | [default to undefined]
**zip** | **string** | ZIP/postal code. | [default to undefined]
**foreignProvince** | **string** | Province or region for non-US/CA addresses. | [optional] [default to undefined]
**transferAgentName** | **string** | Name of the transfer agent, if applicable — optional; use either this or \&#39;dbaName\&#39;. | [optional] [default to undefined]
**lastFiling** | **boolean** | Indicates if this is the issuer\&#39;s final year filing. | [default to undefined]
**validationErrors** | [**Array&lt;ValidationError&gt;**](ValidationError.md) | Field-level validation errors. Populated when a POST or PUT request violated business rules  but the issuer was still persisted. Each entry identifies the affected field and the issue.  Empty array when the payload was fully valid. | [optional] [readonly] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


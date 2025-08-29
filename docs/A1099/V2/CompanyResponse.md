# AvalaraSdk.A1099.V2.CompanyResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier set when the record is created. | [optional] [default to undefined]
**createdAt** | **Date** | Date time when the record was created. | [optional] [default to undefined]
**updatedAt** | **Date** | Date time when the record was last updated. | [optional] [default to undefined]
**name** | **string** | Legal name. Not the DBA name. | [default to undefined]
**dbaName** | **string** | Doing Business As (DBA) name or continuation of a long legal name. | [optional] [default to undefined]
**email** | **string** | Contact email address. For inquiries by vendors/employees. | [default to undefined]
**address** | **string** | Address. | [default to undefined]
**city** | **string** | City. | [default to undefined]
**state** | **string** | Two-letter US state or Canadian province code (required for US/CA addresses). | [optional] [default to undefined]
**zip** | **string** | ZIP/postal code. | [default to undefined]
**telephone** | **string** | Contact phone number (must contain at least 10 digits, max 15 characters). | [default to undefined]
**tin** | **string** | Federal Tax Identification Number (TIN). EIN/Tax ID (required for US companies). | [default to undefined]
**referenceId** | **string** | Internal reference ID. Never shown to any agency or recipient. | [optional] [default to undefined]
**doTinMatch** | **boolean** | Indicates whether the company authorizes IRS TIN matching. | [optional] [default to undefined]
**groupName** | **string** | Group name for organizing companies (creates or finds group by name). | [optional] [default to undefined]
**foreignProvince** | **string** | Province or region for non-US/CA addresses. | [optional] [default to undefined]
**countryCode** | **string** | Two-letter IRS country code (e.g., \&#39;US\&#39;, \&#39;CA\&#39;), as defined at https://www.irs.gov/e-file-providers/country-codes. | [default to undefined]
**resendRequests** | **boolean** | Boolean to enable automatic reminder emails (default: false). | [optional] [default to undefined]
**resendIntervalDays** | **number** | Days between reminder emails (7-365, required if resendRequests is true). | [optional] [default to undefined]
**maxReminderAttempts** | **number** | Maximum number of reminder attempts (1-52, required if resendRequests is true). | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


# AvalaraSdk.A1099.V2.W4FormRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The form type (always \&quot;w4\&quot; for this model). | [optional] [readonly] [default to undefined]
**employeeFirstName** | **string** | The first name of the employee. | [default to undefined]
**employeeMiddleName** | **string** | The middle name of the employee. | [optional] [default to undefined]
**employeeLastName** | **string** | The last name of the employee. | [default to undefined]
**employeeNameSuffix** | **string** | The name suffix of the employee. | [optional] [default to undefined]
**tinType** | **string** | Tax Identification Number (TIN) type. | [default to undefined]
**tin** | **string** | The taxpayer identification number (TIN). | [default to undefined]
**address** | **string** | The address of the employee. Required unless exempt. | [optional] [default to undefined]
**city** | **string** | The city of residence of the employee. Required unless exempt. | [optional] [default to undefined]
**state** | **string** | The state of residence of the employee. Required unless exempt. | [optional] [default to undefined]
**zip** | **string** | The ZIP code of residence of the employee. Required unless exempt. | [optional] [default to undefined]
**maritalStatus** | **string** | The marital status of the employee. Required unless exempt.  Available values:  - Single: Single or Married filing separately  - Married: Married filing jointly or qualifying surviving spouse  - MarriedBut: Head of household. Check only if you\&#39;re unmarried and pay more than half the costs of keeping up a home for yourself and a qualifying individual. | [optional] [default to undefined]
**lastNameDiffers** | **boolean** | Indicates whether the last name differs from prior records. | [optional] [default to undefined]
**numAllowances** | **number** | The number of allowances claimed by the employee. | [optional] [default to undefined]
**otherDependents** | **number** | The number of dependents other than allowances. | [optional] [default to undefined]
**nonJobIncome** | **number** | The amount of non-job income. | [optional] [default to undefined]
**deductions** | **number** | The amount of deductions claimed. | [optional] [default to undefined]
**additionalWithheld** | **number** | The additional amount withheld. | [optional] [default to undefined]
**exemptFromWithholding** | **boolean** | Indicates whether the employee is exempt from withholding. | [optional] [default to undefined]
**officeCode** | **string** | The office code associated with the form. | [optional] [default to undefined]
**eDeliveryConsentedAt** | **Date** | The date when e-delivery was consented. | [optional] [default to undefined]
**signature** | **string** | The signature of the form. | [optional] [default to undefined]
**companyId** | **string** | The ID of the associated company. Required when creating a form. | [optional] [default to undefined]
**referenceId** | **string** | A reference identifier for the form. | [optional] [default to undefined]
**email** | **string** | The email address of the individual associated with the form. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


# AvalaraSdk.A1099.V2.W9FormRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The form type (always \&quot;w9\&quot; for this model). | [optional] [readonly] [default to undefined]
**name** | **string** | The name of the individual or entity associated with the form. | [optional] [default to undefined]
**businessName** | **string** | The name of the business associated with the form. | [optional] [default to undefined]
**businessClassification** | **string** | The classification of the business. | [optional] [default to undefined]
**businessOther** | **string** | The classification description when \&quot;businessClassification\&quot; is \&quot;Other\&quot;. | [optional] [default to undefined]
**foreignPartnerOwnerOrBeneficiary** | **boolean** | Indicates whether the individual is a foreign partner, owner, or beneficiary. | [optional] [default to undefined]
**exemptPayeeCode** | **string** | The exempt payee code. | [optional] [default to undefined]
**exemptFatcaCode** | **string** | The exemption from FATCA reporting code. | [optional] [default to undefined]
**foreignCountryIndicator** | **boolean** | Indicates whether the individual or entity is in a foreign country. | [optional] [default to undefined]
**address** | **string** | The address of the individual or entity. | [optional] [default to undefined]
**foreignAddress** | **string** | The foreign address of the individual or entity. | [optional] [default to undefined]
**city** | **string** | The city of the address. | [optional] [default to undefined]
**state** | **string** | The state of the address. | [optional] [default to undefined]
**zip** | **string** | The ZIP code of the address. | [optional] [default to undefined]
**accountNumber** | **string** | The account number associated with the form. | [optional] [default to undefined]
**tinType** | **string** | The type of TIN provided. | [optional] [default to undefined]
**tin** | **string** | The taxpayer identification number (TIN). | [optional] [default to undefined]
**backupWithholding** | **boolean** | Indicates whether backup withholding applies. | [optional] [default to undefined]
**is1099able** | **boolean** | Indicates whether the individual or entity should be issued a 1099 form. | [optional] [default to undefined]
**companyId** | **string** | The ID of the associated company. | [optional] [default to undefined]
**referenceId** | **string** | A reference identifier for the form. | [optional] [default to undefined]
**email** | **string** | The email address of the individual associated with the form. | [optional] [default to undefined]
**eDeliveryConsentedAt** | **Date** | The date when e-delivery was consented. | [optional] [default to undefined]
**signature** | **string** | The signature of the form. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


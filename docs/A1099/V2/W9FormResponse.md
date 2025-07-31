# AvalaraSdk.A1099.V2.W9FormResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
**tinMatchStatus** | [**TinMatchStatusResponse**](TinMatchStatusResponse.md) | The TIN Match status from IRS. | [optional] [default to undefined]
**id** | **string** | The unique identifier for the form. | [optional] [default to undefined]
**type** | **string** | The form type. | [optional] [default to undefined]
**entryStatus** | **string** | The form status. | [optional] [default to undefined]
**entryStatusDate** | **Date** | The timestamp for the latest status update. | [optional] [default to undefined]
**referenceId** | **string** | A reference identifier for the form. | [optional] [default to undefined]
**companyId** | **string** | The ID of the associated company. | [optional] [default to undefined]
**displayName** | **string** | The display name associated with the form. | [optional] [default to undefined]
**email** | **string** | The email address of the individual associated with the form. | [optional] [default to undefined]
**archived** | **boolean** | Indicates whether the form is archived. | [optional] [default to undefined]
**signature** | **string** | The signature of the form. | [optional] [default to undefined]
**signedDate** | **Date** | The date the form was signed. | [optional] [default to undefined]
**eDeliveryConsentedAt** | **Date** | The date when e-delivery was consented. | [optional] [default to undefined]
**createdAt** | **Date** | The creation date of the form. | [optional] [default to undefined]
**updatedAt** | **Date** | The last updated date of the form. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


# AvalaraSdk.A1099.V2.W8BenFormRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The form type (always \&quot;w8ben\&quot; for this model). | [optional] [readonly] [default to undefined]
**name** | **string** | The name of the individual or entity associated with the form. | [default to undefined]
**citizenshipCountry** | **string** | The country of citizenship.. Allowed values: US, AF, AX, AL, AG, AQ, AN, AO, AV, AY (and 248 more) | [default to undefined]
**residenceAddress** | **string** | The residential address of the individual or entity. | [optional] [default to undefined]
**residenceCity** | **string** | The city of residence. | [optional] [default to undefined]
**residenceState** | **string** | The state of residence. Required for US and Canada.. Allowed values: AA, AE, AK, AL, AP, AR, AS, AZ, CA, CO (and 65 more) | [optional] [default to undefined]
**residenceZip** | **string** | The ZIP code of the residence. | [optional] [default to undefined]
**residenceCountry** | **string** | The country of residence.. Allowed values: US, AF, AX, AL, AG, AQ, AN, AO, AV, AY (and 248 more) | [default to undefined]
**residenceIsMailing** | **boolean** | Indicates whether the residence address is the mailing address. | [optional] [default to undefined]
**mailingAddress** | **string** | The mailing address. | [optional] [default to undefined]
**mailingCity** | **string** | The city of the mailing address. | [optional] [default to undefined]
**mailingState** | **string** | The state of the mailing address. Required for US and Canada.. Allowed values: AA, AE, AK, AL, AP, AR, AS, AZ, CA, CO (and 65 more) | [optional] [default to undefined]
**mailingZip** | **string** | The ZIP code of the mailing address. | [optional] [default to undefined]
**mailingCountry** | **string** | The country of the mailing address.. Allowed values: US, AF, AX, AL, AG, AQ, AN, AO, AV, AY (and 248 more) | [default to undefined]
**tin** | **string** | The taxpayer identification number (TIN). | [optional] [default to undefined]
**foreignTinNotRequired** | **boolean** | Indicates whether a foreign TIN is not legally required. | [optional] [default to undefined]
**foreignTin** | **string** | The foreign taxpayer identification number (TIN). | [optional] [default to undefined]
**referenceNumber** | **string** | A reference number for the form. | [optional] [default to undefined]
**birthday** | **Date** | The birthday of the individual associated with the form. | [optional] [default to undefined]
**treatyCountry** | **string** | The country for which the treaty applies.. Allowed values: US, AF, AX, AL, AG, AQ, AN, AO, AV, AY (and 248 more) | [optional] [default to undefined]
**treatyArticle** | **string** | The specific article of the treaty being claimed. | [optional] [default to undefined]
**treatyReasons** | **string** | The reasons for claiming treaty benefits. | [optional] [default to undefined]
**withholdingRate** | **string** | The withholding rate applied as per the treaty. Must be a percentage with up to two decimals (e.g., 12.50, 0).. Allowed values: 0, 0.0, 0.00, 5, 5.5, 10, 12.50, 15, 20, 25 (and 1 more) | [optional] [default to undefined]
**incomeType** | **string** | The type of income covered by the treaty. | [optional] [default to undefined]
**signerName** | **string** | The name of the signer of the form. | [optional] [default to undefined]
**eDeliveryConsentedAt** | **Date** | The date when e-delivery was consented. | [optional] [default to undefined]
**signature** | **string** | The signature of the form. | [optional] [default to undefined]
**companyId** | **string** | The ID of the associated company. Required when creating a form. | [optional] [default to undefined]
**referenceId** | **string** | A reference identifier for the form. | [optional] [default to undefined]
**email** | **string** | The email address of the individual associated with the form. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


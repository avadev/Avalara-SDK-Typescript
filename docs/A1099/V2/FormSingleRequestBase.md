# AvalaraSdk.A1099.V2.FormSingleRequestBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**issuerId** | **string** | Issuer ID | [optional] [default to undefined]
**referenceId** | **string** | Reference ID | [optional] [default to undefined]
**recipientTin** | **string** | Recipient Tax ID Number | [optional] [default to undefined]
**recipientName** | **string** | Recipient name | [optional] [default to undefined]
**tinType** | **string** | Type of TIN (Tax ID Number). Will be one of:  * SSN  * EIN  * ITIN  * ATIN | [optional] [default to undefined]
**recipientSecondName** | **string** | Recipient second name | [optional] [default to undefined]
**address** | **string** | Address | [default to undefined]
**address2** | **string** | Address line 2 | [optional] [default to undefined]
**city** | **string** | City | [default to undefined]
**state** | **string** | US state. Required if CountryCode is \&quot;US\&quot;. | [optional] [default to undefined]
**zip** | **string** | Zip/postal code | [optional] [default to undefined]
**email** | **string** | Recipient email address | [optional] [default to undefined]
**accountNumber** | **string** | Account number | [optional] [default to undefined]
**officeCode** | **string** | Office code | [optional] [default to undefined]
**nonUsProvince** | **string** | Foreign province | [optional] [default to undefined]
**countryCode** | **string** | Country code, as defined at https://www.irs.gov/e-file-providers/country-codes | [default to undefined]
**federalEFile** | **boolean** | Boolean indicating that federal e-filing should be scheduled for this form | [optional] [default to undefined]
**postalMail** | **boolean** | Boolean indicating that postal mailing to the recipient should be scheduled for this form | [optional] [default to undefined]
**stateEFile** | **boolean** | Boolean indicating that state e-filing should be scheduled for this form | [optional] [default to undefined]
**tinMatch** | **boolean** | Boolean indicating that TIN Matching should be scheduled for this form | [optional] [default to undefined]
**noTin** | **boolean** | Indicates whether the recipient has no TIN | [optional] [default to undefined]
**secondTinNotice** | **boolean** | Second TIN notice in three years | [optional] [default to undefined]
**addressVerification** | **boolean** | Boolean indicating that address verification should be scheduled for this form | [optional] [default to undefined]
**stateAndLocalWithholding** | [**StateAndLocalWithholdingRequest**](StateAndLocalWithholdingRequest.md) | State and local withholding information | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


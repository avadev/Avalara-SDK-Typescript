# AvalaraSdk.A1099.V2.Form1099BaseResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the form | [readonly] [default to undefined]
**type** | **string** | Type of the form. Will be one of:  * 940  * 941  * 943  * 944  * 945  * 1042  * 1042-S  * 1095-B  * 1095-C  * 1097-BTC  * 1098  * 1098-C  * 1098-E  * 1098-Q  * 1098-T  * 3921  * 3922  * 5498  * 5498-ESA  * 5498-SA  * 1099-MISC  * 1099-A  * 1099-B  * 1099-C  * 1099-CAP  * 1099-DIV  * 1099-G  * 1099-INT  * 1099-K  * 1099-LS  * 1099-LTC  * 1099-NEC  * 1099-OID  * 1099-PATR  * 1099-Q  * 1099-R  * 1099-S  * 1099-SA  * T4A  * W-2  * W-2G  * 1099-HC | [default to undefined]
**issuerId** | **number** | Issuer ID | [default to undefined]
**issuerReferenceId** | **string** | Issuer Reference ID | [optional] [default to undefined]
**issuerTin** | **string** | Issuer TIN | [optional] [default to undefined]
**taxYear** | **number** | Tax year | [optional] [default to undefined]
**federalEfile** | **boolean** | Boolean indicating that federal e-filing has been scheduled for this form | [default to undefined]
**federalEfileStatus** | [**Form1099StatusDetailResponse**](Form1099StatusDetailResponse.md) | Federal e-file status | [optional] [readonly] [default to undefined]
**stateEfile** | **boolean** | Boolean indicating that state e-filing has been scheduled for this form | [default to undefined]
**stateEfileStatus** | [**Array&lt;StateEfileStatusDetailResponse&gt;**](StateEfileStatusDetailResponse.md) | State e-file status | [optional] [readonly] [default to undefined]
**postalMail** | **boolean** | Boolean indicating that postal mailing to the recipient has been scheduled for this form | [default to undefined]
**postalMailStatus** | [**Form1099StatusDetailResponse**](Form1099StatusDetailResponse.md) | Postal mail to recipient status | [optional] [readonly] [default to undefined]
**tinMatch** | **boolean** | Boolean indicating that TIN Matching has been scheduled for this form | [default to undefined]
**tinMatchStatus** | [**Form1099StatusDetailResponse**](Form1099StatusDetailResponse.md) | TIN Match status | [optional] [readonly] [default to undefined]
**addressVerification** | **boolean** | Boolean indicating that address verification has been scheduled for this form | [default to undefined]
**addressVerificationStatus** | [**Form1099StatusDetailResponse**](Form1099StatusDetailResponse.md) | Address verification status | [optional] [readonly] [default to undefined]
**referenceId** | **string** | Reference ID | [optional] [default to undefined]
**email** | **string** | Recipient email address | [optional] [default to undefined]
**tinType** | **string** | Type of TIN (Tax ID Number). Will be one of:  * SSN  * EIN  * ITIN  * ATIN | [optional] [default to undefined]
**tin** | **string** | Recipient Tax ID Number | [optional] [default to undefined]
**recipientName** | **string** | Recipient name | [optional] [default to undefined]
**recipientSecondName** | **string** | Recipient second name | [optional] [default to undefined]
**address** | **string** | Address | [optional] [default to undefined]
**address2** | **string** | Address line 2 | [optional] [default to undefined]
**city** | **string** | City | [optional] [default to undefined]
**state** | **string** | US state | [optional] [default to undefined]
**zip** | **string** | Zip/postal code | [optional] [default to undefined]
**foreignProvince** | **string** | Foreign province | [optional] [default to undefined]
**countryCode** | **string** | Country code, as defined at https://www.irs.gov/e-file-providers/country-codes | [optional] [default to undefined]
**validationErrors** | [**Array&lt;ValidationErrorResponse&gt;**](ValidationErrorResponse.md) | Validation errors | [optional] [readonly] [default to undefined]
**createdAt** | **Date** | Creation time | [optional] [readonly] [default to undefined]
**updatedAt** | **Date** | Update time | [optional] [readonly] [default to undefined]
**stateAndLocalWithholding** | [**StateAndLocalWithholdingResponse**](StateAndLocalWithholdingResponse.md) |  | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


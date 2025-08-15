# AvalaraSdk.A1099.V2.Form1095CListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employeeFirstName** | **string** | Employee\&#39;s first name | [optional] [default to undefined]
**employeeMiddleName** | **string** | Employee\&#39;s middle name | [optional] [default to undefined]
**employeeLastName** | **string** | Employee\&#39;s last name | [optional] [default to undefined]
**employeeNameSuffix** | **string** | Employee\&#39;s name suffix | [optional] [default to undefined]
**recipientDateOfBirth** | **Date** | Recipient\&#39;s date of birth | [optional] [default to undefined]
**planStartMonth** | **string** | Plan start month | [optional] [default to undefined]
**offerAndCoverages** | [**Array&lt;OfferAndCoverageRequest&gt;**](OfferAndCoverageRequest.md) | Offer and coverage information | [optional] [default to undefined]
**employerProvidedSiCoverage** | **boolean** | Employer provided self-insured coverage | [optional] [default to undefined]
**coveredIndividuals** | [**Array&lt;CoveredIndividualRequest&gt;**](CoveredIndividualRequest.md) | Covered individuals information | [optional] [default to undefined]
**issuerReferenceId** | **string** | Issuer Reference ID. One of &#x60;issuerReferenceId&#x60; or &#x60;issuerTin&#x60; is required. | [optional] [default to undefined]
**issuerTin** | **string** | Issuer TIN. One of &#x60;issuerReferenceId&#x60; or &#x60;issuerTin&#x60; is required. | [optional] [default to undefined]
**taxYear** | **number** | Tax year | [default to undefined]
**issuerId** | **string** | Issuer ID | [optional] [default to undefined]
**referenceId** | **string** | Reference ID | [optional] [default to undefined]
**recipientTin** | **string** | Recipient Tax ID Number | [optional] [default to undefined]
**recipientName** | **string** | Recipient name | [optional] [default to undefined]
**tinType** | **string** | Type of TIN (Tax ID Number). Will be one of:  * SSN  * EIN  * ITIN  * ATIN | [optional] [default to undefined]
**recipientSecondName** | **string** | Recipient second name | [optional] [default to undefined]
**address** | **string** | Address | [optional] [default to undefined]
**address2** | **string** | Address line 2 | [optional] [default to undefined]
**city** | **string** | City | [optional] [default to undefined]
**state** | **string** | US state. Required if CountryCode is \&quot;US\&quot;. | [optional] [default to undefined]
**zip** | **string** | Zip/postal code | [optional] [default to undefined]
**email** | **string** | Recipient email address | [optional] [default to undefined]
**accountNumber** | **string** | Account number | [optional] [default to undefined]
**officeCode** | **string** | Office code | [optional] [default to undefined]
**nonUsProvince** | **string** | Foreign province | [optional] [default to undefined]
**countryCode** | **string** | Country code, as defined at https://www.irs.gov/e-file-providers/country-codes | [optional] [default to undefined]
**federalEFile** | **boolean** | Boolean indicating that federal e-filing should be scheduled for this form | [optional] [default to undefined]
**postalMail** | **boolean** | Boolean indicating that postal mailing to the recipient should be scheduled for this form | [optional] [default to undefined]
**stateEFile** | **boolean** | Boolean indicating that state e-filing should be scheduled for this form | [optional] [default to undefined]
**tinMatch** | **boolean** | Boolean indicating that TIN Matching should be scheduled for this form | [optional] [default to undefined]
**noTin** | **boolean** | Indicates whether the recipient has no TIN | [optional] [default to undefined]
**secondTinNotice** | **boolean** | Second TIN notice in three years | [optional] [default to undefined]
**fatcaFilingRequirement** | **boolean** | Fatca filing requirement | [optional] [default to undefined]
**addressVerification** | **boolean** | Boolean indicating that address verification should be scheduled for this form | [optional] [default to undefined]
**stateAndLocalWithholding** | [**StateAndLocalWithholdingRequest**](StateAndLocalWithholdingRequest.md) | State and local withholding information | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


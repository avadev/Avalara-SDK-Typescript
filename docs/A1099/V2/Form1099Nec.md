# AvalaraSdk.A1099.V2.Form1099Nec
Form 1099-NEC: Nonemployee Compensation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nonemployeeCompensation** | **number** | Nonemployee compensation. Required if DirectSalesIndicator is false. | [default to undefined]
**directSalesIndicator** | **boolean** | Payer made direct sales totaling $5,000 or more of consumer products to recipient for resale. Should be true if Nonemployee compensation is not provided. | [optional] [default to undefined]
**federalIncomeTaxWithheld** | **number** | Federal income tax withheld. | [optional] [default to undefined]
**type** | **string** | Form type. | [default to undefined]
**id** | **string** | Form ID. Unique identifier set when the record is created. | [optional] [readonly] [default to undefined]
**issuerId** | **string** | Issuer ID - only required when creating forms | [optional] [default to undefined]
**issuerReferenceId** | **string** | Issuer Reference ID - only required when creating forms via $bulk-upsert | [optional] [default to undefined]
**issuerTin** | **string** | Issuer TIN - readonly | [optional] [default to undefined]
**taxYear** | **number** | Tax Year - only required when creating forms via $bulk-upsert | [optional] [default to undefined]
**referenceId** | **string** | Internal reference ID. Never shown to any agency or recipient. | [optional] [default to undefined]
**tin** | **string** | Recipient\&#39;s Federal Tax Identification Number (TIN). | [optional] [default to undefined]
**recipientName** | **string** | Recipient name | [default to undefined]
**tinType** | **string** | Tax Identification Number (TIN) type.  Available values: - EIN: Employer Identification Number - SSN: Social Security Number - ITIN: Individual Taxpayer Identification Number - ATIN: Adoption Taxpayer Identification Number | [optional] [default to undefined]
**recipientSecondName** | **string** | Recipient second name | [optional] [default to undefined]
**address** | **string** | Address. | [default to undefined]
**address2** | **string** | Address line 2. | [optional] [default to undefined]
**city** | **string** | City. | [default to undefined]
**state** | **string** | Two-letter US state or Canadian province code (required for US/CA addresses). | [optional] [default to undefined]
**zip** | **string** | ZIP/postal code. | [optional] [default to undefined]
**email** | **string** | Recipient\&#39;s Contact email address. | [optional] [default to undefined]
**accountNumber** | **string** | Account number | [optional] [default to undefined]
**officeCode** | **string** | Office code | [optional] [default to undefined]
**nonUsProvince** | **string** | Province or region for non-US/CA addresses. | [optional] [default to undefined]
**countryCode** | **string** | Two-letter IRS country code (e.g., \&#39;US\&#39;, \&#39;CA\&#39;), as defined at https://www.irs.gov/e-file-providers/country-codes. | [default to undefined]
**federalEfileDate** | **Date** | Date when federal e-filing should be scheduled. If set between current date and beginning of blackout period, scheduled to that date. If in the past or blackout period, scheduled to next available date. For blackout period information, see https://www.track1099.com/info/IRS_info. Set to null to leave unscheduled. | [optional] [default to undefined]
**postalMail** | **boolean** | Boolean indicating that postal mailing to the recipient should be scheduled for this form | [optional] [default to undefined]
**stateEfileDate** | **Date** | Date when state e-filing should be scheduled. Must be on or after federalEfileDate. If set between current date and beginning of blackout period, scheduled to that date. If in the past or blackout period, scheduled to next available date. For blackout period information, see https://www.track1099.com/info/IRS_info. Set to null to leave unscheduled. | [optional] [default to undefined]
**recipientEdeliveryDate** | **Date** | Date when recipient e-delivery should be scheduled. If set between current date and beginning of blackout period, scheduled to that date. If in the past or blackout period, scheduled to next available date. For blackout period information, see https://www.track1099.com/info/IRS_info. Set to null to leave unscheduled. | [optional] [default to undefined]
**tinMatch** | **boolean** | Boolean indicating that TIN Matching should be scheduled for this form | [optional] [default to undefined]
**noTin** | **boolean** | No TIN indicator | [optional] [default to undefined]
**addressVerification** | **boolean** | Boolean indicating that address verification should be scheduled for this form | [optional] [default to undefined]
**stateAndLocalWithholding** | [**StateAndLocalWithholding**](StateAndLocalWithholding.md) | State and local withholding information | [optional] [default to undefined]
**secondTinNotice** | **boolean** | Second TIN notice | [optional] [default to undefined]
**federalEfileStatus** | [**Form1099StatusDetail**](Form1099StatusDetail.md) | Federal e-file status.  Available values:  - unscheduled: Form has not been scheduled for federal e-filing  - scheduled: Form is scheduled for federal e-filing  - airlock: Form is in process of being uploaded to the IRS (forms exist in this state for a very short period and cannot be updated while in this state)  - sent: Form has been sent to the IRS  - accepted: Form was accepted by the IRS  - corrected_scheduled: Correction is scheduled to be sent  - corrected_airlock: Correction is in process of being uploaded to the IRS (forms exist in this state for a very short period and cannot be updated while in this state)  - corrected: A correction has been sent to the IRS  - corrected_accepted: Correction was accepted by the IRS  - rejected: Form was rejected by the IRS  - corrected_rejected: Correction was rejected by the IRS  - held: Form is held and will not be submitted to IRS (used for certain forms submitted only to states) | [optional] [readonly] [default to undefined]
**stateEfileStatus** | [**Array&lt;StateEfileStatusDetail&gt;**](StateEfileStatusDetail.md) | State e-file status.  Available values:  - unscheduled: Form has not been scheduled for state e-filing  - scheduled: Form is scheduled for state e-filing  - airlocked: Form is in process of being uploaded to the state  - sent: Form has been sent to the state  - rejected: Form was rejected by the state  - accepted: Form was accepted by the state  - corrected_scheduled: Correction is scheduled to be sent  - corrected_airlocked: Correction is in process of being uploaded to the state  - corrected_sent: Correction has been sent to the state  - corrected_rejected: Correction was rejected by the state  - corrected_accepted: Correction was accepted by the state | [optional] [readonly] [default to undefined]
**postalMailStatus** | [**Form1099StatusDetail**](Form1099StatusDetail.md) | Postal mail to recipient status.  Available values:  - unscheduled: Postal mail has not been scheduled  - pending: Postal mail is pending to be sent  - sent: Postal mail has been sent  - delivered: Postal mail has been delivered | [optional] [readonly] [default to undefined]
**tinMatchStatus** | [**Form1099StatusDetail**](Form1099StatusDetail.md) | TIN Match status.  Available values:  - none: TIN matching has not been performed  - pending: TIN matching request is pending  - matched: Name/TIN combination matches IRS records  - unknown: TIN is missing, invalid, or request contains errors  - rejected: Name/TIN combination does not match IRS records or TIN not currently issued | [optional] [readonly] [default to undefined]
**addressVerificationStatus** | [**Form1099StatusDetail**](Form1099StatusDetail.md) | Address verification status.  Available values:  - unknown: Address verification has not been checked  - pending: Address verification is in progress  - failed: Address verification failed  - incomplete: Address verification is incomplete  - unchanged: User declined address changes  - verified: Address has been verified and accepted | [optional] [readonly] [default to undefined]
**eDeliveryStatus** | [**Form1099StatusDetail**](Form1099StatusDetail.md) | EDelivery status.  Available values:  - unscheduled: E-delivery has not been scheduled  - scheduled: E-delivery is scheduled to be sent  - sent: E-delivery has been sent to recipient  - bounced: E-delivery bounced back (invalid email)  - refused: E-delivery was refused by recipient  - bad_verify: E-delivery failed verification  - accepted: E-delivery was accepted by recipient  - bad_verify_limit: E-delivery failed verification limit reached  - second_delivery: Second e-delivery attempt  - undelivered: E-delivery is undelivered (temporary state allowing resend) | [optional] [readonly] [default to undefined]
**validationErrors** | [**Array&lt;ValidationError&gt;**](ValidationError.md) | Validation errors | [optional] [readonly] [default to undefined]
**createdAt** | **Date** | Date time when the record was created. | [optional] [readonly] [default to undefined]
**updatedAt** | **Date** | Date time when the record was last updated. | [optional] [readonly] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


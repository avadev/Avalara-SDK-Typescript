# AvalaraSdk.A1099.V2.W9FormRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The form type (always \&quot;w9\&quot; for this model). | [optional] [readonly] [default to undefined]
**name** | **string** | The name of the individual or entity associated with the form. | [default to undefined]
**businessName** | **string** | The name of the business associated with the form. | [optional] [default to undefined]
**businessClassification** | **string** | The classification of the business.  Available values:  - Individual: Individual/sole proprietor  - C Corporation: C Corporation  - S Corporation: S Corporation  - Partnership: Partnership  - Trust/estate: Trust/estate  - LLC-C: Limited liability company (C Corporation)  - LLC-S: Limited liability company (S Corporation)  - LLC-P: Limited liability company (Partnership)  - Other: Other (requires BusinessOther field to be populated) | [default to undefined]
**businessOther** | **string** | The classification description when \&quot;businessClassification\&quot; is \&quot;Other\&quot;. | [optional] [default to undefined]
**foreignPartnerOwnerOrBeneficiary** | **boolean** | Indicates whether the individual is a foreign partner, owner, or beneficiary. | [optional] [default to undefined]
**exemptPayeeCode** | **string** | The exempt payee code. Allowed values (1–13):  - 1 — Organization exempt under §501(a) or IRA; custodial account under §403(b)(7)  - 2 — U.S. government or its agencies/instrumentalities  - 3 — U.S. state, DC, U.S. territory/possession, or their political subdivisions/agencies/instrumentalities  - 4 — Foreign government or its political subdivisions/agencies/instrumentalities  - 5 — Corporation  - 6 — Dealer in securities or commodities required to register in the U.S., DC, or U.S. territory/possession  - 7 — Futures commission merchant registered with the CFTC  - 8 — Real estate investment trust (REIT)  - 9 — Entity registered at all times during the tax year under the Investment Company Act of 1940  - 10 — Common trust fund operated by a bank under §584(a)  - 11 — Financial institution (see §581)  - 12 — Broker (nominee/custodian)  - 13 — Trust exempt under §664 or described in §4947 | [optional] [default to undefined]
**exemptFatcaCode** | **string** | The exemption from FATCA reporting code. Allowed values (A–M):  - A — Tax‑exempt organization under §501(a) or IRA (§7701(a)(37))  - B — U.S. government or any of its agencies/instrumentalities  - C — U.S. state, DC, territory/possession, or their political subdivisions/instrumentalities  - D — Corporation whose stock is regularly traded on an established securities market  - E — Corporation that is a member of the same expanded affiliated group as a D corporation  - F — Registered dealer in securities/commodities/derivatives  - G — REIT (Real Estate Investment Trust)  - H — Regulated investment company (§851) or entity registered all year under the Investment Company Act of 1940  - I — Common trust fund (§584(a))  - J — Bank (§581)  - K — Broker  - L — Charitable remainder trust (§664) or trust described in §4947(a)(1)  - M — Trust under §403(b) plan or §457(g) plan | [optional] [default to undefined]
**foreignCountryIndicator** | **boolean** | Indicates whether the individual or entity is in a foreign country. | [optional] [default to undefined]
**address** | **string** | The address of the individual or entity. | [default to undefined]
**foreignAddress** | **string** | The foreign address of the individual or entity. | [optional] [default to undefined]
**city** | **string** | The city of the address. | [default to undefined]
**state** | **string** | The state of the address. | [default to undefined]
**zip** | **string** | The ZIP code of the address. | [default to undefined]
**accountNumber** | **string** | The account number associated with the form. | [optional] [default to undefined]
**tinType** | **string** | Tax Identification Number (TIN) type. SSN/ITIN (for individuals) and EIN (for businesses). | [default to undefined]
**tin** | **string** | The taxpayer identification number (TIN). | [default to undefined]
**backupWithholding** | **boolean** | Indicates whether backup withholding applies. | [optional] [default to undefined]
**is1099able** | **boolean** | Indicates whether the individual or entity should be issued a 1099 form. | [optional] [default to undefined]
**eDeliveryConsentedAt** | **Date** | The date when e-delivery was consented. | [optional] [default to undefined]
**signature** | **string** | The signature of the form. | [optional] [default to undefined]
**companyId** | **string** | The ID of the associated company. Required when creating a form. | [optional] [default to undefined]
**referenceId** | **string** | A reference identifier for the form. | [optional] [default to undefined]
**email** | **string** | The email address of the individual associated with the form. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


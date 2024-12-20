# AvalaraSdk.EInvoicing.V1.Mandate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mandateId** | **string** | The &#x60;mandateId&#x60; is comprised of the country code, mandate type, and the network or regulation type (for example, AU-B2G-PEPPOL). Keep in mind the following when specifying a &#x60;mandateId&#x60;. - A country can have multiple mandate types (B2C, B2B, B2G). - A entity/company can opt in for multiple mandates. - A &#x60;mandateId&#x60; is the combination of country + mandate type + network/regulation. | [optional] [default to undefined]
**countryMandate** | **string** | **[LEGACY]** This field is retained for backward compatibility. It is recommended to use &#x60;mandateId&#x60; instead. The &#x60;countryMandate&#x60; similar to the &#x60;mandateId&#x60; is comprised of the country code, mandate type, and the network or regulation type (for example, AU-B2G-PEPPOL).  | [optional] [default to undefined]
**countryCode** | **string** | Country code | [optional] [default to undefined]
**description** | **string** | Mandate description | [optional] [default to undefined]
**supportedByPartnerAPI** | **boolean** | Indicates whether this mandate supported by the partner API | [optional] [default to undefined]
**mandateFormat** | **string** | Mandate format | [optional] [default to undefined]
**inputDataFormats** | [**Array&lt;InputDataFormats&gt;**](InputDataFormats.md) | Format and version used when inputting the data | [optional] [default to undefined]
**workflowIds** | [**Array&lt;WorkflowIds&gt;**](WorkflowIds.md) | Workflow ID list | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


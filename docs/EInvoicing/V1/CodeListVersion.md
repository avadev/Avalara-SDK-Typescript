# AvalaraSdk.EInvoicing.V1.CodeListVersion
Represents a versioned definition of a code list for a specific jurisdiction and date range

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**versionReasons** | **Array&lt;string&gt;** | List of free-text reasons explaining why this version of the code list exists (for example, initial introduction, regulatory update, addition/deprecation of codes). Useful for audit and change tracking. | [optional] [default to undefined]
**jurisEffectiveDate** | **Date** | Date from which this version of the code list becomes legally or operationally effective in the jurisdiction. Typically corresponds to a go-live, mandate, or release date. | [optional] [default to undefined]
**jurisSunsetDate** | **Date** | Date after which this version of the code list must no longer be used in the jurisdiction. Use a far-future date (e.g., 9999-12-31) when the sunset is not yet known. | [optional] [default to undefined]
**locale** | **string** | Language–region locale identifier indicating the language and regional variant for descriptions in this version of the code list. Follows BCP-47 format such as en-US, fr-FR, de-DE. | [optional] [default to undefined]
**values** | [**Array&lt;CodeListValue&gt;**](CodeListValue.md) | Array of code entries defined in this version of the code list. Each entry contains the machine-readable code value and its human-readable description in the given locale. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


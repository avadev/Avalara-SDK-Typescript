# AvalaraSdk.EInvoicing.V1.DocumentSummary
Displays a summary of information about the document

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique ID for this document | [optional] [default to undefined]
**processDateTime** | **string** | The date and time when the document was processed, displayed in the format YYYY-MM-DDThh:mm:ss | [optional] [default to undefined]
**status** | **string** | The transaction status: &lt;br&gt; \&#39;Pending\&#39; &lt;br&gt; \&#39;Failed\&#39; &lt;br&gt; \&#39;Complete\&#39; | [optional] [default to undefined]
**supplierName** | **string** | The name of the supplier in the transaction | [optional] [default to undefined]
**customerName** | **string** | The name of the customer in the transaction | [optional] [default to undefined]
**documentNumber** | **string** | The invoice document number | [optional] [default to undefined]
**documentDate** | **string** | The invoice issue date | [optional] [default to undefined]
**flow** | **string** | The invoice direction, where issued &#x3D; &#x60;out&#x60; and received &#x3D; &#x60;in&#x60; | [optional] [default to undefined]
**countryCode** | **string** | The two-letter ISO-3166 country code for the country where the e-invoice is being submitted | [optional] [default to undefined]
**countryMandate** | **string** | The e-invoicing mandate for the specified country | [optional] [default to undefined]
**_interface** | **string** | The interface where the invoice data is sent | [optional] [default to undefined]
**receiver** | **string** | The invoice recipient based on the interface | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


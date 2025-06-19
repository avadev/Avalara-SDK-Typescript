# AvalaraSdk.EInvoicing.V1.EventMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **object** | Event-specific information | [default to undefined]
**signature** | [**SignatureValueSignature**](SignatureValueSignature.md) |  | [default to undefined]
**tenantId** | **string** | Tenant ID of the event | [default to undefined]
**correlationId** | **string** | The correlation ID used by Avalara to aid in tracing through to provenance of this event massage. | [optional] [default to undefined]
**systemCode** | **string** | The Avalara registered code for the system. See &lt;a href&#x3D;\&quot;https://avalara.atlassian.net/wiki/spaces/AIM/pages/637250338966/Taxonomy+Avalara+Systems\&quot;&gt;Taxonomy&amp;#58; Avalara Systems&lt;/a&gt; | [default to undefined]
**eventName** | **string** | Type of the event | [default to undefined]
**eventVersion** | **string** | Version of the included payload. | [optional] [default to undefined]
**receiptTimestamp** | **Date** | Timestamp when the event was received by the dispatch service. | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


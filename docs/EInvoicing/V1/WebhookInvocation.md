# AvalaraSdk.EInvoicing.V1.WebhookInvocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of this specific resource. | [default to undefined]
**retryCount** | **number** | The number of invocation attempts. | [optional] [default to undefined]
**retryMax** | **number** | The maximum retries that may be attempted in total. | [optional] [default to undefined]
**invocationTimestamp** | **Date** | Initial timestamp of the first invocation attempt. | [default to undefined]
**retryTimestamp** | **Date** | Timestamp of this invocation attempt. | [optional] [default to undefined]
**items** | [**Array&lt;EventMessage&gt;**](EventMessage.md) | Array of events being delivered in the webhook | [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


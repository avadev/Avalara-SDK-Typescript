# AvalaraSdk.EInvoicing.V1.ReportListResponse
Returns the requested list of reports matching the query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordsetCount** | **string** | Count of reports matching the filter for the given query. Present when the request includes $count&#x3D;true. | [optional] [default to undefined]
**nextLink** | **string** | URL to retrieve the next page of results when more items match the query. Omitted or null when there is no next page. | [optional] [default to undefined]
**value** | [**Array&lt;ReportItem&gt;**](ReportItem.md) | Array of reports matching the query parameters. | [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


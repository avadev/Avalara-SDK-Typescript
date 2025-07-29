# AvalaraSdk.A1099.V2.JobResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**dryRun** | **boolean** | Dry run. If &#x60;true&#x60;, this job only simulates the changes but doesn\&#39;t actually persist them. | [optional] [default to undefined]
**upsert** | **boolean** | Upsert. If &#x60;true&#x60;, this job will first attempt to update existing records if matches can be found. Matches are done in the following order:  * Form ID  * Form Reference ID and tax year  * Form TIN and tax year | [optional] [default to undefined]
**status** | **string** | Status of the job | [optional] [default to undefined]
**errorMessage** | **string** |  | [optional] [default to undefined]
**totalProcessed** | **number** | Total number of forms processed | [optional] [default to undefined]
**totalRows** | **number** | Total number of forms in the request | [optional] [default to undefined]
**updatedValid** | **number** | Number of forms updated and valid for e-filing and e-delivery | [optional] [default to undefined]
**updatedNoEmail** | **number** | Number of forms updated and valid for e-filing but missing email or email is undeliverable | [optional] [default to undefined]
**updatedInvalid** | **number** | Number of forms updated but invalid for e-filing | [optional] [default to undefined]
**skippedDuplicate** | **number** | Number of forms skipped because they would have updated a record already updated once in the request | [optional] [default to undefined]
**skippedInvalid** | **number** | Number of forms skipped because they would have made a form invalid and the form is already e-filed or scheduled for e-filing | [optional] [default to undefined]
**skippedMultipleMatches** | **number** | Number of forms skipped because they matched multiple forms | [optional] [default to undefined]
**notFound** | **number** | Number of forms skipped because no matching form or issuer could be found | [optional] [default to undefined]
**createdInvalid** | **number** | Number of new forms created because no matching form could be found (and &#x60;upsert&#x60; was true) - with errors | [optional] [default to undefined]
**createdNoEmail** | **number** | Number of new forms created because no matching form could be found (and &#x60;upsert&#x60; was true) - valid for e-filing but missing email or email is undeliverable | [optional] [default to undefined]
**createdValid** | **number** | Number of new forms created because no matching form could be found (and &#x60;upsert&#x60; was true) - valid for e-filing and e-delivery | [optional] [default to undefined]

[[Back to Model list]](../../../README.md#documentation-for-models) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../README.md)


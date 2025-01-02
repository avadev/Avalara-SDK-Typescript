import "dotenv/config";
import { Runtime } from "../../src/index";
import { AvaTaxEnvironment, Configuration } from "../../src/runtime";
import { DocumentsApi, MandatesApi } from "../../src/apis/EInvoicing/V1";
import { ApiClient } from "../../src/runtime";

const configParams: Runtime.ConfigurationParameters = {
  appName: "asv-sdk-test-app",
  appVersion: "1.0",
  environment: AvaTaxEnvironment.Sandbox,
  machineName: "test-machine",
  timeout: 3000,
  bearerToken:
    "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwNTU3RDBCMTEyRDcwNzUzREVFNTE4ODQ0ODE4QzhCMTZEMEMwNkNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IklGVjlDeEV0Y0hVOTdsR0lSSUdNaXhiUXdHdyJ9.eyJuYmYiOjE3MzU4NDEwNjUsImV4cCI6MTczNTg0NDY2NSwiaXNzIjoiaHR0cHM6Ly9haS1zYnguYXZsci5zaCIsImNsaWVudF9pZCI6IjhjYzk1ZjY5ZTcxZTRjNDE5NzA1NTFlNmZjMDVkMjhmIiwib3JnIjoiNjRjOGZmNzAxNjM0YWNjZGZiM2I1MDgyIiwidGlkIjoiNjRjOGZmNzAzNTU2MTViNTU0YTEyOTgxIiwiYXBwSWQiOiI2NGM4ZmY3NTE2MzRhY2NkZmIzYjUwODUiLCJ0LWdydCI6IntcInVybjphdmFsYXJhOnN5c3RlbXM6ZGVzXCI6W3tcInBcIjpbXCJkb2N1bWVudF9zdWJtaXRcIixcImRvY3VtZW50X3JlYWRcIixcImRvY3VtZW50X3NlYXJjaFwiLFwiZG9jdW1lbnRfc3RhdHVzXCIsXCJkZWZpbml0aW9uc192aWV3XCIsXCJkaXJlY3Rvcnlfc2VhcmNoXCJdLFwiY1wiOlwiXCJ9XSxcInVybjphdmFsYXJhOnN5c3RlbXM6b3JsXCI6W3tcInBcIjpbXCJSZWdpc3RyYXRpb25fcmVhZFwiXSxcImNcIjpcInJlZ2lzdHJhdGlvblR5cGUgRVEgJ0UtSW52b2ljZSdcIn1dLFwidXJuOmF2YWxhcmE6c3lzdGVtczpjb21wYW55XCI6W3tcInBcIjpbXCJDb21wYW55X2NyZWF0ZVwiLFwiQ29tcGFueV91cGRhdGVcIixcIkNvbXBhbnlfZmV0Y2hcIl0sXCJjXCI6XCJUZW5hbnRJZCBFUSB0b2tlbi90ZW5hbnRJZFwifV19IiwiYy1ncnQiOiJ7fSIsInJvbGVzIjoie1widXJuOmF2YWxhcmE6c3lzdGVtczpkZXNcIjpbXCJERVMtQVBJLUNvbnN1bWVyXCJdLFwidXJuOmF2YWxhcmE6c3lzdGVtczpvcmxcIjpbXCJWaWV3ZXJcIl0sXCJ1cm46YXZhbGFyYTpzeXN0ZW1zOmNvbXBhbnlcIjpbXCJPUFVTUm9sZVwiXX0iLCJqdGkiOiJFMTNERDk0OEI5RDY1MzBDQzcwNTEwNzE5M0U3QjlFNCIsImlhdCI6MTczNTg0MTA2NSwic2NvcGUiOlsiZGVzX2FwaSIsIm9ybF9hcGkiLCJzY3MiXX0.AHYlH1Zk3IecSf9gO3peehzAaMEO9PTK3Wwp3ZD-KJx6DIm0zqjDO-fbbK_aKNcdsCnm6oxgUdhNu135EIcjHk-BKNdeSzEh_oxctnVdFF_bopqfI--prGXadQe7TTsvDUnaYjv3rEdw3Cb9xC8uh79SXSp23bheGvaeFrO4OQFCMnLd8IIebmNZw3levaLZP-QWcKRAb140V0ylzafiQK6xDfsN--KeKIek97GJFnGZ4xUe3nibnrH9RaBZwsFomHIYUgxtuT3po1P3kvoecREBmh_LSn7Mxxe_l8LeLcvad0MbyHhl-J4p6NLI3a3MoT8OccduZ-dLG9IrWGue8w",
};
const scopes = "avatax_api";

describe("EInvoicing API ", () => {
  const config = new Configuration(configParams);

  // it("should be able retrieve a document from the Documents API", async () => {
  //   const runtime = new ApiClient(config);
  //   const api = new DocumentsApi(runtime);
  //   const result = await api.getDocumentList({ avalaraVersion: "1.2" });
  //   expect(result).toBeDefined();
  // });

  it("should be able retrieve a document from the Mandates API", async () => {
    const runtime = new ApiClient(config);
    const api = new MandatesApi(runtime);
    const result = await api.getMandates({ avalaraVersion: "1.2", $top: 10 });
    console.log(result);
    expect(result).toBeDefined();
    expect(result.value?.length).toBeGreaterThan(0);
  });
});

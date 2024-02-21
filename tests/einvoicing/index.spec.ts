import "dotenv/config";
import { Runtime } from "../../src/index";
import { AvaTaxEnvironment, Configuration } from "../../src/runtime";
import { DocumentsApi } from "../../src/apis/EInvoicing/V1";
import { ApiClient } from "../../src/runtime";

const configParams: Runtime.ConfigurationParameters = {
  appName: "asv-sdk-test-app",
  appVersion: "1.0",
  environment: AvaTaxEnvironment.Sandbox,
  machineName: "test-machine",
  timeout: 3000,
  bearerToken: process.env.BEARER_TOKEN,
};
const scopes = "avatax_api";

describe("EInvoicing API ", () => {
  const config = new Configuration(configParams);

  it("should be able retrieve a document from the Documents API", async () => {
    const runtime = new ApiClient(config);
    const api = new DocumentsApi(runtime);
    const result = await api.getDocumentList({ avalaraVersion: "1.0" });
    expect(result).toBeDefined();
  });
});

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
  bearerToken: process.env.BEARER_TOKEN_EINVOICING,
};
const scopes = "avatax_api";

describe("EInvoicing API ", () => {
  const config = new Configuration(configParams);

  it("should be able retrieve a document from the Documents API", async () => {
    const runtime = new ApiClient(config);
    const api = new DocumentsApi(runtime);
    const result = await api.getDocumentList({});
    expect(result).toBeDefined();
  });

  it("should be able retrieve a document from the Mandates API", async () => {
    const runtime = new ApiClient(config);
    const api = new MandatesApi(runtime);
    const result = await api.getMandates({ $top: 10 });
    expect(result).toBeDefined();
    expect(result.value?.length).toBeGreaterThan(0);
  });
});

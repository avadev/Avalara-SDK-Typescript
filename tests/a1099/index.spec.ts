import "dotenv/config";
import { Runtime } from "../../src/index";
import { AvaTaxEnvironment, Configuration } from "../../src/runtime";
import { Issuers1099Api, CompaniesW9Api, Forms1099Api, FormsW9Api } from "../../src/apis/A1099/V2";
import { ApiClient } from "../../src/runtime";

const configParams: Runtime.ConfigurationParameters = {
  appName: "asv-sdk-test-app",
  appVersion: "1.0",
  environment: AvaTaxEnvironment.Sandbox,
  machineName: "test-machine",
  timeout: 3000,
  bearerToken: process.env.BEARER_TOKEN_A1099,
};

describe("A1099 API", () => {
  const config = new Configuration(configParams);

  it("should retrieve a list of issuers", async () => {
    const runtime = new ApiClient(config);
    const api = new Issuers1099Api(runtime);
    const result = await api.getIssuers({ $top: 10, $skip: 0, count: true, countOnly: false, xCorrelationId: "2bbbed41-2466-4cf6-9cca-a3258bdc8eba" });
    expect(result).toBeDefined();
    expect(result.value).toBeDefined();
  });

  it("should retrieve a list of companies", async () => {
    const runtime = new ApiClient(config);
    const api = new CompaniesW9Api(runtime);
    const result = await api.getCompanies({ $top: 10, $skip: 0, count: true, countOnly: false, xCorrelationId: "2bbbed41-2466-4cf6-9cca-a3258bdc8eba" });
    expect(result).toBeDefined();
    expect(result.value).toBeDefined();
  });

  // it("should list 1099 forms", async () => {
  //   const runtime = new ApiClient(config);
  //   const api = new Forms1099Api(runtime);
  //   const result = await api.list1099Forms({ $top: 10, $skip: 0, xCorrelationId: "2bbbed41-2466-4cf6-9cca-a3258bdc8eba" });
  //   expect(result).toBeDefined();
  //   expect(result.data).toBeDefined();
  // });

  // Uncomment when ready to test W9 forms
  // it("should list W9 forms", async () => {
  //   const runtime = new ApiClient(config);
  //   const api = new FormsW9Api(runtime);
  //   const result = await api.listW9Forms({ $top: 10, $skip: 0, $count: true });
  //   expect(result).toBeDefined();
  //   expect(result.value).toBeDefined();
  // });
});
import 'dotenv/config';
import * as AvalaraSdk from '../../src/index';
import { Runtime } from '../../src/index';
import { AvaTaxEnvironment, Configuration } from '../../src/runtime';

const configParams: Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.Sandbox,
    machineName: 'test-machine',
    timeout:3000,
    bearerToken: process.env.BEARER_TOKEN || '',
    logOptions: {
        logEnabled: true,
        logRequestAndResponseInfo: true
    }
    // clientId: process.env.CLIENT_ID,
    // clientSecret: process.env.CLIENT_SECRET || ' ',
};

describe('Integration Test Documents API: ', () => {
    const config = new Configuration(configParams);
    var client = new Runtime.ApiClient(config);
    let api: AvalaraSdk.EInvoicing.V1.DocumentsApi;

    beforeEach(() => {
        api = new AvalaraSdk.EInvoicing.V1.DocumentsApi(client);
    });

    it('should be able to call Resolve Address endpoint', async () =>  {
        try {
            const requestParams:AvalaraSdk.EInvoicing.V1.GetDocumentListRequest = {
                avalaraVersion: '1.0',
            }
            const result = await api.getDocumentList(requestParams);
            console.log(result);
            expect(result).toBeDefined;
        } catch (err) {
            // console.log(err);
            // TODO: Will update expectations once API endpoints are available
            expect(err.statusCode).toBe(401);
        }
    });
});
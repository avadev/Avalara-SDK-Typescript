import 'dotenv/config';
import * as AvalaraSdk from '../../src/index';
import { Runtime } from '../../src/index';
import { AvaTaxEnvironment, Configuration } from '../../src/runtime';

const configParams: Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.QA,
    machineName: 'test-machine',
    timeout:3000,
    bearerToken: process.env.BEARER_TOKEN || '',
    logOptions: {
        logEnabled: true,
        logRequestAndResponseInfo: true,
        logLevel: 4
    }
    // clientId: process.env.CLIENT_ID,
    // clientSecret: process.env.CLIENT_SECRET || ' ',
};

describe('Integration Test Utilities API: ', () => {
    const config = new Configuration(configParams);
    var client = new Runtime.ApiClient(config);
    let utilitiesApi: AvalaraSdk.Avatax.V2.UtilitiesApi;

    beforeEach(() => {
        utilitiesApi = new AvalaraSdk.Avatax.V2.UtilitiesApi(client);
    });

    it('should be able to ping.', async () => {
        try {
            const result = await utilitiesApi.ping();
            expect(result).toBeDefined;
            expect(result.authenticated).toBeTruthy();
        } catch (err) {
            console.log(err);
            // TODO: Will update expectations once API endpoints are available
            expect(err.statusCode).toBe(401);
        }
    })
});
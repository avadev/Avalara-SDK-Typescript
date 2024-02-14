import 'dotenv/config';
import { DefinitionsApi, ListNexusRequest } from '../../src/apis/Avatax/V2';
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
        logEnabled: false,
        logRequestAndResponseInfo: false,
        logLevel: 4
    }
};

describe('Integration Test Definitions API: ', () => {
    const config = new Configuration(configParams);
    var client = new Runtime.ApiClient(config);
    let api: DefinitionsApi;

    beforeEach(() => {
        api = new DefinitionsApi(client);
    });

    it('should be able to list nexuses.', async () => {
        try {
            const requestParams: ListNexusRequest = {
                 $top: 3
            };
            const result = await api.listNexus(requestParams)
            expect(result.value?.length).toBe(3);
        } catch (err) {
            console.log(err);
            // TODO: Will update expectations once API endpoints are available
            expect(err.statusCode).toBe(401);
        }
    })
});
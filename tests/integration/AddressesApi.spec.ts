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

describe('Integration Test Addresses API: ', () => {
    const config = new Configuration(configParams);
    var client = new Runtime.ApiClient(config);
    let api: AvalaraSdk.Avatax.V2.AddressesApi;

    beforeEach(() => {
        api = new AvalaraSdk.Avatax.V2.AddressesApi(client);
    });

    it('should be able to call Resolve Address endpoint', async () =>  {
        try {
            const body: AvalaraSdk.Avatax.V2.AddressValidationInfo = {
                line1: '38565 SE Kimball Creek Dr.',
                city: 'Snoqualmie',
                region: 'WA',
                postalCode: '98065'
            };
            const requestParams: AvalaraSdk.Avatax.V2.ResolveAddressPostRequest = {
                body
            }
            const result = await api.resolveAddressPost(requestParams);
            console.log(result);
            expect(result).toBeDefined;
        } catch (err) {
            // console.log(err);
            // TODO: Will update expectations once API endpoints are available
            expect(err.statusCode).toBe(401);
        }
    });
});
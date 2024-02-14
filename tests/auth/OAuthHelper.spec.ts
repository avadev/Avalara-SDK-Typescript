import 'dotenv/config';
import { Runtime } from '../../src/index';
import { AvaTaxEnvironment, Configuration } from '../../src/runtime';
import { OAuthHelper } from '../../src/auth/OAuthHelper';

const configParams: Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.QA,
    machineName: 'test-machine',
    timeout:3000,
    clientId: process.env.CLIENT_ID,
};
const scopes = 'avatax_api';

describe('OAuthHelper ', () => {
    const config = new Configuration(configParams);

    it('should be able to initiate the device authorization flow', async () => {
        const response = await OAuthHelper.initiateDeviceAuthorizationFlow(scopes, config);
        expect(response.verificationUrl).toBe('https://ai-awsfqa.avlr.sh/device');
        const tokenResponse = await OAuthHelper.getAccessTokenForDeviceFlow(response.deviceCode, config);
        expect(tokenResponse.errorMessage).toBe('authorization_pending');
        expect(tokenResponse.httpStatusCode).toBe(400);
    });
});
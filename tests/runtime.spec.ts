import type { FetchMockStatic } from 'fetch-mock';
import 'fetch-mock-jest';
import fetch from 'node-fetch';

import { Runtime } from '../src/index';
import { AvaTaxEnvironment, Configuration, FALLBACK_TOKEN_URL } from '../src/runtime';

jest.mock(
  'node-fetch', 
  () => require('fetch-mock-jest').sandbox(),
);
const fetchMock = (fetch as unknown) as FetchMockStatic;

describe('Runtime client: ', () => {
    const qaConfig: Runtime.ConfigurationParameters = {
        appName: 'asv-sdk-test-app',
        appVersion: '1.0',
        environment: AvaTaxEnvironment.QA,
        machineName: 'test-machine',
        timeout:3000,
        clientId: 'someClientId',
        clientSecret: 'someSecret',
        testBasePath: 'https://localhost:3000'
    };
    const mockTokenResponse = {
        'access_token': 'fake_access_token', 
        'expires_in': 3600 
    };

    describe('Runtime class', () => {
        beforeEach(() => fetchMock.reset());
    
        it('should be able to applyAuthToRequest for cached token', () =>  {
            const config = new Configuration(qaConfig);
            const client = (new Runtime.ApiClient(config) as any);
            jest.spyOn(client, 'getOAuthAccessToken').mockImplementationOnce(() => ('fake_access_token'))
            const headerParameters = {};
            client.applyAuthToRequest(headerParameters, ['OAuth'], 'avatax_api');
            expect(headerParameters['Authorization']).toBe('Bearer fake_access_token');
        });

        it('should be able to getOAuthAccessToken which is cached', () => {
            const config = new Configuration(qaConfig);
            const client = (new Runtime.ApiClient(config) as any);
            client.accessTokenMap.set('avatax_api', { accessToken: 'fake_access_token', expiry: Math.floor(Date.now() / 1000) + 360 });
            const token = client.getOAuthAccessToken('avatax_api');
            expect(token).toBe('fake_access_token');
        });

        it('should return null when the token is expired', () => {
            const config = new Configuration(qaConfig);
            const client = (new Runtime.ApiClient(config) as any);
            client.accessTokenMap.set('avatax_api', { accessToken: 'fake_access_token', expiry: Math.floor(Date.now() / 1000) + 180 });
            const token = client.getOAuthAccessToken('avatax_api');
            expect(token).toBe(null);
        });

        it('should update an accessToken', async () => {
            const config = new Configuration(qaConfig);
            const client = (new Runtime.ApiClient(config) as any);
            
            jest.spyOn(client, 'buildOAuthRequest').mockImplementationOnce(() => (mockTokenResponse));
        
            await client.updateOAuthAccessToken('avatax_api');
            expect(client.accessTokenMap.get('avatax_api')).toEqual(expect.objectContaining({
                accessToken: 'fake_access_token'
            }));
        });

        it('should be able to buildOAuthRequest for a given set of scopes', async () => {
            const mockTokenEndpoint = 'https://ai.avalara.com/token';
            fetchMock.get('https://ai-awsfqa.avlr.sh/.well-known/openid-configuration', { "token_endpoint": mockTokenEndpoint });
            fetchMock.post(mockTokenEndpoint, mockTokenResponse)
            const config = new Configuration(qaConfig);
            const client = (new Runtime.ApiClient(config) as any);
            const tokenData = await client.buildOAuthRequest();
            expect(tokenData).toEqual(mockTokenResponse);
        });
    });
    

    describe('Configuration class', () => {
        beforeEach(() => fetchMock.reset());

        it('should be able to getTokenUrl', async () => {
            
            fetchMock.get('https://ai-awsfqa.avlr.sh/.well-known/openid-configuration', { "token_endpoint": "https://ai.avalara.com/token"});
            const config = new Configuration(qaConfig);
            await config.setOIDCUrls();
            expect(config.oidcUrls.tokenUrl).toBe('https://ai.avalara.com/token');
        });

        it('should use fallback token url if OIDC document does not return.', async () => {
            fetchMock.get('https://ai-awsfqa.avlr.sh/.well-known/openid-configuration', { throws: { message: 'endpoint unavailable'} } );
            const config = new Configuration(qaConfig);
            await config.setOIDCUrls();
            expect(config.oidcUrls.tokenUrl).toBe(FALLBACK_TOKEN_URL);
        });
    });
});
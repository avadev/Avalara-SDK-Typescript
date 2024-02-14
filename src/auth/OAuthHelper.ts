import { Configuration } from "../runtime";
import fetch from 'node-fetch';

export interface DeviceAuthorizationResponse {
    /**
     * The device verification code.
     */
    deviceCode: string;
    /**
     * The end-user verification code.
     */
    userCode: string;
    /**
     * The end-user verification URI on the authorization server. The URI
     * should be and easy to remember as end-users will be asked to
     * manually type it into their user-agent.
     */
    verificationUrl: string;
    /**
     * Optional. A verification URI that includes the "user_code" (or other
     * information with the same function as the "user_code"), designed for
     * non-textual transmission.
     */
    verificationUrlComplete?: string;
    /**
     * The lifetime in seconds of the "device_code" and "user_code".
     */
    expiry: number;
    /**
     * Optional. The minimum amount of time in seconds that the client
     * SHOULD wait between polling requests to the token endpoint. If no
     * value is provided, clients MUST use 5 as the default.
     */
    interval?: number;
}

export interface DeviceTokenResponse {
    httpStatusCode: number;
    errorMessage: string;
    idToken: string;
    refreshToken: string;
    accessToken: string;
    expiryTime: number;
    tokenType: string;
    scope?: string;
}

export class OAuthHelper {
    public static async initiateDeviceAuthorizationFlow(scopes: string, configuration: Configuration): Promise<DeviceAuthorizationResponse> {
        await configuration.setOIDCUrls();
        let response = null;
        try {
            response = await this.buildOAuthDeviceAuthRequest(scopes, configuration);
        } catch (err) {
            console.log(`OAuth2 Device Authorization retrieval failed. Error: ${err}`);
            throw new Error(`OAuth2 Device Authorization retrieval failed. Error: ${err}`);
        }
        return {
            deviceCode: response['device_code'],
            userCode: response['user_code'],
            expiry: response['expires_in'],
            interval: response['interval'],
            verificationUrl: response['verification_uri'],
            verificationUrlComplete: response['verification_uri_complete'],
        };
    }

    public static async getAccessTokenForDeviceFlow(deviceAuthCode: string, configuration: Configuration): Promise<DeviceTokenResponse> {
        let response = null;
        try {
            response = await this.buildOAuthTokenRequest(deviceAuthCode, configuration);
        } catch (err) {
            console.log(`OAuth2 Device Token retrieval failed. Error: ${err}`);
            throw new Error(`OAuth2 Device Token retrieval failed. Error: ${err}`);
        }
        if (response.error) {
            return {
                idToken: null,
                refreshToken: null,
                accessToken: null,
                expiryTime: null,
                tokenType: null,
                scope: null,
                httpStatusCode: response.statusCode,
                errorMessage: response.error
            };
        }
        return {
            accessToken: response['access_token'],
            refreshToken: response['refresh_token'],
            idToken: response['id_token'],
            tokenType: response['token_type'],
            expiryTime: response['expires_in'],
            httpStatusCode: response.statusCode,
            errorMessage: null
        };
    }

    private static async buildOAuthTokenRequest(deviceAuthCode: string, configuration: Configuration) {
        const { clientId } = configuration;
        const { tokenUrl } = configuration.oidcUrls;
        const response = await fetch(tokenUrl, {
            method: 'POST',
            body: `grant_type=urn:ietf:params:oauth:grant-type:device_code&device_code=${deviceAuthCode}&client_id=${clientId}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        data.statusCode = response.status;
        return data;
     }

    private static async buildOAuthDeviceAuthRequest(scopes: string, configuration: Configuration) {
        const { deviceAuthorizationUrl } = configuration.oidcUrls;
        const response = await fetch(deviceAuthorizationUrl, {
            method: 'POST',
            body: `client_id=${configuration.clientId}&scope=${scopes}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }
}
import 'dotenv/config';
import { CreateOrAdjustTransactionRequest, TransactionsApi } from '../../src/apis/Avatax/V2';
import * as AvalaraSdk from '../../src/index';
import { Runtime } from '../../src/index';
import { CreateOrAdjustTransactionModelAdjustmentReasonEnum, CreateTransactionModelTypeEnum } from '../../src/models/Avatax/V2';
import { AvaTaxEnvironment, Configuration } from '../../src/runtime';
import * as winston from 'winston';

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
      new winston.transports.Console()
    ],
  });

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
        logLevel: 4,
        logger
    }
};

describe('Integration Test Transactions API: ', () => {
    const config = new Configuration(configParams);
    var client = new Runtime.ApiClient(config);
    let api: TransactionsApi;

    beforeEach(() => {
        api = new TransactionsApi(client);
    });

    it('should be able to create or adjust transactions.', async () => {
        const model = {
            "adjustmentReason": CreateOrAdjustTransactionModelAdjustmentReasonEnum.Other,
            "adjustmentDescription": "Test Description",
            "createTransactionModel": {
              "lines": [
                {
                  "number": "1",
                  "quantity": 1,
                  "amount": 100,
                  "taxCode": "PS081282",
                  "itemCode": "Y0001",
                  "description": "Yarn"
                }
              ],
              "type": CreateTransactionModelTypeEnum.SalesInvoice,
              "companyCode": "DEFAULT",
              "date": new Date("2022-10-14"),
              "customerCode": "ABC",
              "purchaseOrderNo": "2022-10-14-001",
              "addresses": {
                "singleLocation": {
                  "line1": "2000 Main Street",
                  "city": "Irvine",
                  "region": "CA",
                  "country": "US",
                  "postalCode": "92614"
                }
              },
              "commit": true,
              "currencyCode": "USD",
              "description": "Yarn"
            }
          };
        try {
            const requestParams: CreateOrAdjustTransactionRequest = {
                body: model
            };
            const result = await api.createOrAdjustTransaction(requestParams)
            expect(result).toBeDefined();
        } catch (err) {
            // TODO: Will update expectations once API endpoints are available
            expect(err.statusCode).toBe(401);
        }
    })
});
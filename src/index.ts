import * as A1099V2 from './packages/A1099/V2/index';
import * as EInvoicingV1 from './packages/EInvoicing/V1/index';

export namespace A1099 {
    export import V2 = A1099V2;
}

export namespace EInvoicing {
    export import V1 = EInvoicingV1;
}

export * as Runtime from './runtime';
export * as OAuthHelper from './auth/OAuthHelper';

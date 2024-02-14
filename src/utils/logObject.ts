import { FetchParams } from "../runtime";

export default class LogObject {
  private logRequestAndResponseInfo: boolean = false;
  private httpMethod: string;
  private correlationId: string;
  private requestDetails: string;
  private responseDetails: string;
  private requestURI: string;
  private totalExecutionTime: number;
  private statusCode: number;
  private timestamp: string;
  private errorInfo: Error;
  private startTime: number;

  constructor(logRequestAndResponseInfo: boolean) {
    this.logRequestAndResponseInfo = logRequestAndResponseInfo;
  }

  public populateRequestInfo(uri: string, fetchParams: RequestInit) {
    const { body, method } = fetchParams;
    this.timestamp = new Date().toUTCString();
    this.startTime = Date.now();
    this.httpMethod = method;
    this.requestURI = uri;
    if (body && this.logRequestAndResponseInfo) {
      this.requestDetails = body as string;
    }
  }

  public populateResponseInfo(response: Response) {
    this.populateCorrelationId(response.headers);
    this.populateStatusCode(response);
  }

  public populateResponseBody(data: any) {
    if (data && this.logRequestAndResponseInfo) {
      this.responseDetails = data;
    }
  }

  public populateErrorInfo(response: Response, errorInfo: Error) {
    this.populateCorrelationId(response.headers);
    this.populateStatusCode(response);
    if (errorInfo) {
      this.errorInfo = errorInfo;
    }
  }

  public populateElapsedTime() {
    this.totalExecutionTime = Date.now() - this.startTime;
  }

  public getStatusCode(): number {
    return this.statusCode;
  }

  public toString(): string {
    const { 
      httpMethod, correlationId, requestDetails, responseDetails, requestURI, 
      totalExecutionTime, statusCode, timestamp, errorInfo 
    } = this;
    return JSON.stringify({
      httpMethod,
      correlationId,
      requestDetails,
      responseDetails,
      requestURI,
      totalExecutionTime,
      statusCode,
      timestamp, 
      errorInfo
    });
  }

  private populateStatusCode(response: Response) {
    this.statusCode = response.status;
  }

  private populateCorrelationId(headers: Headers) {
    if(headers.get('x-correlation-id')) {
      this.correlationId = headers.get('x-correlation-id');
    }
  }
}
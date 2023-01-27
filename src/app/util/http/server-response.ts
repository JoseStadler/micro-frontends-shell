import { Observable } from 'rxjs';

interface BaseServerResponse<T> {
  statusCode?: number;
  data: T;
  /**
   * Indicates the status of the request
   */
  status: boolean;
}

export type ServerResponseErrors = any;
export interface SuccessfulServerResponse<T = any>
  extends BaseServerResponse<T> {
  status: true;
}

export interface FailServerResponse<T = any, V = ServerResponseErrors>
  extends BaseServerResponse<T> {
  status: false;
  errors: V;
}

export type ServerResponse<T, E = any, V = ServerResponseErrors> = Observable<
  SuccessfulServerResponse<T> | FailServerResponse<E, V>
>;

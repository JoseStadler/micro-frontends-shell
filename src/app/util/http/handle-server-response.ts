import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  FailServerResponse,
  SuccessfulServerResponse,
  ServerResponseErrors,
} from './server-response';

function getErrorObject(error: HttpErrorResponse) {
  return {
    status: error.error?.status ?? error.ok,
    statusCode: error.status,
  };
}

export function printFailHttpResponse(error: HttpErrorResponse) {
  console.error(error);
}

export function httpSuccessfulHandler<T = any>(): (
  response: HttpResponse<T>
) => SuccessfulServerResponse<T> {
  return (response: HttpResponse<T>): SuccessfulServerResponse<T> => {
    return {
      data: response.body!,
      status: response.ok as true,
      statusCode: response.status,
    };
  };
}

export function httpErrorHandler<T = null, V = ServerResponseErrors>(
  result = null as T
) {
  return (
    response: HttpErrorResponse
  ): Observable<FailServerResponse<T, V>> => {
    printFailHttpResponse(response);

    return of({
      ...getErrorObject(response),
      data: result,
      errors: response.error?.data ?? null,
    });
  };
}

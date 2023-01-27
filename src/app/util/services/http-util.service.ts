import { RequestParams } from './../http/request-params';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpUtilService {
  getHttpParams(requestParams: RequestParams): HttpParams {
    let params = new HttpParams();

    for (const key in requestParams) {
      if (Object.prototype.hasOwnProperty.call(requestParams, key)) {
        params = params.append(key, requestParams[key]);
      }
    }

    return params;
  }
}

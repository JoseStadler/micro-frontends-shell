import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RouterUtilService {
  constructor(private router: Router) {}

  removeQueryParams(url: string, paramsToRemove: string[]) {
    const tree = this.router.parseUrl(url);
    const paramsToRemoveMap = paramsToRemove.reduce(
      (map, param) => ({ ...map, [param]: true }),
      {},
    );

    tree.queryParams = tree.queryParamMap.keys.reduce((params, key) => {
      if (paramsToRemoveMap[key]) {
        return params;
      }
      return { ...params, [key]: tree.queryParamMap.get(key) };
    }, {});

    return tree.toString();
  }
}

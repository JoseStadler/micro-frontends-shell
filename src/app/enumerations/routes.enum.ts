import { RouteResources } from 'src/app/util/routes';
export const CLIENT_CONFIG_CODE = 'CLIENT_CONFIG';
export const CONTRACTOR_CONFIG_CODE = 'CONTRACTOR_CONFIG';
export const DASHBOARD = 'DASHBOARD';

export const RoutesEnum = [
  {
    code: CLIENT_CONFIG_CODE,
    route: RouteResources.clientConfig,
  },
  {
    code: CONTRACTOR_CONFIG_CODE,
    route: RouteResources.contractorConfig,
  },
  {
    code: 'DASHBOARD',
    route: RouteResources.home,
  },
  {
    code: 'HOME',
    route: RouteResources.home,
  },
  {
    code: 'USER_SETTINGS',
    route: RouteResources.userSettings,
  },
];

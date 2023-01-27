import { RedirectRoute } from '@models/redirect-route';
import { RouteResources } from 'src/app/util/routes';

export const RedirectionRoutes: RedirectRoute[] = [
  {
    redirectParam: 'paymentsetup',
    route: RouteResources.sendMoney,
  },
  {
    redirectParam: 'card-request',
    route: RouteResources.cardContractor,
  },
  {
    redirectParam: 'contractor-contract-list',
    route: RouteResources.contractorContractList,
  },
  {
    redirectParam: 'client-approval',
    route: RouteResources.clientUpcomingPayment,
  },
  {
    redirectParam: 'client-invoices-list',
    route: RouteResources.clientInvoices,
  },
];

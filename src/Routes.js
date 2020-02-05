import CreateWorker from "./containers/Workers/CreateWorker";
import CreateProcess from "./containers/Processes/CreateProcess";
import CreateAdvance from "./containers/Advances/CreateAdvance";
import CreateDocument from "./containers/Documents/CreateDocument";
import CreatePayment from "./containers/Payments/CreatePayment";

import Workers from "./containers/Workers";
import Processes from "./containers/Processes";
import Advances from "./containers/Advances";
import Dashboard from "./containers/Dashboard";
import Documents from "./containers/Documents";
import Payments from "./containers/Payments";
import Transactions from "./containers/Transactions";

export const ROUTES = [
  {
    path: "/",
    component: Dashboard,
    navigation: true,
    label: "Dashboard"
  },
  {
    path: "/workers",
    component: Workers,
    navigation: true,
    label: "Workers"
  },
  {
    path: "/worker/create",
    component: CreateWorker
  },
  {
    path: "/worker/edit",
    component: CreateWorker
  },
  {
    path: "/processes",
    component: Processes,
    navigation: true,
    label: "Processes"
  },
  {
    path: "/process/create",
    component: CreateProcess
  },
  {
    path: "/process/edit",
    component: CreateProcess
  },
  {
    path: "/advances",
    component: Advances,
    navigation: true,
    label: "Advances"
  },
  {
    path: "/advance/create",
    component: CreateAdvance
  },
  {
    path: "/advance/edit",
    component: CreateAdvance
  },
  {
    path: "/documents",
    component: Documents,
    navigation: true,
    label: "Documents"
  },
  {
    path: "/document/create",
    component: CreateDocument
  },
  {
    path: "/document/edit",
    component: CreateDocument
  },
  {
    path: "/payments",
    component: Payments,
    navigation: true,
    label: "Payments"
  },
  {
    path: "/payment/create",
    component: CreatePayment
  },
  {
    path: "/payment/edit",
    component: CreatePayment
  },
  {
    path: "/trasnactions",
    component: Transactions,
    navigation: true,
    label: "Transactions"
  }
];

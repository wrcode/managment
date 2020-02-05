import { takeLatest } from "redux-saga/effects";
import { Types as workersTypes } from "redux/actions/workers.actions";
import { Types as processesTypes } from "redux/actions/processes.actions";
import { Types as advancesTypes } from "redux/actions/advances.actions";
import { Types as documentsTypes } from "redux/actions/documents.actions";
import { Types as paymentsTypes } from "redux/actions/payments.actions";
import { Types as transactionsTypes } from "redux/actions/transactions.actions";

import {
  getWorkers,
  editWorker,
  createWorker,
  deleteWorker,
  updateWorker
} from "./workers.sagas";

import {
  getProcesses,
  editProcess,
  createProcess,
  deleteProcess,
  updateProcess
} from "./processes.sagas";

import {
  getAdvances,
  editAdvance,
  createAdvance,
  deleteAdvance,
  updateAdvance
} from "./advances.sagas";

import {
  getDocuments,
  editDocument,
  createDocument,
  deleteDocument,
  updateDocument
} from "./documents.sagas";

import {
  getPayments,
  editPayment,
  createPayment,
  deletePayment,
  updatePayment
} from "./payments.sagas";

import {
  getTransactions,
  editTransaction,
  createTransaction,
  deleteTransaction,
  updateTransaction
} from "./transactions.sagas";

function* sagas() {
  yield takeLatest(workersTypes.GET, getWorkers);
  yield takeLatest(workersTypes.EDIT, editWorker);
  yield takeLatest(workersTypes.SET, createWorker);
  yield takeLatest(workersTypes.DROP, deleteWorker);
  yield takeLatest(workersTypes.UPDATE, updateWorker);

  yield takeLatest(processesTypes.GET, getProcesses);
  yield takeLatest(processesTypes.EDIT, editProcess);
  yield takeLatest(processesTypes.SET, createProcess);
  yield takeLatest(processesTypes.DROP, deleteProcess);
  yield takeLatest(processesTypes.UPDATE, updateProcess);

  yield takeLatest(advancesTypes.GET, getAdvances);
  yield takeLatest(advancesTypes.EDIT, editAdvance);
  yield takeLatest(advancesTypes.SET, createAdvance);
  yield takeLatest(advancesTypes.DROP, deleteAdvance);
  yield takeLatest(advancesTypes.UPDATE, updateAdvance);

  yield takeLatest(documentsTypes.GET, getDocuments);
  yield takeLatest(documentsTypes.EDIT, editDocument);
  yield takeLatest(documentsTypes.SET, createDocument);
  yield takeLatest(documentsTypes.DROP, deleteDocument);
  yield takeLatest(documentsTypes.UPDATE, updateDocument);

  yield takeLatest(paymentsTypes.GET, getPayments);
  yield takeLatest(paymentsTypes.EDIT, editPayment);
  yield takeLatest(paymentsTypes.SET, createPayment);
  yield takeLatest(paymentsTypes.DROP, deletePayment);
  yield takeLatest(paymentsTypes.UPDATE, updatePayment);

  yield takeLatest(transactionsTypes.GET, getTransactions);
  yield takeLatest(transactionsTypes.EDIT, editTransaction);
  yield takeLatest(transactionsTypes.SET, createTransaction);
  yield takeLatest(transactionsTypes.DROP, deleteTransaction);
  yield takeLatest(transactionsTypes.UPDATE, updateTransaction);
}

export default sagas;

import { takeLatest } from "redux-saga/effects";
import { Types as workersTypes } from "../../redux/actions/workers.actions";
import { Types as processesTypes } from "../../redux/actions/processes.actions";

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
}

export default sagas;

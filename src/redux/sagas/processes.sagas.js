import { call, put } from "redux-saga/effects";
import { Creators } from "../../redux/actions/processes.actions";
import Api from "./api";

export function* getProcesses(action) {
  try {
    const processes = yield call(Api.getProcesses);

    yield put(Creators.add(processes));
  } catch (e) {}
}

export function* createProcess({ data }) {
  try {
    yield call(Api.createProcess, data);
    yield put(Creators.get());
  } catch (e) {}
}

export function* editProcess({ id }) {
  try {
    const worker = yield call(Api.editProcess, id);

    yield put(Creators.setEdit(worker.data));
  } catch (e) {}
}

export function* updateProcess({ data }) {
  try {
    yield call(Api.updateProcess, data);

    yield put(Creators.get());
  } catch (e) {}
}

export function* deleteProcess({ id }) {
  try {
    yield call(Api.deleteProcess, id);
    yield put(Creators.get());
  } catch (e) {}
}

import { call, put } from "redux-saga/effects";
import { Creators } from "../../redux/actions/workers.actions";
import Api from "./api";

export function* getWorkers(action) {
  try {
    const workers = yield call(Api.getWorkers);

    yield put(Creators.add(workers));
  } catch (e) {}
}

export function* createWorker({ data }) {
  try {
    yield call(Api.createWorker, data);
    yield put(Creators.get());
  } catch (e) {}
}

export function* editWorker({ id }) {
  try {
    const worker = yield call(Api.editWorker, id);

    yield put(Creators.setEdit(worker.data));
  } catch (e) {}
}

export function* updateWorker({ data }) {
  try {
    yield call(Api.updateWorker, data);

    yield put(Creators.get());
  } catch (e) {}
}

export function* deleteWorker({ id }) {
  try {
    yield call(Api.deleteWorker, id);
    yield put(Creators.get());
  } catch (e) {}
}

import { call, put, takeLatest } from "redux-saga/effects";
import { Creators, Types } from "../../redux/actions/workers.actions";
import Api from "./api";

function* getWorkers(action) {
  try {
    const workers = yield call(Api.getWorkers);

    yield put(Creators.add(workers));
  } catch (e) {}
}

function* createWorker({ data }) {
  try {
    yield call(Api.createWorker, data);
  } catch (e) {}
}

function* sagas() {
  yield takeLatest(Types.GET, getWorkers);
  yield takeLatest(Types.SET, createWorker);
}

export default sagas;

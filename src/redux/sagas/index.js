import { call, put, takeLatest } from "redux-saga/effects";
import { Creators, Types } from "../../redux/actions/workers.actions";
import Api from "./api";

function* getWorkers(action) {
  try {
    const workers = yield call(Api.getWorkers);

    yield put(Creators.set());
  } catch (e) {}
}

function* sagas() {
  yield takeLatest(Types.GET, getWorkers);
}

export default sagas;

import { call, put, takeLatest } from "redux-saga/effects";
import Api from "./api";

function* getWorkers(action) {
  try {
    const user = yield call(Api.getWorkers, action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* sagas() {
  yield takeLatest("USER_FETCH_REQUESTED", getWorkers);
}

export default sagas;

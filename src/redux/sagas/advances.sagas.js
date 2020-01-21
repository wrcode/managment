import { call, put } from "redux-saga/effects";
import { Creators } from "../../redux/actions/advances.actions";
import Api from "./api";

export function* getAdvances(action) {
  try {
    const advances = yield call(Api.getAdvances);

    yield put(Creators.add(advances));
  } catch (e) {}
}

export function* createAdvance({ data }) {
  try {
    yield call(Api.createAdvance, data);
    yield put(Creators.get());
  } catch (e) {}
}

export function* editAdvance({ id }) {
  try {
    const advance = yield call(Api.editAdvance, id);

    yield put(Creators.setEdit(advance.data));
  } catch (e) {}
}

export function* updateAdvance({ data }) {
  try {
    yield call(Api.updateAdvance, data);

    yield put(Creators.get());
  } catch (e) {}
}

export function* deleteAdvance({ id }) {
  try {
    yield call(Api.deleteAdvance, id);
    yield put(Creators.get());
  } catch (e) {}
}

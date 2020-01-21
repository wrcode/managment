import { call, put } from "redux-saga/effects";
import { Creators } from "redux/actions/documents.actions";
import Api from "./api";

export function* getDocuments() {
  try {
    const documents = yield call(Api.getDocuments);

    yield put(Creators.add(documents));
  } catch (e) {}
}

export function* createDocument({ data }) {
  try {
    yield call(Api.createDocument, data);
    yield put(Creators.get());
  } catch (e) {}
}

export function* editDocument({ id }) {
  try {
    const doc = yield call(Api.editDocument, id);

    yield put(Creators.setEdit(doc.data));
  } catch (e) {}
}

export function* updateDocument({ data }) {
  try {
    yield call(Api.updateDocument, data);

    yield put(Creators.get());
  } catch (e) {}
}

export function* deleteDocument({ id }) {
  try {
    yield call(Api.deleteDocument, id);
    yield put(Creators.get());
  } catch (e) {}
}

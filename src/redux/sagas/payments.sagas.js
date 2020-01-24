import { call, put } from "redux-saga/effects";
import { Creators } from "redux/actions/payments.actions";
import Api from "./api";

export function* getPayments(action) {
  try {
    const payments = yield call(Api.getPayments);

    yield put(Creators.add(payments));
  } catch (e) {}
}

export function* createPayment({ data }) {
  try {
    yield call(Api.createPayment, data);
    yield put(Creators.get());
  } catch (e) {}
}

export function* editPayment({ id }) {
  try {
    const payment = yield call(Api.editPayment, id);

    yield put(Creators.setEdit(payment.data));
  } catch (e) {}
}

export function* updatePayment({ data }) {
  try {
    yield call(Api.updatePayment, data);

    yield put(Creators.get());
  } catch (e) {}
}

export function* deletePayment({ id }) {
  try {
    yield call(Api.deletePayment, id);
    yield put(Creators.get());
  } catch (e) {}
}

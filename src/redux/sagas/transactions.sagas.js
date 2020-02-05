import { call, put } from "redux-saga/effects";
import { Creators } from "redux/actions/transactions.actions";
import Api from "./api";

export function* getTransactions({ data = {} }) {
  try {
    const transactions = yield call(Api.getTransactions, data);

    yield put(Creators.add(transactions));
  } catch (e) {}
}

export function* createTransaction({ data }) {
  try {
    yield call(Api.createTransaction, data);
    yield put(Creators.get());
  } catch (e) {}
}

export function* editTransaction({ id }) {
  try {
    const Transaction = yield call(Api.editTransaction, id);

    yield put(Creators.setEdit(Transaction.data));
  } catch (e) {}
}

export function* updateTransaction({ data }) {
  try {
    yield call(Api.updateTransaction, data);

    yield put(Creators.get());
  } catch (e) {}
}

export function* deleteTransaction({ id }) {
  try {
    yield call(Api.deleteTransaction, id);
    yield put(Creators.get());
  } catch (e) {}
}

import { connect } from "react-redux";
import { getAdvances } from "redux/selectors/advances.selectors";
import { getWorkers } from "redux/selectors/workers.selectors";
import { getDocuments } from "redux/selectors/documents.selectors";
import { getProcesses } from "redux/selectors/processes.selectors";
import { getPayments } from "redux/selectors/payments.selectors";
import { Creators as WorkersActions } from "redux/actions/workers.actions";
import { Creators as AdvancesActions } from "redux/actions/advances.actions";
import { Creators as DocumentsActions } from "redux/actions/documents.actions";
import { Creators as ProcessesActions } from "redux/actions/processes.actions";
import { Creators as PaymentsActions } from "redux/actions/payments.actions";
import {
  getAdvancesAmount,
  getProcessesAmount,
  getCount,
  getPaymentsAmount,
  getPaymentsCount
} from "helpers";
import { compose, lifecycle, mapProps } from "recompose";
import moment from "moment";

import DashBoard from "./Dashboard";

const mapDispatchToProps = {
  fetchWorkers: WorkersActions.get,
  fetchAdvances: AdvancesActions.get,
  fetchDocuments: DocumentsActions.get,
  fetchProcesses: ProcessesActions.get,
  fetchPayments: PaymentsActions.get
};

const mapStateToProps = state => ({
  advances: getAdvances(state),
  workers: getWorkers(state),
  documents: getDocuments(state),
  processes: getProcesses(state),
  payments: getPayments(state)
});

function componentDidMount() {
  this.props.fetchAdvances();
  this.props.fetchWorkers();
  this.props.fetchDocuments();
  this.props.fetchProcesses();
  this.props.fetchPayments();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount }),
  mapProps(({ workers, advances, documents, processes, payments }) => ({
    advancesAmount: getAdvancesAmount(advances, moment()),
    workersCount: getCount(workers),
    documentsCount: getCount(documents),
    processesCount: getCount(processes),
    processAmount: getProcessesAmount(processes, moment()),
    paymentsAmount: getPaymentsAmount(payments, moment()),
    paymentsMonthlyCount: getPaymentsCount(payments, moment()),
    paymentsCount: getCount(payments)
  }))
)(DashBoard);

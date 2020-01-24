import { connect } from "react-redux";
import { getAdvances } from "redux/selectors/advances.selectors";
import { getWorkers } from "redux/selectors/workers.selectors";
import { getDocuments } from "redux/selectors/documents.selectors";
import { getProcesses } from "redux/selectors/processes.selectors";
import { Creators as WorkersActions } from "redux/actions/workers.actions";
import { Creators as AdvancesActions } from "redux/actions/advances.actions";
import { Creators as DocumentsActions } from "redux/actions/documents.actions";
import { Creators as ProcessesActions } from "redux/actions/processes.actions";
import { getAdvancesAmount, getProcessesAmount, getCount } from "helpers";
import { compose, lifecycle, mapProps } from "recompose";
import moment from "moment";

import DashBoard from "./Dashboard";

const mapDispatchToProps = {
  fetchWorkers: WorkersActions.get,
  fetchAdvances: AdvancesActions.get,
  fetchDocuments: DocumentsActions.get,
  fetchProcesses: ProcessesActions.get
};

const mapStateToProps = state => ({
  advances: getAdvances(state),
  workers: getWorkers(state),
  documents: getDocuments(state),
  processes: getProcesses(state)
});

function componentDidMount() {
  this.props.fetchAdvances();
  this.props.fetchWorkers();
  this.props.fetchDocuments();
  this.props.fetchProcesses();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount }),
  mapProps(({ workers, advances, documents, processes }) => ({
    advancesAmount: getAdvancesAmount(advances, moment()),
    workersCount: getCount(workers),
    documentsCount: getCount(documents),
    processesCount: getCount(processes),
    processAmount: getProcessesAmount(processes, moment())
  }))
)(DashBoard);

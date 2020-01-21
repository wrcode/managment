import { connect } from "react-redux";
import { getProcesses } from "redux/selectors/processes.selectors";
import { getWorkers } from "redux/selectors/workers.selectors";
import { Creators as WorkersActions } from "redux/actions/workers.actions";
import { Creators as ProcessesActions } from "redux/actions/processes.actions";
import { compose, lifecycle, mapProps } from "recompose";
import { withRouter } from "react-router-dom";
import Processes from "./Processes";

const mapDispatchToProps = {
  fetchProcesses: WorkersActions.get,
  fetchWorkers: ProcessesActions.get,
  deleteProcess: ProcessesActions.drop,
  editProcess: ProcessesActions.edit
};

const mapStateToProps = state => ({
  processes: getProcesses(state),
  workers: getWorkers(state)
});

function componentDidMount() {
  this.props.fetchProcesses();
  this.props.fetchWorkers();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount }),
  withRouter,
  mapProps(({ editProcess, history, ...props }) => ({
    editProcess: id => {
      editProcess(id);
      history.push("/process/edit");
    },
    ...props
  }))
)(Processes);

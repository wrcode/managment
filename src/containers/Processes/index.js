import { connect } from "react-redux";
import { getProcesses } from "../../redux/selectors/processes.selectors";
import { Creators as WorkersActions } from "../../redux/actions/workers.actions";
import { Creators as ProcessesActions } from "../../redux/actions/processes.actions";
import { compose, lifecycle } from "recompose";
import { withRouter } from "react-router-dom";
import Processes from "./Processes";

const mapDispatchToProps = {
  fetchProcesses: WorkersActions.get,
  fetchWorkers: ProcessesActions.get,
  deleteProcess: ProcessesActions.drop,
  editProcess: ProcessesActions.edit
};

const mapStateToProps = state => ({
  processes: getProcesses(state)
});

function componentDidMount() {
  this.props.fetchProcesses();
  this.props.fetchWorkers();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount }),
  withRouter
)(Processes);

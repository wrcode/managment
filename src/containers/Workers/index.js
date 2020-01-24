import { connect } from "react-redux";
import { getWorkers } from "redux/selectors/workers.selectors";
import { Creators as workersActions } from "redux/actions/workers.actions";
import { Creators as advancesActions } from "redux/actions/advances.actions";
import { compose, lifecycle, mapProps } from "recompose";
import { withRouter } from "react-router-dom";
import Workers from "./Workers";

const mapDispatchToProps = {
  fetchAdvances: advancesActions.get,
  fetchWorkers: workersActions.get,
  deleteWorker: workersActions.drop,
  editWorker: workersActions.edit
};

const mapStateToProps = state => ({
  workers: getWorkers(state)
});

function componentDidMount() {
  this.props.fetchWorkers();
  this.props.fetchAdvances();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount }),
  withRouter,
  mapProps(({ editWorker, history, ...props }) => ({
    editWorker: id => {
      editWorker(id);
      history.push("/worker/edit");
    },
    ...props
  }))
)(Workers);

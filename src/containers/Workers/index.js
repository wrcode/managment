import { connect } from "react-redux";
import { getWorkers } from "../../redux/selectors/workers.selectors";
import { Creators } from "../../redux/actions/workers.actions";
import { compose, lifecycle, mapProps } from "recompose";
import { withRouter } from "react-router-dom";
import Workers from "./Workers";

const mapDispatchToProps = {
  fetchWorkers: Creators.get,
  deleteWorker: Creators.drop,
  editWorker: Creators.edit
};

const mapStateToProps = state => ({
  workers: getWorkers(state)
});

function componentDidMount() {
  this.props.fetchWorkers();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount }),
  withRouter,
  mapProps(({ editWorker, history, ...props }) => ({
    editWorker: id => {
      editWorker(id);
      history.push("/workers/edit");
    },
    ...props
  }))
)(Workers);

import { connect } from "react-redux";
import { getWorkers } from "../../redux/selectors/workers.selectors";
import { Creators } from "../../redux/actions/workers.actions";
import { compose, lifecycle } from "recompose";
import Workers from "./Workers";

const mapDispatchToProps = {
  fetchWorkers: Creators.get,
  deleteWorker: Creators.drop,
  editWorker: Creators.getEdit
};

const mapStateToProps = state => ({
  workers: getWorkers(state)
});

function componentDidMount() {
  this.props.fetchWorkers();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount })
)(Workers);

import { connect } from "react-redux";
import { getWorkers } from "../../redux/selectors/workers.selectors";
import { Creators } from "../../redux/actions/workers.actions";
import { compose, lifecycle } from "recompose";
import Test from "./Test";

const mapDispatchToProps = {
  fetchWorkers: Creators.get,
  createWorker: Creators.set,
  deleteWorker: Creators.drop
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
)(Test);

import { connect } from "react-redux";
import { Creators } from "redux/actions/advances.actions";
import { Creators as workersActions } from "redux/actions/workers.actions";
import { getAdvance } from "redux/selectors/advances.selectors";
import { getWorkers } from "redux/selectors/workers.selectors";
import { Form } from "antd";
import { compose, withProps, lifecycle } from "recompose";
import CreateAdvance from "./CreateAdvance";

const mapStateToProps = state => ({
  editData: getAdvance(state),
  workers: getWorkers(state)
});

const mapDispatchToProps = {
  getWorkers: workersActions.get,
  addAdvance: Creators.set,
  updateAdvance: Creators.update,
  reset: Creators.reset
};

function componentDidMount() {
  this.props.getWorkers();
}
function componentWillUnmount() {
  this.props.reset();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create({ name: "advanceForm" }),
  withProps(({ form, addAdvance, updateAdvance, history, editData }) => ({
    handleSubmit: e => {
      e.preventDefault();
      editData
        ? updateAdvance(form.getFieldsValue())
        : addAdvance(form.getFieldsValue());
      history.push("/advances");
    }
  })),
  lifecycle({ componentDidMount, componentWillUnmount })
)(CreateAdvance);

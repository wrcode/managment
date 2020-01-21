import { connect } from "react-redux";
import { Creators } from "redux/actions/workers.actions";
import { getWorker } from "redux/selectors/workers.selectors";
import { Form } from "antd";
import { compose, withProps, lifecycle } from "recompose";
import CreateWorker from "./CreateWorker";

const mapStateToProps = state => ({
  editData: getWorker(state)
});

const mapDispatchToProps = {
  addWorker: Creators.set,
  updateWorker: Creators.update,
  reset: Creators.reset
};

function componentWillUnmount() {
  this.props.reset();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create({ name: "workerForm" }),
  withProps(({ form, addWorker, updateWorker, history, editData }) => ({
    handleSubmit: e => {
      e.preventDefault();
      editData
        ? updateWorker(form.getFieldsValue())
        : addWorker(form.getFieldsValue());
      history.push("/workers");
    }
  })),
  lifecycle({ componentWillUnmount })
)(CreateWorker);

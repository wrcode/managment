import { connect } from "react-redux";
import { Creators } from "redux/actions/processes.actions";
import { Creators as workersActions } from "redux/actions/workers.actions";
import { getProcess } from "redux/selectors/processes.selectors";
import { getWorkers } from "redux/selectors/workers.selectors";
import { Form } from "antd";
import { compose, withProps, lifecycle } from "recompose";
import CreateProcess from "./CreateProcess";

const mapStateToProps = state => ({
  editData: getProcess(state),
  workers: getWorkers(state)
});

const mapDispatchToProps = {
  getWorkers: workersActions.get,
  addProcess: Creators.set,
  updateProcess: Creators.update,
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
  Form.create({ name: "processForm" }),
  withProps(({ form, addProcess, updateProcess, history, editData }) => ({
    handleSubmit: e => {
      e.preventDefault();
      editData
        ? updateProcess(form.getFieldsValue())
        : addProcess(form.getFieldsValue());
      history.push("/processes");
    }
  })),
  lifecycle({ componentDidMount, componentWillUnmount })
)(CreateProcess);

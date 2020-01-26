import { connect } from "react-redux";
import { Creators as PaymentActions } from "redux/actions/payments.actions";
import { Creators as WorkersActions } from "redux/actions/workers.actions";
import { Creators as AdvancesActions } from "redux/actions/advances.actions";
import { getPayment } from "redux/selectors/payments.selectors";
import { getWorkers } from "redux/selectors/workers.selectors";
import { getAdvances } from "redux/selectors/advances.selectors";
import { getWorkerById, getAdvancesAmount } from "helpers";
import { Form } from "antd";
import { prop } from "ramda";
import { compose, withProps, lifecycle } from "recompose";
import moment from "moment";
import CreatePayment from "./CreatePayment";

const mapStateToProps = state => ({
  editData: getPayment(state),
  workers: getWorkers(state),
  advances: getAdvances(state)
});

const mapDispatchToProps = {
  fetchWorkers: WorkersActions.get,
  fetchAdvances: AdvancesActions.get,
  addPayment: PaymentActions.set,
  updatePayment: PaymentActions.update,
  reset: PaymentActions.reset
};

function componentDidMount() {
  this.props.fetchWorkers();
}

function componentDidUpdate({ workerID: prevID }) {
  const { workerID, fetchAdvances } = this.props;

  prevID !== workerID && workerID && fetchAdvances({ worker: workerID });
}

function componentWillUnmount() {
  this.props.reset();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create({ name: "paymentForm" }),
  withProps(
    ({
      form,
      addPayment,
      updatePayment,
      history,
      editData,
      workers,
      advances
    }) => ({
      workerSalary: prop("salary")(
        getWorkerById(workers, form.getFieldValue("worker"))
      ),
      workerID: prop("id")(
        getWorkerById(workers, form.getFieldValue("worker"))
      ),
      worker: getWorkerById(workers, form.getFieldValue("worker")) || {
        salary: 0
      },
      advancesAmount: getAdvancesAmount(
        advances,
        moment(form.getFieldValue("month"))
      ),

      handleSubmit: e => {
        e.preventDefault();
        editData
          ? updatePayment(form.getFieldsValue())
          : addPayment(form.getFieldsValue());
        history.push("/payments");
      }
    })
  ),
  lifecycle({ componentDidMount, componentDidUpdate, componentWillUnmount })
)(CreatePayment);

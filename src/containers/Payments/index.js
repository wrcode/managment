import { connect } from "react-redux";
import { getPayments } from "redux/selectors/payments.selectors";
import { getWorkers } from "redux/selectors/workers.selectors";
import { Creators as paymentsActions } from "redux/actions/payments.actions";
import { Creators as workersActions } from "redux/actions/workers.actions";
import { compose, lifecycle, mapProps } from "recompose";
import { withRouter } from "react-router-dom";
import Payments from "./Payments";

const mapDispatchToProps = {
  fetchWorkers: workersActions.get,
  fetchPayments: paymentsActions.get,
  deletePayment: paymentsActions.drop,
  editPayment: paymentsActions.edit
};

const mapStateToProps = state => ({
  payments: getPayments(state),
  workers: getWorkers(state)
});

function componentDidMount() {
  this.props.fetchPayments();
  this.props.fetchWorkers();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount }),
  withRouter,
  mapProps(({ editPayment, history, ...props }) => ({
    editPayment: id => {
      editPayment(id);
      history.push("/payment/edit");
    },
    ...props
  }))
)(Payments);

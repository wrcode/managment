import { connect } from "react-redux";
import { getAdvances } from "redux/selectors/advances.selectors";
import { getWorkers } from "redux/selectors/workers.selectors";
import { Creators as WorkersActions } from "redux/actions/workers.actions";
import { Creators as AdvancesActions } from "redux/actions/advances.actions";
import { Form } from "antd";
import { compose, lifecycle, mapProps } from "recompose";
import { withRouter } from "react-router-dom";
import Advances from "./Advances";

const mapDispatchToProps = {
  fetchWorkers: WorkersActions.get,
  fetchAdvances: AdvancesActions.get,
  deleteAdvance: AdvancesActions.drop,
  editAdvance: AdvancesActions.edit
};

const mapStateToProps = state => ({
  advances: getAdvances(state),
  workers: getWorkers(state)
});

function componentDidUpdate() {}

function componentDidMount() {
  this.props.fetchWorkers();
  this.props.fetchAdvances();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount, componentDidUpdate }),
  withRouter,
  Form.create({ name: "advancesForm" }),
  mapProps(({ editAdvance, form, history, ...props }) => ({
    editAdvance: id => {
      editAdvance(id);
      history.push("/advance/edit");
    },
    selectedWorker: form.getFieldValue("worker"),
    selectedMonth: form.getFieldValue("month"),
    form,
    ...props
  }))
)(Advances);

import { connect } from "react-redux";
import { getDocuments } from "redux/selectors/documents.selectors";
import { Creators } from "redux/actions/documents.actions";
import { compose, lifecycle, mapProps } from "recompose";
import { withRouter } from "react-router-dom";
import { Form } from "antd";
import Documents from "./Documents";

const mapDispatchToProps = {
  fetchDocuments: Creators.get,
  deleteDocument: Creators.drop,
  editDocument: Creators.edit
};

const mapStateToProps = state => ({
  documents: getDocuments(state)
});

function componentDidMount() {
  this.props.fetchDocuments();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount }),
  withRouter,
  Form.create({ name: "documentsForm" }),
  mapProps(({ form, editDocument, history, fetchDocuments, ...props }) => ({
    editDocument: id => {
      editDocument(id);
      history.push("/document/edit");
    },
    searchDocuments: e => {
      e.preventDefault();
      fetchDocuments(form.getFieldsValue());
    },
    form,
    fetchDocuments,
    ...props
  }))
)(Documents);

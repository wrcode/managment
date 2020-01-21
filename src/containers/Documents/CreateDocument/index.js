import { connect } from "react-redux";
import { Creators } from "redux/actions/documents.actions";
import {
  getDocument,
  getDocumentImage,
  getDocumentID
} from "redux/selectors/documents.selectors";
import { Form } from "antd";
import { compose, withProps, lifecycle } from "recompose";
import CreateDocument from "./CreateDocument";

const mapStateToProps = state => ({
  editData: getDocument(state),
  id: getDocumentID(state),
  image: getDocumentImage(state)
});

const mapDispatchToProps = {
  addDocument: Creators.set,
  addImage: Creators.addImage,
  updateDocument: Creators.update,
  reset: Creators.reset
};

function componentWillUnmount() {
  this.props.reset();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create({ name: "documentForm" }),
  withProps(({ form, addDocument, updateDocument, history, id, editData }) => ({
    handleSubmit: e => {
      e.preventDefault();
      id
        ? updateDocument(form.getFieldsValue())
        : addDocument(form.getFieldsValue());
      history.push("/documents");
    },
    editData: id ? editData : null
  })),
  lifecycle({ componentWillUnmount })
)(CreateDocument);

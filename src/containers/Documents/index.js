import { connect } from "react-redux";
import { getDocuments } from "redux/selectors/documents.selectors";
import { Creators } from "redux/actions/documents.actions";
import { compose, lifecycle, mapProps } from "recompose";
import { withRouter } from "react-router-dom";
import Documents from "./Documents";

const mapDispatchToProps = {
  fetchDocument: Creators.get,
  deleteDocument: Creators.drop,
  editDocument: Creators.edit
};

const mapStateToProps = state => ({
  documents: getDocuments(state)
});

function componentDidMount() {
  this.props.fetchDocument();
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount }),
  withRouter,
  mapProps(({ editDocument, history, ...props }) => ({
    editDocument: id => {
      editDocument(id);
      history.push("/document/edit");
    },
    ...props
  }))
)(Documents);

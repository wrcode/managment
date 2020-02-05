import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Creators as transactionsActions } from "redux/actions/transactions.actions";
import { useSelector, useDispatch } from "react-redux";
import { PageHeader, Button, Table, Divider } from "antd";
import { getTransactions } from "redux/selectors/transactions.selectors";
import { Link } from "react-router-dom";

const { Column } = Table;

const Transactions = ({ history }) => {
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactions);

  useEffect(() => {
    dispatch(transactionsActions.get());
  });

  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Transactions"
        extra={[
          <Button>
            <Link to="/transaction/create">Add new transaction</Link>
          </Button>
        ]}
      ></PageHeader>

      <Table style={{ padding: "0 25px" }} dataSource={transactions}>
        <Column title="Name" dataIndex="name" key="name" />

        <Column
          title="Action"
          key="action"
          render={(t, { id }) => (
            <>
              <Button
                type="primary"
                onClick={() => {
                  dispatch(transactionsActions.edit({ id }));
                  history.push("/worker/edit");
                }}
                ghost
              >
                Edit
              </Button>
              <Divider type="vertical" />
              <Button
                onClick={() => dispatch(transactionsActions.drop({ id }))}
                type="danger"
                ghost
              >
                Delete
              </Button>
            </>
          )}
        />
      </Table>
    </>
  );
};

export default withRouter(Transactions);

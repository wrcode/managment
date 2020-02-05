import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Creators as workersActions } from "redux/actions/workers.actions";
import { Creators as advancesActions } from "redux/actions/advances.actions";
import { useSelector, useDispatch } from "react-redux";
import { PageHeader, Button, Table, Divider } from "antd";
import { getWorkers } from "redux/selectors/workers.selectors";
import { Link } from "react-router-dom";
import moment from "moment";

const { Column } = Table;

const Workers = ({ history }) => {
  const d = useDispatch();
  const workers = useSelector(getWorkers);

  useEffect(() => {
    d(workersActions.get());
    d(advancesActions.get());
  }, []);

  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Workers"
        extra={[
          <Button>
            <Link to="/worker/create">Add new worker</Link>
          </Button>
        ]}
      ></PageHeader>

      <Table style={{ padding: "0 25px" }} dataSource={workers}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Surname" dataIndex="surname" key="surname" />
        <Column title="Position" dataIndex="position" key="position" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column
          title="Age"
          dataIndex="age"
          key="age"
          sorter={(a, b) => a.age - b.age}
        />
        <Column title="Address" dataIndex="address" key="address" />

        <Column
          title="Salary (hour)"
          key="salary"
          sorter={(a, b) => a.salary - b.salary}
          render={(t, { salary }) => <span>{salary} ZŁ</span>}
        />
        <Column
          title="Agreement"
          key="agreement"
          sorter={(a, b) => moment(a.agreement) - moment(b.agreement)}
          render={(t, { agreement }) => (
            <span>{moment(agreement).format("MMMM Do YYYY")}</span>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(t, { id }) => (
            <>
              <Button
                type="primary"
                onClick={() => {
                  d(workersActions.edit({ id }));
                  history.push("/worker/edit");
                }}
                ghost
              >
                Edit
              </Button>
              <Divider type="vertical" />
              <Button
                onClick={() => d(workersActions.drop({ id }))}
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

export default withRouter(Workers);

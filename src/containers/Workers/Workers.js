import React from "react";
import { PageHeader, Button, Table, Divider } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

const { Column } = Table;

const Workers = ({ workers, deleteWorker, editWorker }) => (
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
            <Button type="primary" onClick={() => editWorker({ id })} ghost>
              Edit
            </Button>
            <Divider type="vertical" />
            <Button onClick={() => deleteWorker({ id })} type="danger" ghost>
              Delete
            </Button>
          </>
        )}
      />
    </Table>
  </>
);

export default Workers;

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
          <Link to="/workers/create">Add new worker</Link>
        </Button>
      ]}
    ></PageHeader>

    <Table dataSource={workers}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Surname" dataIndex="surname" key="surname" />
      <Column title="Position" dataIndex="position" key="position" />
      <Column title="Phone" dataIndex="phone" key="phone" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />

      <Column
        title="Salary (hour)"
        key="salary"
        render={(t, { salary }) => <span>{salary} ZŁ</span>}
      />
      <Column
        title="Agreement"
        key="agreement"
        render={(t, { agreement }) => (
          <span>{moment(agreement).format("MMMM Do YYYY")}</span>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(t, { id }) => (
          <span>
            <a onClick={() => editWorker({ id })}>Edit</a>
            <Divider type="vertical" />
            <a onClick={() => deleteWorker({ id })}>Delete</a>
          </span>
        )}
      />
    </Table>
  </>
);

export default Workers;

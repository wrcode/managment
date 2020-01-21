import React from "react";
import { PageHeader, Button, Table, Divider } from "antd";
import { Link } from "react-router-dom";
import { getWorkerNameByID } from "Helpers";
import moment from "moment";

const { Column } = Table;

const Advances = ({ advances, workers, editAdvance, deleteAdvance }) => (
  <>
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Advances"
      extra={[
        <Button>
          <Link to="/advance/create">Add new advance</Link>
        </Button>
      ]}
    />
    <Table style={{ padding: "0 25px" }} dataSource={advances}>
      <Column
        title="Date"
        key="date"
        sorter={(a, b) => moment(a.date) - moment(b.date)}
        render={(t, { date }) => (
          <span>{moment(date).format("MMMM Do YYYY")}</span>
        )}
      />
      <Column
        title="Worker"
        key="worker"
        render={(t, { worker }) => getWorkerNameByID(worker, workers)}
      />
      <Column
        title="Month"
        key="month"
        sorter={(a, b) => moment(a.month) - moment(b.month)}
        render={(t, { month }) => (
          <span>{moment(month).format("MMMM YYYY")}</span>
        )}
      />
      <Column
        title="Amount"
        key="amount"
        sorter={(a, b) => a.amount - b.amount}
        render={(t, { amount }) => <span>{amount} ZŁ</span>}
      />

      <Column
        title="Action"
        key="action"
        render={(t, { id }) => (
          <>
            <Button type="primary" onClick={() => editAdvance({ id })} ghost>
              Edit
            </Button>
            <Divider type="vertical" />
            <Button onClick={() => deleteAdvance({ id })} type="danger" ghost>
              Delete
            </Button>
          </>
        )}
      />
    </Table>
  </>
);

export default Advances;

import React from "react";
import { PageHeader, Button, Table, Divider } from "antd";
import { Link } from "react-router-dom";
import { getWorkerNameByID } from "helpers";
import moment from "moment";

const { Column } = Table;

const Payments = ({ payments, deletePayment, editPayment, workers }) => {
  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Payments"
        extra={[
          <Button>
            <Link to="/payment/create">Add new payment</Link>
          </Button>
        ]}
      ></PageHeader>

      <Table style={{ padding: "0 25px" }} dataSource={payments}>
        <Column
          title="Date"
          key="date"
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
          title="Base salary"
          key="salary"
          render={(t, { salary, hours }) => <span> {salary * hours} zł </span>}
        />
        <Column
          title="Month"
          key="month"
          render={(t, { month }) => (
            <span>{moment(month).format("MMMM YYYY")}</span>
          )}
        />
        <Column title="Hours" dataIndex="hours" key="hours" />
        <Column
          title="Advances"
          key="advances"
          render={(t, { advances }) => <span>{advances} ZŁ</span>}
        />
        <Column
          title="Deductions"
          key="deductions"
          render={(t, { deductions }) => <span>{deductions} ZŁ</span>}
        />
        <Column
          title="Total"
          key="total"
          render={(t, { total }) => <span>{total} ZŁ</span>}
        />

        <Column
          title="Action"
          key="action"
          render={(t, { id }) => (
            <>
              <Button type="primary" onClick={() => editPayment({ id })} ghost>
                Edit
              </Button>
              <Divider type="vertical" />
              <Button onClick={() => deletePayment({ id })} type="danger" ghost>
                Delete
              </Button>
            </>
          )}
        />
      </Table>
    </>
  );
};

export default Payments;

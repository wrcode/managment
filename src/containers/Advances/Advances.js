import React from "react";
import {
  PageHeader,
  Button,
  Table,
  Divider,
  Form,
  Select,
  Descriptions,
  DatePicker
} from "antd";
import { Link } from "react-router-dom";
import {
  getWorkerNameByID,
  getWorkersAsOptions,
  getAdvancesAmount,
  getAdvancesCount
} from "helpers";
import moment from "moment";

const { Column } = Table;
const { Option } = Select;
const { MonthPicker } = DatePicker;

const Advances = ({
  advances,
  fetchAdvances,
  workers,
  editAdvance,
  deleteAdvance,
  selectedWorker,
  selectedMonth,
  form
}) => {
  const handleChange = value => {
    fetchAdvances({ worker: value });
  };

  return (
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

      <Form layout="inline" style={{ padding: "14px 24px" }}>
        <Form.Item label="Choose worker">
          {form.getFieldDecorator("worker")(
            <Select onChange={handleChange} style={{ width: 220 }}>
              {getWorkersAsOptions(workers, selectedMonth).map(
                ({ value, label }) => (
                  <Option value={value}>{label}</Option>
                )
              )}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Month">
          {form.getFieldDecorator("month")(
            <MonthPicker disabled={!form.getFieldValue("worker")} />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="ghost"
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
        </Form.Item>
      </Form>
      {selectedWorker && (
        <Descriptions
          title={`Advances ${moment(selectedMonth).format("MMMM YYYY")}`}
          style={{ padding: "14px 24px" }}
        >
          <Descriptions.Item label="Sum of advances">
            {getAdvancesAmount(advances, selectedMonth)} zł
          </Descriptions.Item>
          <Descriptions.Item label="Amount of advances">
            {getAdvancesCount(advances, selectedMonth)}
          </Descriptions.Item>
        </Descriptions>
      )}
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
              <Button
                onClick={() => {
                  form.resetFields();
                  deleteAdvance({ id });
                }}
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

export default Advances;

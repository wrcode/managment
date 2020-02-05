import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  PageHeader,
  Button,
  Table,
  Divider,
  Descriptions,
  DatePicker,
  Form
} from "antd";
import { getProcessesAmount } from "helpers";
import { Link } from "react-router-dom";
import { getWorkerNameByID } from "helpers";
import { getProcesses } from "redux/selectors/processes.selectors";
import { getWorkers } from "redux/selectors/workers.selectors";
import { Creators as WorkersActions } from "redux/actions/workers.actions";
import { Creators as ProcessesActions } from "redux/actions/processes.actions";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import moment from "moment";

const { Column } = Table;
const { MonthPicker } = DatePicker;

const Processes = ({ form, history }) => {
  const d = useDispatch();
  const processes = useSelector(getProcesses);
  const workers = useSelector(getWorkers);
  const selectedMonth = form.getFieldValue("month");
  const { material, fuel, scrap, carbon } = getProcessesAmount(
    processes,
    selectedMonth
  );

  useEffect(() => {
    d(WorkersActions.get());
    d(ProcessesActions.get());
  }, []);

  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Processes"
        extra={[
          <Button>
            <Link to="/process/create">Add new process</Link>
          </Button>
        ]}
      />
      <Form layout="inline" style={{ padding: "14px 24px" }}>
        <Form.Item label="Month">
          {form.getFieldDecorator("month")(<MonthPicker />)}
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
      {selectedMonth && (
        <Descriptions
          title={`Processes ${moment(selectedMonth).format("MMMM YYYY")}`}
          style={{ padding: "14px 24px" }}
        >
          <Descriptions.Item label="Sum of material">
            {material} KG
          </Descriptions.Item>
          <Descriptions.Item label="Sum of fuel">{fuel} L</Descriptions.Item>
          <Descriptions.Item label="Sum of carbon">
            {carbon} KG
          </Descriptions.Item>
          <Descriptions.Item label="Sum of scrap">{scrap} KG</Descriptions.Item>
        </Descriptions>
      )}
      <Table style={{ padding: "0 25px" }} dataSource={processes}>
        <Column title="Number" dataIndex="number" key="number" />
        <Column
          title="Date"
          key="date"
          sorter={(a, b) => moment(a.date) - moment(b.date)}
          render={(t, { date }) => (
            <span>{moment(date).format("MMMM Do YYYY")}</span>
          )}
        />
        <Column
          title="Material"
          key="material"
          sorter={(a, b) => a.material - b.material}
          render={(t, { material }) => <span>{material} KG</span>}
        />
        <Column
          title="Fuel"
          key="fuel"
          sorter={(a, b) => a.fuel - b.fuel}
          render={(t, { fuel }) => <span>{fuel} L</span>}
        />
        <Column
          title="Carbon"
          key="carbon"
          sorter={(a, b) => a.carbon - b.carbon}
          render={(t, { carbon }) => <span>{carbon} KG</span>}
        />
        <Column
          title="Scrap"
          key="scrap"
          sorter={(a, b) => a.scrap - b.scrap}
          render={(t, { scrap }) => <span>{scrap} KG</span>}
        />
        <Column
          title="Overseer"
          key="overseer"
          render={(t, { overseer }) => getWorkerNameByID(overseer, workers)}
        />
        <Column
          title="Time"
          key="time"
          sorter={(a, b) => a.time - b.time}
          render={(t, { time }) => <span>{time} H</span>}
        />
        <Column
          title="Action"
          key="action"
          render={(t, { id }) => (
            <>
              <Button
                type="primary"
                onClick={() => {
                  d(ProcessesActions.edit({ id }));
                  history.push("/process/edit");
                }}
                ghost
              >
                Edit
              </Button>
              <Divider type="vertical" />
              <Button
                onClick={() => d(ProcessesActions.drop({ id }))}
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

export default compose(
  withRouter,
  Form.create({ name: "processesForm" })
)(Processes);

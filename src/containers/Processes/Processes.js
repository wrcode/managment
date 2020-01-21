import React from "react";
import { PageHeader, Button, Table, Divider } from "antd";
import { Link } from "react-router-dom";
import { getWorkerNameByID } from "Helpers";
import moment from "moment";

const { Column } = Table;

const Processes = ({ processes, workers, editProcess, deleteProcess }) => (
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
            <Button type="primary" onClick={() => editProcess({ id })} ghost>
              Edit
            </Button>
            <Divider type="vertical" />
            <Button onClick={() => deleteProcess({ id })} type="danger" ghost>
              Delete
            </Button>
          </>
        )}
      />
    </Table>
  </>
);

export default Processes;

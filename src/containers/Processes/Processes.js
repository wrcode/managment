import React from "react";
import { PageHeader, Button, Table, Divider } from "antd";
import { Link } from "react-router-dom";

const { Column } = Table;

const Processes = ({ processes }) => (
  <>
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Processes"
      extra={[
        <Button>
          <Link to="/processes/create">Add new process</Link>
        </Button>
      ]}
    />
    <Table dataSource={processes}>
      <Column title="Number" dataIndex="number" key="number" />
      <Column title="Date" dataIndex="date" key="date" />
      <Column
        title="Material"
        key="material"
        render={(t, { material }) => <span>{material} KG</span>}
      />
      <Column
        title="Fuel"
        key="fuel"
        render={(t, { fuel }) => <span>{fuel} L</span>}
      />
      <Column
        title="Carbon"
        key="carbon"
        render={(t, { carbon }) => <span>{carbon} KG</span>}
      />
      <Column
        title="Scrap"
        key="scrap"
        render={(t, { scrap }) => <span>{scrap} KG</span>}
      />
      <Column title="Overseer" dataIndex="overseer" key="overseer" />
      <Column
        title="Time"
        key="time"
        render={(t, { time }) => <span>{time} H</span>}
      />
      <Column
        title="Action"
        key="action"
        render={t => (
          <span>
            <a>Edit</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        )}
      />
    </Table>
  </>
);

export default Processes;

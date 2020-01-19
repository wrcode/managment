import React from "react";
import { PageHeader, Button, Table } from "antd";
import { COLUMNS } from "./TableColumns";
import { Link } from "react-router-dom";

const Workers = ({ workers, deleteWorker }) => (
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

    <Table dataSource={workers} columns={COLUMNS} />
  </>
);

export default Workers;

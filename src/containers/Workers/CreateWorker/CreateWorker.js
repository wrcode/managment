import React from "react";
import { PageHeader, Button } from "antd";

const CreateWorker = () => (
  <>
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Create Worker"
      extra={[<Button>Submit</Button>, <Button type="danger">Reset</Button>]}
    ></PageHeader>
  </>
);

export default CreateWorker;

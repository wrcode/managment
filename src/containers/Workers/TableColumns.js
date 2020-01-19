import React from "react";
import { Button } from "antd";
export const COLUMNS = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Surname",
    dataIndex: "surname",
    key: "surname"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position"
  },
  {
    title: "Action",
    key: "action",
    render: row => (
      <div>
        <Button type="primary">Edit</Button>
        <Button type="danger">Delete</Button>
      </div>
    )
  }
];

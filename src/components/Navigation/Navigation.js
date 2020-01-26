import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navigation = () => (
  <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
    <Menu.Item key="1">
      <Link to="/">Dashboard</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/processes">Processes</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/workers">Workers</Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link to="/advances">Advances</Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link to="/documents">Documents</Link>
    </Menu.Item>
    <Menu.Item key="6">
      <Link to="/payments">Payments</Link>
    </Menu.Item>
  </Menu>
);

export default Navigation;

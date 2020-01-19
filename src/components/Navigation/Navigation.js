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
      <Link to="/raports">Raports</Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link to="/workers">Workers</Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link to="/processes">Fuel</Link>
    </Menu.Item>
  </Menu>
);

export default Navigation;

import React, { Component } from "react";
import { Menu } from "antd";

const Navigation = () => (
  <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
    <Menu.Item key="1">Dashboard</Menu.Item>
    <Menu.Item key="2">Processes</Menu.Item>
    <Menu.Item key="3">Raports</Menu.Item>
    <Menu.Item key="4">Workers</Menu.Item>
    <Menu.Item key="5">Fuel</Menu.Item>
  </Menu>
);

export default Navigation;

import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { ROUTES } from "../../Routes";

const Navigation = () => (
  <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
    {ROUTES.filter(({ navigation }) => navigation).map(
      ({ path, label }, index) => (
        <Menu.Item key={index}>
          <Link to={path}>{label}</Link>
        </Menu.Item>
      )
    )}
  </Menu>
);

export default Navigation;

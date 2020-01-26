import React from "react";
import Navigation from "./components/Navigation";
import history from "./history";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { ROUTES } from "./Routes";

const { Header, Content } = Layout;

const App = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Router history={history}>
      <Header>
        <Navigation />
      </Header>
      <Content style={{ padding: "0 50px", background: "#fff" }}>
        <Switch>
          {ROUTES.map(({ path, component }) => (
            <Route exact path={path} component={component} />
          ))}
        </Switch>
      </Content>
    </Router>
  </Layout>
);

export default App;

import React, { Component } from "react";
import Navigation from "./components/Navigation";
import history from "./history";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateWorker from "./containers/Workers/CreateWorker";
import Workers from "./containers/Workers";
import Dashboard from "./containers/Dashboard";

const { Header, Content } = Layout;
class App extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Router history={history}>
          <Header>
            <Navigation />
          </Header>
          <Content style={{ padding: "0 50px", background: "#fff" }}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/workers" component={Workers} />
              <Route exact path="/workers/create" component={CreateWorker} />
            </Switch>
          </Content>
        </Router>
      </Layout>
    );
  }
}

export default App;

import React, { Component } from "react";
import Navigation from "./components/Navigation";
import history from "./history";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CreateWorker from "./containers/Workers/CreateWorker";
import CreateProcess from "./containers/Processes/CreateProcess";
import CreateAdvance from "./containers/Advances/CreateAdvance";
import CreateDocument from "./containers/Documents/CreateDocument";

import Workers from "./containers/Workers";
import Processes from "./containers/Processes";
import Advances from "./containers/Advances";
import Dashboard from "./containers/Dashboard";
import Documents from "./containers/Documents";

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
              <Route exact path="/worker/create" component={CreateWorker} />
              <Route exact path="/worker/edit" component={CreateWorker} />

              <Route exact path="/processes" component={Processes} />
              <Route exact path="/process/create" component={CreateProcess} />
              <Route exact path="/process/edit" component={CreateProcess} />

              <Route exact path="/advances" component={Advances} />
              <Route exact path="/advance/create" component={CreateAdvance} />
              <Route exact path="/advance/edit" component={CreateAdvance} />

              <Route exact path="/documents" component={Documents} />
              <Route exact path="/document/create" component={CreateDocument} />
              <Route exact path="/document/edit" component={CreateDocument} />
            </Switch>
          </Content>
        </Router>
      </Layout>
    );
  }
}

export default App;

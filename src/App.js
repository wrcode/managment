import React, { Component } from "react";
import Navigation from "./components/Navigation";
import { Layout } from "antd";
import "./App.css";
import "antd/dist/antd.css";

const { Header, Content } = Layout;
class App extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <Navigation />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
            Content
          </div>
        </Content>
      </Layout>
    );
  }
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";

import Order from "./order";
import Food from "./food";
import User from "./user";

const { Header, Content, Footer, Sider } = Layout;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = val => {
    setCollapsed(val);
  };

  return (
    <Router>
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={value => onCollapse(value)}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Link to="/admin/user">
                  <Icon type="user" />
                  <span>Người dùng</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/admin/food">
                  <Icon type="apple" />
                  <span>Thức ăn</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/admin/order">
                  <Icon type="file" />
                  <span>Đặt món</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "0 16px", textAlign: "center" }}>
              <Switch>
                <Route exact path={`/admin/user`}>
                  <User />
                </Route>
                <Route exact path={`/admin/food`}>
                  <Food />
                </Route>
                <Route exact path={`/admin/order`}>
                  <Order />
                </Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      </div>
    </Router>
  );
}

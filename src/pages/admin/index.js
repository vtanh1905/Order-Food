import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";

import "./index.css";
import Order from "./order";
import Food from "./food";
import User from "./user";
import Statistic from "./statistic";

const { Header, Content, Footer, Sider } = Layout;

function App({ location }) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = val => {
    setCollapsed(val);
  };

  const NoMatch = ({ location }) => <Redirect to="/admin/user" />;
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
            <Menu
              theme="dark"
              defaultSelectedKeys={[`${location.pathname}`]}
              mode="inline"
            >
              <Menu.Item key="/admin/user">
                <Link to="/admin/user" className="d-flex align-items-center">
                  <Icon type="user" />
                  <span>Người dùng</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/admin/food">
                <Link to="/admin/food" className="d-flex align-items-center">
                  <Icon type="desktop" />
                  <span>Thức ăn</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/admin/order">
                <Link to="/admin/order" className="d-flex align-items-center">
                  <Icon type="file" />
                  <span>Đơn hàng</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/admin/statistic">
                <Link
                  to="/admin/statistic"
                  className="d-flex align-items-center"
                >
                  <Icon type="line-chart" />
                  <span>Thống kê</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <div
                  className="d-flex align-items-center"
                  onClick={() => {
                    window.location.replace("/");
                    localStorage.clear();
                  }}
                >
                  <Icon type="logout" />
                  <span>Đăng xuất</span>
                </div>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Switch>
                <Route exact path={`/admin/user`}>
                  <User />
                </Route>
                <Route path={`/admin/food`}>
                  <Food />
                </Route>
                <Route path={`/admin/order`}>
                  <Order />
                </Route>
                <Route path={`/admin/statistic`}>
                  <Statistic />
                </Route>
                <Route component={NoMatch} />
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              TKGD ©2019-2020 Created by team 22
            </Footer>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default withRouter(App);

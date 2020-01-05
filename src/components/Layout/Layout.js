import React, { Component } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Select, Avatar, Dropdown, Menu, Icon, Layout } from 'antd';

import './Layout.css';
import { NavLink } from 'react-router-dom';

const { Option } = Select;
const { Content } = Layout;

export default class LayoutHeader extends Component {

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  menu = () => {
    return (
      <Menu>
        <Menu.Item key="0">
          <NavLink className="d-flex align-items-center pr-5 btn-outline-primary" to='/profile'>
          <Icon type="profile" style={{marginRight: 8}} /> Profile
          </NavLink>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
        <a className="d-flex align-items-center pr-5 btn-outline-danger" href='/' onClick={() => {localStorage.clear()}}>
          <Icon type="logout" style={{marginRight: 8}} /> Log out
          </a>
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    return (
      <Layout className="layout">
        <Navbar className="shadow" bg="light" expand="lg">
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
              <Select defaultValue="lunch" style={{ width: 150 }} onChange={this.handleChange}>
                <Option value="lunch">Lunch meal</Option>
                <Option value="tea">Tea break</Option>
              </Select>
              <Dropdown overlay={this.menu}>
                <Avatar className="ml-3" size="large" icon="user" />
              </Dropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Content className='fill-content'>
          <div style={{ background: '#fff' }} >{this.props.children}</div>
        </Content>
      </Layout>
    )
  }
}

import React, { Component } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Select, Avatar, Dropdown, Menu, Icon } from 'antd';

const { Option } = Select;

export default class Layout extends Component {

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  menu = () => {
    return (
      <Menu>
        <Menu.Item key="0" className="d-flex align-items-center pr-5 btn-outline-primary">
          <Icon type="profile" /> Profile
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1" className="d-flex align-items-center pr-5 btn-outline-danger">
          <Icon type="logout" /> Log out
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    return (
      <div>
        <header>
          <Navbar className="shadow" bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
                  <a className="ant-dropdown-link">
                    <Avatar className="ml-3" size="large" icon="user" />
                  </a>
                </Dropdown>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </header>
        {this.props.children}
      </div>
    )
  }
}

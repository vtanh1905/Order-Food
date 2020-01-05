import React, { Component } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Select, Avatar, Dropdown, Menu, Icon, Layout, Col, Row, Button, Input, Divider, notification } from 'antd';

import './Layout.css';
import { NavLink, Link } from 'react-router-dom';

const { Option } = Select;
const { Content, Footer } = Layout;

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
        <a className="d-flex align-items-center pr-5 btn-outline-danger" href='/' onClick={() => {localStorage.removeItem('user')}}>
          <Icon type="logout" style={{marginRight: 8}} /> Log out
          </a>
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    return (
      <Layout className="layout">
        <Navbar className="shadow" bg="dark" expand="lg" style={{ zIndex: 3 }}>
          <Navbar.Brand href="/">
            <img
              src="https://image.flaticon.com/icons/png/512/2362/2362817.png"
              alt="logo.jpg"
              border="0"
              style={{ width: `5%`, height: `5%` }}
              // style={{position: `absolute`,
              //   top: `10px`,
              //   left: `10px`
            // }}
            /> Lunch App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
              <Select defaultValue="lunch" style={{ width: 150 }} onChange={this.handleChange}>
                <Option value="lunch">Lunch meal</Option>
              </Select>
              <Dropdown overlay={this.menu}>
                <Avatar className="ml-3" size="large" icon="user" src={JSON.parse(localStorage.getItem('user')).url.thumbUrl} />
              </Dropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Content className='fill-content'>
          <div style={{ background: '#fff' }} >{this.props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center', padding: 'unset', zIndex: 999 }}>
          <div style={{ background: '#585656', height: 430, color: 'white', padding: 80 }}>
            <Row>
              <Col span={6} style={{ textAlign: 'left' }}>
                <p style={{ fontSize: 30, color: 'white' }}>LUCH APP</p>
                <div style={{ marginBottom: 20 }}>
                  <Icon style={{ fontSize: '25px', marginRight: 20 }} type="facebook" />
                  <Icon style={{ fontSize: '25px', marginRight: 20 }} type="google" />
                  <Icon style={{ fontSize: '25px', marginRight: 20 }} type="youtube" />
                  <Icon style={{ fontSize: '25px', marginRight: 20 }} type="twitter" />
                </div>
                <p style={{ fontSize: 25, color: 'orange' }}>Liên lạc</p>
                <div>
                  <Icon type="phone" />
                  <p style={{ fontSize: 20, color: 'white', marginLeft: 10, display: 'inline' }}>+84 962 074 802</p>
                </div>
                <div>
                  <Icon type="mail" />
                  <p style={{ fontSize: 20, color: 'white', marginLeft: 10, display: 'inline' }}>admin@lunchapp.com</p>
                </div>
              </Col>
              <Col span={6} style={{ textAlign: 'left' }}>
                <p style={{ fontSize: 25, color: 'orange' }}>Thông tin</p>
                <Link style={{ fontSize: 20, color: 'white' }} to="/about"> <p>Về chúng tôi</p> </Link>
                <Link style={{ fontSize: 20, color: 'white' }} to="/about"> <p>FAQ</p> </Link>
                <Link style={{ fontSize: 20, color: 'white' }} to="/about"> <p>Thông tin thêm</p> </Link>
                <Link style={{ fontSize: 20, color: 'white' }} to="/about"> <p>Công nghệ</p> </Link>
              </Col>
              <Col span={6} style={{ textAlign: 'left' }}>
                <p style={{ fontSize: 25, color: 'orange' }}>Đường dây nóng</p>
                <p style={{ fontSize: 20, color: 'white' }}>Dịch vụ</p>
                <p style={{ fontSize: 20, color: 'white' }}>Hỗ trợ</p>
                <p style={{ fontSize: 20, color: 'white' }}>Điều khoản và điều kiện</p>
                <p style={{ fontSize: 20, color: 'white' }}>Các chính sách</p>
              </Col>
              <Col span={6} style={{ textAlign: 'left' }}>
                <div style={{ marginBottom: 20 }}>
                  <Icon style={{ fontSize: '25px', marginRight: 10 }} type="mail" />
                  <p style={{ fontSize: 20, color: 'white', marginLeft: 10, display: 'inline' }}>Nhận các thông tin liên quan đến Luch App</p>
                </div>
                <Form>
                  <Input placeholder="Nhập email của bạn" />
          <Button style={{ background: 'red', color: 'white', marginTop: 20 }}onClick={() => {
            notification['success']({
              message: 'Information',
              description:'Theo dõi thành công',
            });
          }}> Đăng ký</Button>
                </Form>
              </Col>
            </Row>
            <Divider></Divider>
            <Row>
              Lunch App ©2019. All Rights Reveived.
            </Row>
          </div>
        </Footer>
      </Layout>
    )
  }
}

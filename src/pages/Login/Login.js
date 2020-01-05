import React from 'react';
import { withRouter } from 'react-router-dom'

import { Layout, Row, Form, Input, Icon, Button, Checkbox, Divider, notification, Avatar } from 'antd';

import './style.css';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      forgetPass: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    // const { history } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loading: true
        }, () => {
          setTimeout(() => {
            const { username, password } = values;
            let description = '';
            let type = '';
            if (username === 'username' && password === '123456') {
              description = 'Login Successful!';
              localStorage.setItem("user", username)
              // history.push('/');
              window.location.replace('/');
              type = 'success';
            }
            else if (username === 'admin' && password === 'admin') {
              description = 'Login Successful!';
              localStorage.setItem("user", username)
              // history.push('/');
              window.location.replace('/admin');
              type = 'success';
            } else {
              description = 'Login Failed';
              type = 'error';
            }
            notification[type]({
              message: 'Information',
              description,
            });
            this.setState({
              loading: false
            });
          }, 2000);

        });
      }
    });
  }

  handleClose() {
    this.setState({
      forgetPass: false
    })
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.state;

    return (

      <Layout className="login">
        <img className="mimg" src="https://images8.alphacoders.com/488/thumb-1920-488010.jpg" alt="" />

        <div className="container">
          <Avatar size={100} src="https://image.flaticon.com/icons/png/512/2362/2362817.png" shape="square" style={{ marginBottom: 20 }}></Avatar>
          <Row><h1 style={{ color: 'white' }}>Sign In</h1></Row>
          <Divider></Divider>
          <Row style={{ width: '100%' }}>
            <Form onSubmit={this.handleLogin} className="login-form">
              <Form.Item style={{ width: '100%' }}>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item style={{ textAlign: 'left'}}>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox style={{ color: 'white' }}>Remember me</Checkbox>)}

              {/* </Form.Item>
              <a className="login-form-forgot" href="/forgetpassword" style={{ alignSelf: 'left', color: 'orange' }}>
                Forgot your password?
                        </a>
              <Form.Item> */}

                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }} loading={loading}>
                  Log in
                        </Button>
              </Form.Item>
            </Form>
          </Row>
          <Row className="bot">
            <p style={{ color: 'white' }}>© 2019 Luch App. All rights reserved </p>
          </Row>

        </div>

      </Layout>
    );
  }
}

export default withRouter(Form.create({ name: 'login' })(Login));

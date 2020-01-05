import React, { Component } from 'react'
import { Upload, Icon, Modal, Form, Input, Button, notification } from 'antd';

import Layout from '../../components/Layout/Layout'
import './Profile.css'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [],
      user: {},
      loading: false,
    }
  }

  componentWillMount() {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      let fileList = [];
      if(user.url !== '') {
        fileList = [user.url]
      }
      this.setState({ user, fileList });
  }

  componentDidMount() {
    const { user } = this.state;
    this.props.form.setFieldsValue({
      fullname: user.fullname,
      phone: user.phone,
      address: user.address,
    });
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => {
    let newFileList = fileList.splice(0, 1);
    console.log(newFileList);

    this.setState({ fileList: newFileList })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.edit) {
      this.setState({ edit : !this.state.edit });
    }
    else {
      // const { history } = this.props;
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.setState({ loading: true }, () => {
            setTimeout(() => {
              const { fullname, phone, address } = values;
              let { user } = this.state;
              let description = 'Cập nhật thành công';
              let type = 'success';
              
              user.fullname = fullname;
              user.phone = phone;
              user.address = address;
              user.url = this.state.fileList[0];
              notification[type]({
                message: 'Information',
                description,
              });
              
              localStorage.setItem('user', JSON.stringify(user));
              let users = JSON.parse(localStorage.getItem('users'));
              for (let index = 0; index < users.length; index++) {
                let element = users[index];
                if(element.username === user.username) {
                  users[index] = user
                }
              }
              localStorage.setItem('users', JSON.stringify(users));
              this.setState({
                loading: false,
                user,
                edit: false,
              });
            }, 2000);
            
          });
        }
      });
    }
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const { getFieldDecorator } = this.props.form;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <Layout>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <div className="profile">
          <div className="profile-picture">
            <Upload
              className="d-flex justify-content-center"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
              disabled={!this.state.edit}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
          <div className="profile-info">
            <Form.Item label="Họ tên" >
              {getFieldDecorator('fullname', {
                rules: [{ required: true, message: 'Vui lòng nhập họ tên' }],
              })(
                <Input required={true} readOnly={!this.state.edit}
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Họ tên"
                />,
              )}
            </Form.Item>
            <Form.Item label="Số điện thoại" >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Vui lòng nhập số điện thoại' }],
              })(
                <Input readOnly={!this.state.edit}
                  prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="text"
                  placeholder="Số điện thoại"

                />,
              )}
            </Form.Item>
            <Form.Item label="Địa chỉ" >
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Vui lòng nhập địa chỉ' }],
              })(
                <Input readOnly={!this.state.edit}
                  prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="text"
                  placeholder="Địa chỉ"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type={this.state.edit ? "primary" : 'danger'} htmlType="submit" className="login-form-button" style={{ width: '100%' }} loading={this.state.loading}
              >
                {this.state.edit ? 'Cập nhật' : 'Chỉnh sửa'}
            </Button>
            </Form.Item>
          </div>
        </div>
        </Form>
      </Layout>
    )
  }
}

export default Form.create({ name: 'profile' })(Profile);

import React, { Component } from 'react'
import { Upload, Icon, Modal, Form, Input, Select, Button, message, Menu, Layout } from 'antd';

import LayoutDefault from '../../components/Layout/Layout'
import './Profile.css'

const { Option } = Select;
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

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
      page: '1',
      previewVisible: false,
      previewImage: '',
      fileList: [],
    }
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        message.loading('Updating...', 2, () => message.success('Update successful'));
      }
    });
  };

  handleMenuChange = e => {
    console.log('click ', e);
    this.setState({
      page: e.key,
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const { getFieldDecorator } = this.props.form;
    const uploadButton = (
      <div>
        <Icon type="plus" style={{ fontSize: 30 }} />
        <div className="ant-upload-text" style={{ fontSize: 20 }}>Upload</div>
      </div>
    );

    return (
      <Layout>
        <div className="profile">
          <Upload
            className="d-flex justify-content-center"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
        <div>
          <Form.Item id="fullname" label="Họ tên" >
            {getFieldDecorator('fullname', {
              rules: [{ required: true, message: 'Vui lòng nhập họ tên' }],
            })(
              <Input required={true}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Họ tên"
              />,
            )}
          </Form.Item>
          <Form.Item id="phone" label="Số điện thoại" >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Vui lòng nhập số điện thoại' }],
            })(
              <Input
                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text"
                placeholder="Số điện thoại"

              />,
            )}
          </Form.Item>
          <Form.Item id="city" label="Thành phố">
            {getFieldDecorator('city', {
              rules: [{ required: true, message: 'Vui lòng nhập thành phố' }],
            })(
              <Select placeholder="Thành phố" style={{width: 200}}>
                <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                <Option value="Hà Nội">Hà Nội</Option>
                <Option value="Đà Nẵng">Đà Nẵng</Option>
                <Option value="Cần Thờ">Cần Thơ</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item id="address" label="Địa chỉ" >
            {getFieldDecorator('address', {
              rules: [{ required: true, message: 'Vui lòng nhập địa chỉ' }],
            })(
              <Input
                prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text"
                placeholder="Địa chỉ"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Cập nhật
            </Button>
          </Form.Item>
        </div>
      </Layout>
    )
  }
}

export default Form.create({ name: 'profile' })(Profile);


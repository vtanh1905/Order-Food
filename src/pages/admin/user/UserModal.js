import React from 'react';
import { Drawer, Form, Button, Row, Input, Select, notification } from 'antd';

const { Option } = Select;

const UserModal = (props) => {
  const { form, visiableFormUserModal, setvisiableFormUserModal, users, setUsers, userSelected } = props;
  const { getFieldDecorator } = form;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        if (!userSelected) {
          setUsers([...users, { ...values }])
          notification.success({
            message: 'Thêm tài khoản thành công',
          });

        } else {
          const indexUserEdit = users.findIndex((user) => user.username === userSelected.username)
          users[indexUserEdit] = values;
          setUsers(users);
          notification.success({
            message: 'Cập nhật tài khoản thành công',
          });

        }

        setvisiableFormUserModal(false);
        form.resetFields();
      }
    });
  };

  const checkUserExist = (rule, value, callback) => {
    if (!!userSelected) {
      callback();
    }
    const index = users.findIndex((item) => item.username === value);
    if (index !== -1) {
      callback('Tên tài khoản đã tồn tại!');
    } else {
      callback();
    }
  };

  return (
    <div>
      <Drawer
        title={userSelected ? "Sửa tài khoản" : "Thêm tài khoản"}
        width={500}
        onClose={() => {
          setvisiableFormUserModal(false);
          form.resetFields();
        }}
        visible={visiableFormUserModal}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form onSubmit={handleSubmit} layout="vertical" className="login-form">
          <Row gutter={16}>
            <Form.Item label="Tên tài khoản">
              {getFieldDecorator('username', {
                initialValue: userSelected ? userSelected.username : null,
                rules: [{ required: true, message: 'Vui lòng nhập tên tài khoản!' }, { validator: checkUserExist }],
              })(<Input disabled={!!userSelected} />)}
            </Form.Item>
          </Row>
          {!userSelected ? <Row gutter={16}>
            <Form.Item label="Mật khẩu">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Vui lòng nhập mật khẩu!' }],
              })(<Input.Password />)}
            </Form.Item>
          </Row> : null}
          <Row gutter={16}>
            <Form.Item label="Họ tên">
              {getFieldDecorator('fullname', {
                initialValue: userSelected ? userSelected.fullname : null,
                rules: [{ required: true, message: 'Vui lòng nhập họ tên!' }],
              })(<Input />)}
            </Form.Item>
          </Row>
          <Row gutter={16}>
            <Form.Item label="Loại tài khoản">
              {getFieldDecorator('role', {
                initialValue: userSelected ? userSelected.role : null,
                rules: [{ required: true, message: 'Vui lòng chọn loại tài khoản!' }],
              })(
                <Select>
                  <Option value="USER">Người dùng</Option>
                  {/* <Option value="MANAGER">Giáo lý</Option> */}
                  <Option value="ADMIN">Quản trị</Option>
                </Select>,
              )}
            </Form.Item>
          </Row>
          <Row gutter={16}>
            <Form.Item label="Mở/Khóa tài khoản">
              {getFieldDecorator('isLocked', {
                initialValue: userSelected ? userSelected.isLocked : false,
                rules: [{ required: true, message: '' }],
              })(
                <Select>
                  <Option value={false}>Mở</Option>
                  <Option value={true}>Tạm Khóa</Option>
                </Select>,
              )}
            </Form.Item>
          </Row>
        </Form>
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '10px 16px',
            background: '#fff',
            textAlign: 'right',
          }}
        >
          <Button onClick={() => { setvisiableFormUserModal(false); form.resetFields(); }} style={{ marginRight: 8 }}>
            Hủy
          </Button>
          <Button onClick={handleSubmit} type="primary">
            Xác nhận
            </Button>
        </div>
      </Drawer>
    </div >
  );
};

const FormUserModal = Form.create()(UserModal);

export default FormUserModal;

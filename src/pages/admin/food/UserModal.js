import React, { useState } from "react";
import { Drawer, Form, Button, Row, Input, Select } from "antd";
import Image from "./Image";
import EditableTagGroup from "./EditableTagGroup";
const { Option } = Select;

const UserModal = props => {
  const [tags, setTags] = useState([]);
  const [imgUrl, setImgUrl] = useState(null);

  const {
    form,
    visiableFormUserModal,
    setvisiableFormUserModal,
    userSelected
  } = props;
  const { getFieldDecorator } = form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      const newObject = {
        id: users[users.length - 1].id + 1,
        key: users[users.length - 1].id + 1,
        src: imgUrl,
        name: values.name,
        type: values.type,
        cost: values.cost,
        description: values.description,
        options: tags
      };
      console.log(newObject, users);
      if (!err) {
        // console.log('Received values of form: ', values);
        console.log(!userSelected, imgUrl);
        if (!userSelected) {
          setUsers([...users, { ...newObject }]);
          notification.success({
            message: "Thêm món ăn thành công"
          });
        } else {
          const indexUserEdit = users.findIndex(
            user => user.id === userSelected.id
          );
          users[indexUserEdit] = newObject;
          setUsers(users);
          notification.success({
            message: "Cập nhật món ăn thành công"
          });
        }
      }

      setvisiableFormUserModal(false);
      //   form.resetFields();
      // }
    });
  };

  const handleTag = val => {
    setTags(val);
  };

  const handleImage = val => {
    setImgUrl(val);
  };

  return (
    <div>
      <Drawer
        title="Thêm món ăn"
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
            {props.isLoading && (
              <Image
                handle={val => handleImage(val)}
                userSelected={userSelected}
                imageUrl={userSelected ? userSelected.src : null}
              />
            )}
          </Row>
          <Row gutter={16}>
            <Form.Item label="Tên món ăn">
              {getFieldDecorator("name", {
                initialValue: userSelected ? userSelected.name : null,
                rules: [
                  { required: true, message: "Vui lòng nhập tên món ăn!" }
                ]
              })(<Input />)}
            </Form.Item>
          </Row>
          <Row gutter={16}>
            <Form.Item label="Món thêm">
              {props.isLoading && (
                <EditableTagGroup
                  handle={val => handleTag(val)}
                  arr={userSelected ? userSelected.options : []}
                />
              )}
            </Form.Item>
          </Row>
          <Row gutter={16}>
            <Form.Item label="Loại món ăn">
              {getFieldDecorator("type", {
                initialValue: userSelected ? userSelected.type : null,
                rules: [
                  { required: true, message: "Vui lòng chọn loại món ăn!" }
                ]
              })(
                <Select>
                  <Option value="MAIN">Món chính</Option>
                  <Option value="DESSERT">Món phụ</Option>
                </Select>
              )}
            </Form.Item>
          </Row>
          <Row gutter={16}>
            <Form.Item label="Số tiền">
              {getFieldDecorator("cost", {
                initialValue: userSelected ? userSelected.cost : null,
                rules: [
                  { required: true, message: "Vui lòng nhập tên món ăn!" }
                ]
              })(<Input />)}
            </Form.Item>
          </Row>
          <Row gutter={16}>
            <Form.Item label="Mô tả">
              {getFieldDecorator("description", {
                initialValue: userSelected ? userSelected.description : null,
                rules: [
                  { required: true, message: "Vui lòng nhập tên món ăn!" }
                ]
              })(<Input />)}
            </Form.Item>
          </Row>
        </Form>
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "100%",
            borderTop: "1px solid #e9e9e9",
            padding: "10px 16px",
            background: "#fff",
            textAlign: "right"
          }}
        >
          <Button
            onClick={() => {
              setvisiableFormUserModal(false);
              form.resetFields();
            }}
            style={{ marginRight: 8 }}
          >
            Hủy
          </Button>
          <Button onClick={handleSubmit} type="primary">
            Xác nhận
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

const FormUserModal = Form.create()(UserModal);

export default FormUserModal;

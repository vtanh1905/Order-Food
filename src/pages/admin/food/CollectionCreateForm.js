import React from "react";
import { Modal, Form, Input } from "antd";
import "antd/dist/antd.css";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  class extends React.Component {
    anyValidation = (rule, value, callback) => {
      // const { form } = this.props;
      if (value < 5) {
        callback("Input exceed five characters limit");
      } else if (value > 20) {
        callback("Input exceed twenty characters limit");
      } else {
        callback();
      }
    };
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new food"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name food">
              {getFieldDecorator("meal", {
                rules: [
                  {
                    required: true,
                    message: "Please input the meal!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Count">
              {getFieldDecorator("number", {
                rules: [
                  {
                    required: true,
                    message: "Please input the number!"
                  },
                  {
                    pattern: /^(?:[1-9]\d*|\d)$/,
                    message: "Input must be a number"
                  },
                  { validator: this.anyValidation }
                ]
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export default CollectionCreateForm;

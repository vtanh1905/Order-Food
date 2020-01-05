import React from 'react';
import { Form, Input, Rate, notification, Modal } from 'antd';
import { useHistory } from 'react-router-dom'

const { TextArea } = Input;

function ModalFeedBack(props) {
  const { form, visableModal, setvisableModal } = props;
  const { getFieldDecorator } = form;
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <Modal
      visible={visableModal}
      title="Đánh giá"
      // footer={() => <></>}
      onOk={() => {
        notification.success({ message: 'Đánh giá thành công!' })
        history.push('/');
      }}
      onCancel={() => setvisableModal(false)}
    >
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item label="Mức độ hài lòng">
          {getFieldDecorator('rate', {
            initialValue: 3,
          })(<Rate />)}
        </Form.Item>
        <Form.Item label="Bình luận">
          {getFieldDecorator('content', {
          })(
            <TextArea rows={4} />,
          )}
        </Form.Item>
        {/* <Button type="primary" htmlType="submit" className="login-form-button">
          Xác nhận
      </Button> */}
      </Form>
    </Modal>
  );
}

const WrapperFormFinish = Form.create({ name: 'FormFinish' })(ModalFeedBack);

export default WrapperFormFinish;

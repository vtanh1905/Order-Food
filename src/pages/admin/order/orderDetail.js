import React from 'react'
import { Modal } from 'antd';

function orderDetail(props) {
  const { visableModal, setvisableModal } = props;
  return (
    <div>
      <Modal
        title="Chi tiết đơn hàng"
        visible={visableModal}
        footer={() => <></>}
        onCancel={() => setvisableModal(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default orderDetail

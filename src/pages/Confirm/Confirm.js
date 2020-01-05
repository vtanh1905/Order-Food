import React, { useState } from 'react'
import { Row, Col, Button } from 'antd'

import ModalFeedBack from './ModalFeedBack'
import LayoutHeader from '../../components/Layout/Layout';
import './style.css';


function Confirm() {
  const [visableModal, setvisableModal] = useState(false);
  return (
    <LayoutHeader >
      <div className="confirm-page" style={{ textAlign: 'center', height: 'calc(100vh - 120px)', padding: 20 }}>
        <div>
          <h3 style={{ marginBottom: 20 }}>Các món bạn đã ăn lần trước</h3>
          <Row>
            <Col span={6}></Col>
            <Col span={6}>
              <div className="card" style={{ width: '18rem', margin: '0 auto' }}>
                <img className="card-img-top" alt='...' height='150' src="https://images.foody.vn/res/g95/946021/prof/s576x330/foody-upload-api-foody-mobile-bun-hh-190806141635.jpg" />
                <div className="card-body">
                  <p className="card-text">Bún Bò Huế</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="card" style={{ width: '18rem', margin: '0 auto' }}>
                <img className="card-img-top" alt='...' height='150' src="https://blog.beemart.vn/wp-content/uploads/2018/04/cach-lam-rau-cau-dua-10.jpg" />
                <div className="card-body">
                  <p className="card-text">Rau cau dừa</p>
                </div>
              </div>
            </Col>
            <Col span={6}></Col>
          </Row>
          <div>
            <Button type="primary" style={{ marginTop: 20 }} onClick={() => setvisableModal(true)}>Xác nhận</Button>
          </div>
        </div>
      </div>

      <ModalFeedBack visableModal={visableModal} setvisableModal={setvisableModal} />
    </LayoutHeader >
  )
}

export default Confirm

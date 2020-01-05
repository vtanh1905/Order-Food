import React, { useState } from 'react'
import { Row, Col, Button, Card } from 'antd'

import ModalFeedBack from './ModalFeedBack'
import LayoutHeader from '../../components/Layout/Layout';
import './style.css';


function Confirm() {
  const [visableModal, setvisableModal] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const myFood = user.myFood;
  console.log(user);
  
  return (
    <LayoutHeader >
      <div className="confirm-page" style={{ textAlign: 'center', height: 'calc(100vh - 120px)', padding: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
          <h3 style={{ marginBottom: 20 }}>Các món bạn đã ăn lần trước</h3>
          <Row style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            {/* <Col span={6}></Col> */}
            {myFood.map((el) => (
              <Col span={6} offset={4}>
                <Card
                      className="shadow"
                      hoverable
                      style={{ marginRight: 40, textOverflow: "ellipsis", width: '100%', height: '100%', color: 'orange' }}
                      cover={<img className="food-image" alt={el.name} src={el.src} style={{ width: '100%', height: 200, border: '1px solid orange' }} />}
                    >
                      {/* <Col span={3}><Icon type="star" /></Col> */}
                      <Col span={24} offset={0}><h5 className="food-name m-0" style={{ color: '#191970' }}>{el.name}</h5></Col>
                    </Card>
              </Col>
            ))}
            {/* {<Col span={6}>
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
            </Col>} */}
            {/* <Col span={6}></Col> */}
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

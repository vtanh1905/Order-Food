import React from 'react'
import LayoutHeader from '../../components/Layout/Layout';
import { Carousel, Row, Divider, Col, Card, Avatar } from 'antd';
import { useHistory } from "react-router-dom";
import './style.css';

function Order() {
  let history = useHistory();

  const handleClickFood = (index) => {
    if (index === 1) {
      history.push('/order');
    }
    else {
      history.push('/confirm');
    }
  }
  return (
    <LayoutHeader style={{ width: '100%', height: '100%', overflow: 'hidden' }} >
      <Carousel autoplay style={{ width: '100%', height: '100%', position: 'absolute', top: 55, left: 0, zIndex: 0 }} >
        <div>
          <img src="https://initiate.alphacoders.com/images/105/stretched-1920-1080-1058544.jpg?9437" alt=""></img>
          {}
        </div>
        <div>
          <img src="https://initiate.alphacoders.com/images/762/stretched-1920-1080-76200.jpg?7637" alt=""></img>
        </div>
        <div>
          <img src="https://initiate.alphacoders.com/images/327/stretched-1920-1080-327640.jpg?2371" alt=""></img>
        </div>
        <div>
          <img src="https://initiate.alphacoders.com/images/117/stretched-1920-1080-117895.jpg?8812" alt=""></img>
        </div>
      </Carousel>
      <div style={{width: '100%', height: '100%', position: 'absolute', top: 55, left: '0%', zIndex: 1, background: 'black', opacity: 0.3 }}></div>
      {/* <div style={{width: '100%', height: '100%', position: 'fixed', top: 55, left: '0%', zIndex: 2, background: 'black', opacity: 0.3 }}></div> */}
      {/* <div style={{width: '60%', height: '70%', position: 'fixed', top: '10%', left: '20%', zIndex: 3 }}> */}
      <div className="homee">
      <div className="container" style={{ zIndex: 2 }}>
          <Row><Avatar size={100} src="https://image.flaticon.com/icons/png/512/2362/2362817.png" shape="square" style={{ marginBottom: 20 }}></Avatar></Row>
          <Row><h1 style={{ color: 'black' }}>Chào mừng bạn đến với Lunch App</h1></Row>
          <Divider></Divider>
          <Row style={{ width: '100%', marginTop: 10, height: '40%' }}>
            <Col span={8} offset={2} style={{ height: '40%' }}>
              <Card
                className="shadow"
                hoverable
                style={{ marginRight: 40, textOverflow: "ellipsis", width: '100%', color: 'orange' }}
                cover={<img className="food-image" alt={'Đặt đồ ăn'} src={'https://image.flaticon.com/icons/svg/1147/1147898.svg'} style={{ width: '100%', padding: '10%' }} />}
                onClick={() => { handleClickFood(1) }}
              >
                <Col span={24} offset={0}><h5 className="food-name m-0" style={{ color: '#191970' }}>{'Đặt đồ ăn'}</h5></Col>
              </Card>
            </Col>
            <Col span={8} offset={4}>
              <Card
                className="shadow"
                hoverable
                style={{ marginRight: 40, textOverflow: "ellipsis", width: '100%', height: '100%', color: 'orange' }}
                cover={<img className="food-image" alt={'Đánh giá'} src={'https://image.flaticon.com/icons/svg/1486/1486434.svg'} style={{ width: '100%', padding: '10%' }} />}
                onClick={() => { handleClickFood(2) }}
              >
                <Col span={24} offset={0}><h5 className="food-name m-0" style={{ color: '#191970' }}>{'Đánh giá'}</h5></Col>
              </Card>
            </Col>
          </Row>
          <Row className='bot' style={{ paddingTop: 50 }}></Row>


        </div>
      </div>

    </LayoutHeader>

  )
}

export default Order

import React, { useState } from 'react';
import { Table, DatePicker } from 'antd';
import moment from 'moment'

import OrderDetail from './orderDetail'

const dataOrder = [
  {
    _id: "ABCDW0",
    user: {
      fullname: "vu.anh2",
      username: 'vu.anh2',
    },
    mainDish: {
      name: 'Phở bò',
      url: 'https://images.foody.vn/res/g95/946021/prof/s576x330/foody-upload-api-foody-mobile-bun-hh-190806141635.jpg',
      description: 'Bún đặc sản của xứ Huế, trong nước dùng có một ít mắm ruốc, góp phần làm nên hương vị rất riêng',
    },
    dessert: {
      name: 'Rau cau dừa',
      url: 'https://blog.beemart.vn/wp-content/uploads/2018/04/cach-lam-rau-cau-dua-10.jpg',
      description: 'Mùa hè đang đến gần, bên cạnh những loại đồ uống như trà sữa, trà hoa quả, sinh tố,… thì thạch rau câu cũng là một món ăn cực HOT mà bạn không thể bỏ qua',
    },
    createAt: moment()
  },
  {
    _id: "ABCDE0",
    user: {
      fullname: "vu.anh",
      username: 'vu.anh',
    },
    mainDish: {
      name: 'Bún Bò Huế',
      url: 'https://images.foody.vn/res/g95/946021/prof/s576x330/foody-upload-api-foody-mobile-bun-hh-190806141635.jpg',
      description: 'Bún đặc sản của xứ Huế, trong nước dùng có một ít mắm ruốc, góp phần làm nên hương vị rất riêng',
    },
    dessert: {
      name: 'Rau cau dừa',
      url: 'https://blog.beemart.vn/wp-content/uploads/2018/04/cach-lam-rau-cau-dua-10.jpg',
      description: 'Mùa hè đang đến gần, bên cạnh những loại đồ uống như trà sữa, trà hoa quả, sinh tố,… thì thạch rau câu cũng là một món ăn cực HOT mà bạn không thể bỏ qua',
    },
    createAt: moment()
  },
  {
    _id: "ABCDE1",
    user: {
      fullname: "vu.anh",
      username: 'vu.anh',
    },
    mainDish: {
      name: 'Bún Bò Huế',
      url: 'https://images.foody.vn/res/g95/946021/prof/s576x330/foody-upload-api-foody-mobile-bun-hh-190806141635.jpg',
      description: 'Bún đặc sản của xứ Huế, trong nước dùng có một ít mắm ruốc, góp phần làm nên hương vị rất riêng',
    },
    dessert: {
      name: 'Rau cau dừa',
      url: 'https://blog.beemart.vn/wp-content/uploads/2018/04/cach-lam-rau-cau-dua-10.jpg',
      description: 'Mùa hè đang đến gần, bên cạnh những loại đồ uống như trà sữa, trà hoa quả, sinh tố,… thì thạch rau câu cũng là một món ăn cực HOT mà bạn không thể bỏ qua',
    },
    createAt: moment().add(-1, 'days')
  },
  {
    _id: "ABZDE2",
    user: {
      fullname: "vu.anh1",
      username: 'vu.anh1',
    },
    mainDish: {
      name: 'Bún Bò Huế',
      url: 'https://images.foody.vn/res/g95/946021/prof/s576x330/foody-upload-api-foody-mobile-bun-hh-190806141635.jpg',
      description: 'Bún đặc sản của xứ Huế, trong nước dùng có một ít mắm ruốc, góp phần làm nên hương vị rất riêng',
    },
    dessert: {
      name: 'Rau cau dừa',
      url: 'https://blog.beemart.vn/wp-content/uploads/2018/04/cach-lam-rau-cau-dua-10.jpg',
      description: 'Mùa hè đang đến gần, bên cạnh những loại đồ uống như trà sữa, trà hoa quả, sinh tố,… thì thạch rau câu cũng là một món ăn cực HOT mà bạn không thể bỏ qua',
    },
    createAt: moment().add(-3, 'days')
  },
  {
    _id: "ABXDE2",
    user: {
      fullname: "vu.anh2",
      username: 'vu.anh2',
    },
    mainDish: {
      name: 'Bún Bò Huế',
      url: 'https://images.foody.vn/res/g95/946021/prof/s576x330/foody-upload-api-foody-mobile-bun-hh-190806141635.jpg',
      description: 'Bún đặc sản của xứ Huế, trong nước dùng có một ít mắm ruốc, góp phần làm nên hương vị rất riêng',
    },
    dessert: {
      name: 'Rau cau dừa',
      url: 'https://blog.beemart.vn/wp-content/uploads/2018/04/cach-lam-rau-cau-dua-10.jpg',
      description: 'Mùa hè đang đến gần, bên cạnh những loại đồ uống như trà sữa, trà hoa quả, sinh tố,… thì thạch rau câu cũng là một món ăn cực HOT mà bạn không thể bỏ qua',
    },
    createAt: moment().add(-2, 'days')
  },
  {
    _id: "ABEDE4",
    user: {
      fullname: "vu.anh1",
      username: 'vu.anh1',
    },
    mainDish: {
      name: 'Bún Bò Huế',
      url: 'https://images.foody.vn/res/g95/946021/prof/s576x330/foody-upload-api-foody-mobile-bun-hh-190806141635.jpg',
      description: 'Bún đặc sản của xứ Huế, trong nước dùng có một ít mắm ruốc, góp phần làm nên hương vị rất riêng',
    },
    dessert: {
      name: 'Rau cau dừa',
      url: 'https://blog.beemart.vn/wp-content/uploads/2018/04/cach-lam-rau-cau-dua-10.jpg',
      description: 'Mùa hè đang đến gần, bên cạnh những loại đồ uống như trà sữa, trà hoa quả, sinh tố,… thì thạch rau câu cũng là một món ăn cực HOT mà bạn không thể bỏ qua',
    },
    createAt: moment().add(-3, 'days')
  },
  {
    _id: "DECDE9",
    user: {
      fullname: "anh.vu",
      username: 'anh.vu',
    },
    mainDish: {
      name: 'Bún Bò Huế',
      url: 'https://images.foody.vn/res/g95/946021/prof/s576x330/foody-upload-api-foody-mobile-bun-hh-190806141635.jpg',
      description: 'Bún đặc sản của xứ Huế, trong nước dùng có một ít mắm ruốc, góp phần làm nên hương vị rất riêng',
    },
    dessert: {
      name: 'Rau cau dừa',
      url: 'https://blog.beemart.vn/wp-content/uploads/2018/04/cach-lam-rau-cau-dua-10.jpg',
      description: 'Mùa hè đang đến gần, bên cạnh những loại đồ uống như trà sữa, trà hoa quả, sinh tố,… thì thạch rau câu cũng là một món ăn cực HOT mà bạn không thể bỏ qua',
    },
    createAt: moment().add(-8, 'days')
  },
  {
    _id: "DEEEE9",
    user: {
      fullname: "anh.vu",
      username: 'anh.vu',
    },
    mainDish: {
      name: 'Bún Bò Huế',
      url: 'https://images.foody.vn/res/g95/946021/prof/s576x330/foody-upload-api-foody-mobile-bun-hh-190806141635.jpg',
      description: 'Bún đặc sản của xứ Huế, trong nước dùng có một ít mắm ruốc, góp phần làm nên hương vị rất riêng',
    },
    dessert: {
      name: 'Rau cau dừa',
      url: 'https://blog.beemart.vn/wp-content/uploads/2018/04/cach-lam-rau-cau-dua-10.jpg',
      description: 'Mùa hè đang đến gần, bên cạnh những loại đồ uống như trà sữa, trà hoa quả, sinh tố,… thì thạch rau câu cũng là một món ăn cực HOT mà bạn không thể bỏ qua',
    },
    createAt: moment().add(-7, 'days')
  },
];

function Index() {
  const [visableModal, setvisableModal] = useState(false);
  const [datePicker, setdatePicker] = useState(moment())
  const order = dataOrder.filter(item => item.createAt.clone().format('YYYY-MM-DD') === datePicker.clone().format('YYYY-MM-DD'))


  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
    },
    {
      title: 'Người dùng',
      dataIndex: 'user.username',
    },
    {
      title: 'Món chính',
      dataIndex: 'mainDish.name',
    },
    {
      title: 'Tráng miệng',
      dataIndex: 'dessert.name',
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'createAt',
      render: (text) => {
        return text.format('DD-MM-YYYY')
      }
    },
    // {
    //   title: 'Tác vụ',
    //   key: 'action',
    //   // fixed: 'right',
    //   width: 200,
    //   render: (item) => (
    //     <div className="d-flex align-items-center">
    //       <Button
    //         className="mr-2 d-flex align-items-center"
    //         type="primary"
    //         size="small"
    //         onClick={() => setvisableModal(true)}
    //       >
    //         <Icon type="eye" />Chi tiết
    //       </Button>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div>
      <h3 style={{ padding: '10px', textAlign: 'center' }}>
        Danh sách đơn hàng
        <DatePicker
          defaultValue={datePicker}
          style={{ float: 'right' }}
          onChange={(value) => setdatePicker(value)}
        />
      </h3>
      <Table
        columns={columns}
        dataSource={order}
        bordered
        rowKey='_id'
        scroll={{ y: 410 }}
      />

      <OrderDetail visableModal={visableModal} setvisableModal={setvisableModal} />
    </div>
  )
}

export default Index

import React, { useState } from "react";
import { Table, Button, Icon, Popconfirm, notification } from 'antd';
import UserModal from './UserModal'

const dataUser = [
  {
    fullname: "Vũ Tuấn Anh",
    username: 'anhvt',
    role: 'ADMIN',
    isLocked: false
  },
  {
    fullname: "Trương Lê Việt Danh",
    username: 'danhtlv',
    role: 'ADMIN',
    isLocked: false
  },
  {
    fullname: "Hồ Ngọc Đỉnh",
    username: 'dinhhn',
    role: 'USER',
    isLocked: false
  },
  {
    fullname: "Phùng Chú Cường",
    username: 'cuong.phung',
    role: 'USER',
    isLocked: false
  }
]

function Index() {
  const [users, setUsers] = useState(dataUser)
  const [visiableFormUserModal, setvisiableFormUserModal] = useState(false);
  const [userSelected, setUserSelected] = useState(null)
  const columns = [
    {
      title: 'Tài khoản',
      dataIndex: 'username',
    },
    {
      title: 'Họ tên',
      dataIndex: 'fullname',
    },
    {
      title: 'Loại tài khoản',
      dataIndex: 'role',
      render: (text) => {
        if (text === 'USER') return 'Người dùng';
        if (text === 'MANAGER') return 'Giáo lý';
        if (text === 'ADMIN') return 'Quản trị';
      },
    },
    {
      title: 'Trạng thái',
      dataIndex: 'isLocked',
      render: (text) => {
        // eslint-disable-next-line curly
        if (text === false) return <div className="d-flex align-items-center">
          <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
          <span className="ml-1">Hoạt động</span>
        </div>;
        // eslint-disable-next-line curly
        if (text === true) return <div className="d-flex align-items-center">
          <Icon type="minus-circle" theme="twoTone" twoToneColor="#f5222d" />
          <span className="ml-1">Tạm khóa</span>
        </div>;
      },
    },
    {
      title: 'Tác vụ',
      key: 'action',
      // fixed: 'right',
      width: 200,
      render: (item) => (
        <div className="d-flex align-items-center">
          <Button className="mr-2 d-flex align-items-center" type="primary" size="small" onClick={() => {
            setUserSelected(item);
            setvisiableFormUserModal(true);
          }}
          >
            <Icon type="edit" />Edit
          </Button>
          <Popconfirm
            title="Bạn có muốn xóa không?"
            onConfirm={() => {
              setUsers(users.filter(user => user.username !== item.username));
              notification.success({
                message: 'Xóa tài khoản thành công',
              });
            }}
            // onCancel={cancel}
            okText="Có"
            cancelText="Không"
          >
            <Button className="d-flex align-items-center" type="danger" size="small">
              <Icon type="delete" />Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h3 style={{ padding: '10px', textAlign: 'center' }}>Danh sách tài khoản <Button type="primary" icon="plus" onClick={() => { setvisiableFormUserModal(true); setUserSelected(null) }} style={{ float: 'right' }} /></h3>
      <Table
        columns={columns}
        dataSource={users}
        bordered
        rowKey='_id'
        scroll={{ y: 410 }}
      />
      <UserModal
        users={users}
        setUsers={setUsers}
        visiableFormUserModal={visiableFormUserModal}
        setvisiableFormUserModal={setvisiableFormUserModal}
        userSelected={userSelected}
      />
    </div>
  );
}

export default Index;

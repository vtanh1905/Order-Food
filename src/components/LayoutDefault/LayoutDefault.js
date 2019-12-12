import React from 'react'
import { Layout, Menu } from 'antd';
import './index.css'

const { Header, Content } = Layout;

function LayoutDefault(props) {
  const { children } = props;
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
          <div style={{ background: '#fff', padding: 24 }} className='fill-content'>{children}</div>
        </Content>
      </Layout>
    </div>
  )
}

export default LayoutDefault

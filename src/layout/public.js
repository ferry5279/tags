import React  from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import { UserOutlined }from '@ant-design/icons';
import './public.less'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default function Public(props){
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['2']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Home">
            <Menu.Item key="1" >
              <Link to="/"> Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/list"> List</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/charts">Echart</Link>
            </Menu.Item>
            <Menu.Item key="4">
              Forms
            </Menu.Item>
            <Menu.Item key="5">
              Pages
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}
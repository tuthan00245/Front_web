import React from 'react'
import { UserOutlined,ShoppingCartOutlined,BellOutlined } from '@ant-design/icons';
import { Avatar,Badge, Space } from 'antd';
import Logo from '../../../assets/images/LOGO.jpg';

import './Navbar.scss'

const count =1;

const Navbar = () => {
  return (
    <>
      <div className="left">
      </div>
      <div className="center">
        <img src={Logo} alt="" className="logo"/>
      </div>
      <div className="right">
        <Space wrap size={16}>
          <div className="item">
            <Badge count={count}>
              <BellOutlined style={{ fontSize: '200%'}}/>
            </Badge>
          </div>
          <div className="item">
            <Badge count={count}>
              <ShoppingCartOutlined style={{ fontSize: '200%'}}/>
            </Badge>
          </div>
          <div className="item">
            <Avatar icon={<UserOutlined />} />
          </div>
          <div className="item"></div>
        </Space>
      </div>
    </>
  )
}

export default Navbar
import React from 'react'
import { HomeOutlined,InboxOutlined,MenuOutlined,TagsOutlined, } from '@ant-design/icons'
import './Menu.scss'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="Menu">
      <div className="items">
        <div className="item">
          <Link to="/">
            <HomeOutlined style={{ fontSize:'200%'}}/>
            <span>HOME</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/products">
            <InboxOutlined style={{ fontSize:'200%'}}/>
            <span>PRODUCTS</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/categories">
            <MenuOutlined style={{ fontSize:'200%'}}/>
            <span>CATEGORIES</span>
          </Link>
        </div>
        <div className="item">
         <Link to="/brands">
            <TagsOutlined style={{ fontSize:'200%'}}/>
            <span>BRANDS</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/helmets">
            <span>HELMETS</span>
          </Link>
        </div>
        <div className="item">
          <Link to = "/jackets">
            <span>JACKETS</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/electronics">
            <span>HOME</span>ELECTRONICS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
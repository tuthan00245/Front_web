import React from 'react'
import { Link } from 'react-router-dom'
import './HomeDeals.scss'
import { Row,Col } from 'antd'
// import { PlusOutlined } from '@ant-design/icons'
import {More} from '../../../layouts/components/Btn';
import Card from '../../../layouts/components/Card/DealCard';


const HomeDeals = () => {
  return (
    <div className="home__deal">
        <div className="box">
            <div className="top">
                <div className="left">
                    <span className="text1">SUPER</span>
                    <span className="text2">DEALS</span>
                </div>
                {/* <div className="right">
                    <Link to="">
                        <More/>
                    </Link>
                </div> */}
            </div>
            <div className="center">
                <Row className="row" gutter={[16, 16]}>
                    <Col span={0.5}/>
                    <Col className="col" span={5} >
                        <Card/>
                    </Col>
                    <Col span={1}/>
                    <Col className="col" span={5} >
                        <Card/>
                    </Col>
                    <Col span={1}/>
                    <Col className="col" span={5} >
                        <Card/>
                    </Col>
                    <Col span={1}/>
                    <Col className="col" span={5} >
                        <Card/>
                    </Col>
                </Row>
            </div>
            <div className="bottom">

            </div>
        </div>
    </div>
  )
}

export default HomeDeals
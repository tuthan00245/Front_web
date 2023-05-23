import React from 'react'
import './HomeDeals.scss'
import { Row,Col } from 'antd'

const HomeDeals = () => {
  return (
    <div className="home__deal">
        <div className="box">
            <div className="title">
                <span className="text1">SUPER</span>
                <span className="text2">DEALS</span>
            </div>
            <Row className="row" gutter={[16, 16]}>
                <Col span={0.5}/>

                <Col className="col" span={5} >
                    <image className="avt"></image>
                    <span >1</span>
                </Col>
                <Col span={1}/>
                <Col className="col" span={5} >
                    <span >1</span>
                </Col>
                <Col span={1}/>
                <Col className="col" span={5} >
                    <span >1</span>
                </Col>
                <Col span={1}/>
                <Col className="col" span={5} >
                    <span >1</span>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default HomeDeals
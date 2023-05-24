import React from 'react'
import { Row,Col } from 'antd'
import { Link } from 'react-router-dom';
import { EllipsisOutlined } from '@ant-design/icons';
import './HomeProducts.scss';
import {Next} from '../../../layouts/components/Btn';
import Card from '../../../layouts/components/Card/DealCard';
const HomeProducts = () => {
  return (
    <div className="home__product">
        <div className="box">
            <div className="top">
                <div className="left">
                    <span className="text1">PRODUCT</span>
                    {/* <span className="text2">DEALS</span> */}
                </div>
                {/* <div className="right">
                    <Link to="">
                        <PlusOutlined style={{ fontSize:'150%' }}/>
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
                <Link to="/products">
                    {/* <EllipsisOutlined style={{ fontSize:'150%' }}/> */}
                    <Next/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeProducts
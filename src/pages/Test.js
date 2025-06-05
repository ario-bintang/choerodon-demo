import React from 'react';
import { Col, Row } from 'choerodon-ui';

function Test() {
  return (
    <>
      <Col className='my-columns'>
        <Row><h1>
          Home Page</h1></Row>
        <Row className='my-container'>
          <Col span={8}>col-12</Col>
          <Col span={8}>col-12</Col>
          <Col span={8}>col-12</Col>
        </Row>
        <Row className='my-container'>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </Col>
    </>
  )
}

export default Test;

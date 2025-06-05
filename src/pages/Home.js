import React from 'react';
import Button from 'choerodon-ui/pro/lib/button/Button';
import { Col, Row } from 'choerodon-ui';

function Home() {
  return (
    <>
      <h1 className='test'>Home Page</h1>
      <Row className='my-container'>
        <Col span={12}>1</Col>
        <Col span={12}>2</Col>
      </Row>
      <Button color='primary'>Choerodon Button</Button>
    </>
  )

}

export default Home;

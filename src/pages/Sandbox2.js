import React from 'react';
import { Col, Row, Card, Icon, Carousel, Collapse } from 'choerodon-ui';

const Panel = Collapse.Panel

function Sandbox() {

    const { Meta } = Card
    return (
        <>
            <Row>
                <Col span={2} style={{justifyContent:'center',alignContent:'center',display:'flex',flexDirection:'col', }}>
                    <div style={{justifySelf:'center', alignSelf:'center', backgroundColor:'#fafafa', borderRadius:'5em', padding:'1em'}}>
                        <Icon type="keyboard_arrow_left" height={24} />
                    </div>
                </Col>
                <Col span={20}>
                    <Card title="1">
                        <p>Testing question on this page</p>
                    </Card>
                </Col>
                <Col span={2}></Col>

            </Row>
        </>
    )
}

export default Sandbox;

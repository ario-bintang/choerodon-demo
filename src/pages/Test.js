import React from 'react';
import { Col, Row, Card, Icon } from 'choerodon-ui';

function Test() {
  const { Meta } = Card
  return (
    <>
      <Col className='my-columns'>
        <Row><h1>
          Home Page</h1></Row>
        <Row className='my-container' gutter={12}>
          <Col span={12} className='my-card'>
            <Card
              bordered
              style={{ backgroundColor: '#E6ffE6', borderRadius: 8, textAlign: 'center' }}
              hoverable
              cover={
                <div style={{ marginTop: '1em' }}>
                  <img
                    src="https://e7.pngegg.com/pngimages/389/412/png-clipart-font-awesome-computer-icons-user-profile-users-group-blind-miscellaneous-blue.png"
                    alt="Water Drop Icon"
                    style={{ height: 32 }}
                  />
                </div>
              }
            >
              <Meta
                title={
                  <div style={{ color: '#002776', fontWeight: 'bold' }}>
                    Mock Users<br />Data
                  </div>
                }
                description={
                  <div style={{ color: '#333', fontSize: 13, lineHeight: 1.6, minHeight: '12em', alignContent: 'center' }}>
                    There will be tables showing Users within the fictional company. Each users will have these data: id, name, code, sex, as well as active status
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={12} className='my-card'>
            <Card
              bordered
              style={{ backgroundColor: '#E6ffE6', borderRadius: 8, textAlign: 'center' }}
              hoverable
              cover={
                <div style={{ marginTop: '1em' }}>
                  <img
                    src="https://static-00.iconduck.com/assets.00/crud-icon-2048x2048-k092n81w.png"
                    alt="Water Drop Icon"
                    style={{ width: 32, height: 32 }}
                  />
                </div>
              }
            >
              <Meta
                title={
                  <div style={{ color: '#002776', fontWeight: 'bold' }}>
                    CRUD<br />(localStorage)
                  </div>
                }
                description={
                  <div style={{ color: '#333', fontSize: 13, lineHeight: 1.6, minHeight: '12em', alignContent: 'center' }}>
                    You can Create, Read, Update, and Delete data which is provided in the localStorage. The data will be seeded there upon initial rendering, which will act as if it is a real server. From there, it can be access just as you would with a real backend service.
                  </div>
                }
              />
            </Card>
          </Col>
        </Row>
        <Row className='my-container' gutter={12}>
          <Col span={12} className='my-card'>
            <Card
              bordered
              style={{ backgroundColor: '#E6ffE6', borderRadius: 8, textAlign: 'center' }}
              hoverable
              cover={
                <div style={{ marginTop: '1em' }}>
                  <img
                    src="https://e7.pngegg.com/pngimages/389/412/png-clipart-font-awesome-computer-icons-user-profile-users-group-blind-miscellaneous-blue.png"
                    alt="Water Drop Icon"
                    style={{ height: 32 }}
                  />
                </div>
              }
            >
              <Meta
                title={
                  <div style={{ color: '#002776', fontWeight: 'bold' }}>
                  Mock Users<br />Data
                  </div>
                }
                description={
                  <div style={{ color: '#333', fontSize: 13, lineHeight: 1.6, minHeight: '12em', alignContent: 'center' }}>
                    There will be tables showing Users within the fictional company. Each users will have these data: id, name, code, sex, as well as active status
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={12} className='my-card'>
            <Card
              bordered
              style={{ backgroundColor: '#E6ffE6', borderRadius: 8, textAlign: 'center' }}
              hoverable
              cover={
                <div style={{ marginTop: '1em' }}>
                  <img
                    src="https://static-00.iconduck.com/assets.00/crud-icon-2048x2048-k092n81w.png"
                    alt="Water Drop Icon"
                    style={{ width: 32, height: 32 }}
                  />
                </div>
              }
            >
              <Meta
                title={
                  <div style={{ color: '#002776', fontWeight: 'bold' }}>
                    CRUD<br />(localStorage)
                  </div>
                }
                description={
                  <div style={{ color: '#333', fontSize: 13, lineHeight: 1.6, minHeight: '12em', alignContent: 'center' }}>
                    You can Create, Read, Update, and Delete data which is provided in the localStorage. The data will be seeded there upon initial rendering, which will act as if it is a real server. From there, it can be access just as you would with a real backend service.
                  </div>
                }
              />
            </Card>
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default Test;

import React from 'react';
import { Typography, DataSet, Form, Col, Row } from 'choerodon-ui/pro';
import { getUsers } from '../helper/userApi';
import { Card } from 'choerodon-ui';
import { useParams } from 'react-router-dom';
const { Text } = Typography;

const UserProfile = () => {
    const users = getUsers();
    const {id} = useParams()
    const user = users.find(u => u.id === parseInt(id,10)) || {}

    const profilePic = user.sex.toLowerCase() === "female" ? '/assets/female_employee.jpg' : '/assets/male_employee.jpg'

    const ds = new DataSet({
        autoCreate: true,
        fields: [
            { name: 'name', label: 'Name', type: 'string' },
            { name: 'code', label: 'Code', type: 'string' },
            { name: 'sex', label: 'Sex', type: 'string' },
            { name: 'active', label: 'Active', type: 'boolean' },
        ],
        data: [user],
    });

    return (
        <>
            <h1>User Profile</h1>
            <Row span={24} >
                <Col span={12} style={{
                    padding:'0 0 0 5em',
                    minHeight: '3rem', alignItems: 'center',
                    justifyContent: 'center', justifyItems: 'center', flexDirection: 'column', display: 'flex'
                }}>
                    <Form dataSet={ds} useColon style={{textAlign:'left'}}>
                        <Text name="name" />
                        <Text name="code" />
                        <Text name="sex" />
                        <Text name="active" />
                    </Form>
                </Col>
                <Col span={12} style={{ minHeight: '5rem' }}>
                    <Card>
                        <img src={profilePic} height={240} />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default UserProfile;

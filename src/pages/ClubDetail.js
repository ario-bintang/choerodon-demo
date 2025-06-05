// src/pages/ClubDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col, Calendar } from 'choerodon-ui';
import MemberTable from '../components/MemberTable';
import { Button, Modal } from 'choerodon-ui/pro';

const ClubDetail = () => {
    const { id } = useParams();
    const [club, setClub] = useState(null);

    useEffect(() => {
        const clubs = JSON.parse(localStorage.getItem('clubs') || '[]');
        const selected = clubs.find((c) => c.id === Number(id));
        setClub(selected);
    }, [id]);

    const openCalendarModal = () => {
        Modal.open({
            title: 'Club Calendar',
            drawer: false,
            style: { width: '80%', height: '80%' },
            children: <Calendar />,
            footer: null,
            closable: true,
            maskClosable: true,
        });
    };

    if (!club) return <p>Loading...</p>;



    return (
        <div style={{ minWidth: '100%' }}>
            <Card
                title={club.name}
                style={{ width: '100%', marginBottom: '1em' }}
                cover={
                    <img
                        alt={club.name}
                        src={club.img}
                        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                    />
                }
            />

            <Row gutter={16}>
                <Col span={8}>
                    <Col>
                        <Card title="Description">{club.description}</Card>
                        <Card title="Book Time"> <Button color='primary' onClick={openCalendarModal}>Open Calendar</Button></Card>
                    </Col>
                </Col>
                <Col span={16}>
                    <Card title="Member Table"><MemberTable memberIds={club.members} /></Card>
                </Col>
            </Row>
        </div>
    );
};

export default ClubDetail;

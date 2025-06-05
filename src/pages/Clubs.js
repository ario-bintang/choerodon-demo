import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spin } from 'choerodon-ui';
import { Link } from 'react-router-dom';

const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    const [imageLoading, setImageLoading] = useState({});

    const handleImageLoad = (id) => {
        const delay = 700 + Math.random() * 800; 
        setTimeout(() => {
            setImageLoading((prev) => ({ ...prev, [id]: false }));
        }, delay);
    };

    useEffect(() => {
        const initial = {};
        clubs.forEach((club) => {
            initial[club.id] = true;
        });
        setImageLoading(initial);
    }, [clubs]);

    useEffect(() => {
        const stored = localStorage.getItem('clubs');
        if (stored) {
            setClubs(JSON.parse(stored));
        }
    }, []);


    const truncate = (text, maxLength = 75) =>
        text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

    return (
        <div
            style={{
                background: '#ECECEC',
                padding: '30px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div style={{ width: '100%', maxWidth: '800px' }}>
                <Row>
                    <Col
                        span={24}
                        style={{
                            gap: '2em',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {clubs.map((club) => (
                            <Link
                                to={`/clubs/${club.id}`}
                                key={club.id}
                                style={{ textDecoration: 'none' }}
                            >
                                <Card
                                    title={club.name}
                                    bordered={false}
                                    cover={
                                        <div style={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden' }}>
                                            {imageLoading[club.id] && (
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: '#fff',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        zIndex: 2,
                                                    }}
                                                >
                                                    <Spin />
                                                </div>
                                            )}
                                            <img loading="lazy"
                                                alt={club.name}
                                                src={club.img}
                                                onLoad={() => handleImageLoad(club.id)}
                                                onError={() => handleImageLoad(club.id)}
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                }}
                                            />
                                        </div>
                                    }
                                    style={{ cursor: 'pointer' }}
                                >
                                    <p
                                        style={{
                                            fontStyle: 'italic',
                                            color: 'GrayText',
                                        }}
                                    >
                                        {truncate(club.description)}
                                    </p>
                                </Card>

                            </Link>
                        ))}
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default Clubs;

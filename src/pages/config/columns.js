import React from 'react';
import { Icon, CheckBox } from 'choerodon-ui/pro';
import { Link } from 'react-router-dom';

export const columns = (handleDelete, handleToggleActive) => [
    { name: 'id' },
    { name: 'name' },
    { name: 'code' },
    { name: 'sex' },
    {
        name: 'active',
        renderer: ({ record }) => (
            <CheckBox
                checked={record.get('active')}
                onChange={() => handleToggleActive(record)}
            />
        ),
    },
    {
        name: 'action',
        header: 'Action',
        renderer: ({ record }) => (
            <div className="icons-container">
                <Link to={`/add`}>
                    <Icon className="my-icon" type="visibility-o" />
                </Link>
                <Link to={`/edit/${record.get('id')}`}>
                    <Icon className="my-icon" type="edit-o" />
                </Link>
                <Icon
                    className="my-icon"
                    type="delete_black-o"
                    style={{ color: '#8B0000' }}
                    onClick={() => handleDelete(record.get('id'))}
                />
            </div>
        ),
    },
];

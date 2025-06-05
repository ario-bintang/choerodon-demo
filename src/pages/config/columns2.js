import React from 'react';
import { Icon } from 'choerodon-ui/pro';
import { Link } from 'react-router-dom';

export const columns2 = (handleDelete) => [
  { name: 'id' },
  { name: 'firstName' },
  { name: 'lastName' },
  { name: 'email' },
  { name: 'gender' },
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

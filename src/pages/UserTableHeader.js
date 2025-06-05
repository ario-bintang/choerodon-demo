import React from 'react';
import { Button } from 'choerodon-ui/pro';
import { Link } from 'react-router-dom';

const UserTableHeader = ({ selectedCount, handleBulkDelete }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h1>Users Table</h1>
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {selectedCount > 0 && (
        <Button color="red" onClick={handleBulkDelete}>Delete Selected</Button>
      )}
      <Link to="/add">
        <Button color="green">Add User</Button>
      </Link>
    </div>
  </div>
);

export default UserTableHeader;

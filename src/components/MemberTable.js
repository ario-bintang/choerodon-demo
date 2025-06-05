// src/components/MemberTable.js
import React, { useMemo } from 'react';
import { Table, DataSet } from 'choerodon-ui/pro';
import { getUsers } from '../helper/userApi';

const MemberTable = ({ memberIds = [] }) => {
  const allUsers = getUsers();

  const members = useMemo(() => {
    return allUsers.filter((user) => memberIds.includes(user.id));
  }, [memberIds]);

  const ds = useMemo(() => new DataSet({
    paging: false,
    selection:false,
    fields: [
      { name: 'id', type: 'number', label: 'ID' },
      { name: 'name', type: 'string', label: 'Name' },
      { name: 'sex', type: 'string', label: 'Sex' },
    ],
    data: members,
  }), [members]);

  const columns = [
    { name: 'id' },
    { name: 'name' },
    { name: 'sex' },
  ];

  return <Table dataSet={ds} columns={columns} />;
};

export default MemberTable;

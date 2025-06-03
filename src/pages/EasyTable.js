import React, { useEffect, useMemo, useState } from 'react';
import { Table, DataSet, Pagination, Button, Icon } from 'choerodon-ui/pro';
import { Link } from 'react-router-dom';
import { getUsers } from '../helper/userApi';

const EasyTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setData(getUsers());
  }, []);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return data.slice(start, end);
  }, [data, currentPage, pageSize]);

  const ds = useMemo(() => {
    return new DataSet({
      paging: false,
      data: paginatedData,
      fields: [
        { name: 'id', type: 'number', label: 'ID' },
        { name: 'name', type: 'string', label: 'Name' },
        { name: 'code', type: 'string', label: 'Code' },
        { name: 'sex', type: 'string', label: 'Sex' },
        { name: 'active', type: 'boolean', label: 'Active' },
      ],
    });
  }, [paginatedData]);

  const columns = [
    { name: 'id' },
    { name: 'name' },
    { name: 'code' },
    { name: 'sex' },
    { name: 'active' },
    {
      name: 'action',
      header: 'Action',
      renderer: ({ record }) => (
        <Link to={`/edit/${record.get('id')}`}>
          <Button icon={<Icon type="mode_edit" />} shape="circle" />
        </Link>
      ),
    },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <Table dataSet={ds} columns={columns} />
      <Pagination
        total={data.length}
        pageSize={pageSize}
        current={currentPage}
        onChange={(page, size) => {
          setCurrentPage(page);
          setPageSize(size);
        }}
        showSizeChanger
        pageSizeOptions={['5', '10', '15']}
      />
    </div>
  );
};

export default EasyTable;

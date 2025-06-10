import React, { useEffect } from 'react';
import { Pagination, Table, Button, Menu, Dropdown } from 'choerodon-ui/pro';
import useUserTable from './hooks/useUserTable';
import UserTableHeader from './UserTableHeader';
import { columns } from './config/columns';
import { Input } from 'choerodon-ui';

const EasyTable = () => {
  const {
    ds,
    data,
    keyword,
    setKeyword,
    handleSearch,
    statusFilter,
    setStatusFilter,
    pageSize,
    currentPage,
    selectedCount,
    setCurrentPage,
    setPageSize,
    handleDelete,
    handleBulkDelete,
    handleToggleActive
  } = useUserTable();

  useEffect(() => {
    setCurrentPage(1);
    console.log(currentPage, "Current beggining")
  }, [])

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  const handleStatusSelect = ({ key }) => {
    setStatusFilter(key);
  };
  useEffect(() => {
    handleSearch();
  }, [statusFilter]);
  const menu = (
    <Menu onClick={handleStatusSelect}>
      <Menu.Item key="All">All</Menu.Item>
      <Menu.Item key="Active">Active</Menu.Item>
      <Menu.Item key="Inactive">Inactive</Menu.Item>
    </Menu>
  )


  return (
    <>
      <UserTableHeader
        selectedCount={selectedCount}
        handleBulkDelete={handleBulkDelete}
      />

      <div style={{ padding: '0.2rem 0rem' }}>
        <div style={{ display: 'flex', gap: '2em', marginBottom: '1em' }}>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search name..."
            style={{ width: 300 }}
          />
          <Button onClick={handleSearch} color='primary' >Search</Button>
          <Dropdown overlay={menu} >
            <Button style={{ backgroundColor: '#f0f0f0' }}>Filter by Status</Button>
          </Dropdown>

        </div>
        <Table dataSet={ds} columns={columns(handleDelete, handleToggleActive)} style={{ marginBottom: '1em' }} />
        <Pagination
          total={data.length}
          pageSize={pageSize}
          current={currentPage}
          onChange={(page, size) => {
            setCurrentPage(page);
            setPageSize(size);
          }}
          showSizeChanger
          pageSizeOptions={['10', '20', '50']}
        />

      </div>
    </>
  );
};

export default EasyTable;

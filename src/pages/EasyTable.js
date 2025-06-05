import React, { useEffect } from 'react';
import { Pagination, Table } from 'choerodon-ui/pro';
import useUserTable from './hooks/useUserTable';
import UserTableHeader from './UserTableHeader';
import { columns } from './config/columns';

const EasyTable = () => {
  const {
    ds,
    data,
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

  return (
    <>
      <UserTableHeader
        selectedCount={selectedCount}
        handleBulkDelete={handleBulkDelete}
      />

      <div style={{ padding: '0.2rem 0rem' }}>
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

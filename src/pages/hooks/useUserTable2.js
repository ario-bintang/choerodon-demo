import { useEffect, useMemo, useRef, useState } from 'react';
import { DataSet, Modal } from 'choerodon-ui/pro';
import { getUsers } from '../../helper/userApi2';

const useUserTable2 = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCount, setSelectedCount] = useState(0);

  const dsRef = useRef(new DataSet({
    paging: false,
    selection: 'multiple',
    fields: [
      { name: 'id', type: 'number', label: 'ID' },
      { name: 'firstName', type: 'string', label: 'First Name' },
      { name: 'lastName', type: 'string', label: 'Last Name' },
      { name: 'email', type: 'string', label: 'Email' },
      { name: 'gender', type: 'string', label: 'Gender' },
    ],
  }));

  const ds = dsRef.current;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers(currentPage, pageSize);
      setData(result.users);
      setTotal(result.total);
    };

    fetchData();
  }, [currentPage, pageSize]);

  useEffect(() => {
    ds.loadData(data);
  }, [data]);

  useEffect(() => {
    const updateSelection = () => {
      setSelectedCount(ds.selected.length);
    };

    ds.addEventListener('select', updateSelection);
    ds.addEventListener('unSelect', updateSelection);
    ds.addEventListener('selectAll', updateSelection);
    ds.addEventListener('unSelectAll', updateSelection);

    return () => {
      ds.removeEventListener('select', updateSelection);
      ds.removeEventListener('unSelect', updateSelection);
      ds.removeEventListener('selectAll', updateSelection);
      ds.removeEventListener('unSelectAll', updateSelection);
    };
  }, [ds]);

  return {
    ds,
    data,
    total,
    pageSize,
    currentPage,
    selectedCount,
    setCurrentPage,
    setPageSize,
  };
};

export default useUserTable2;

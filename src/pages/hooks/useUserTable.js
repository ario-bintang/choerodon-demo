import { useEffect, useMemo, useRef, useState } from 'react';
import { DataSet, Modal } from 'choerodon-ui/pro';
import { getUsers, deleteUser, toggleUserActive } from '../../helper/userApi';

const useUserTable = () => {
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCount, setSelectedCount] = useState(0);

    const dsRef = useRef(new DataSet({
        paging: false,
        selection: 'multiple',
        fields: [
            { name: 'id', type: 'number', label: 'ID' },
            { name: 'name', type: 'string', label: 'Name' },
            { name: 'code', type: 'string', label: 'Code' },
            { name: 'sex', type: 'string', label: 'Sex' },
            { name: 'active', type: 'boolean', label: 'Active' },
        ],
    }));

    const ds = dsRef.current;

    useEffect(() => {
        setData(getUsers());

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
    }, []);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return data.slice(start, start + pageSize);
    }, [data, currentPage, pageSize]);

    useEffect(() => {
        ds.loadData(paginatedData);
    }, [paginatedData]);

    const handleDelete = (id) => {
        const user = data.find((u) => u.id === id);
        Modal.confirm({
            title: 'Confirm Delete',
            children: `Are you sure you want to delete user "${user.name}"?`,
        }).then((button) => {
            if (button === 'ok') {
                deleteUser(id);
                setData(getUsers());
                Modal.success('User deleted successfully!');
            }
        });
    };

    const handleBulkDelete = () => {
        const selected = ds.selected;
        if (selected.length === 0) return;

        Modal.confirm({
            title: 'Confirm Bulk Delete',
            children: `Are you sure you want to delete ${selected.length} selected user(s)?`,
        }).then((button) => {
            if (button === 'ok') {
                selected.forEach(record => deleteUser(record.get('id')));
                setData(getUsers());
                Modal.success('Selected users deleted successfully!');
            }
        });
    };

    const handleToggleActive = (record) => {
        const id = record.get('id');
        const name = record.get('name');

        toggleUserActive(id);
        const updatedUsers = getUsers();
        setData(updatedUsers);

        Modal.success({
            title: 'Status Updated',
            children: `User "${name}" is now marked as ${record.get('active') ? 'inactive' : 'active'}.`,
        });
    };

    return {
        ds,
        data,
        pageSize,
        currentPage,
        selectedCount,
        paginatedData,
        setCurrentPage,
        setPageSize,
        handleDelete,
        handleBulkDelete,
        handleToggleActive
    };
};

export default useUserTable;

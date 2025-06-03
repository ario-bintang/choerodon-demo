import React, { useState, useMemo } from 'react';
import { DataSet, Table } from 'choerodon-ui/pro';
// import { UserContext } from '../helper/UserContext';


const data = [
    { id: 1, name: "John Doe", code: "JD001", sex: "Male", active: true },
    { id: 2, name: "Jane Smith", code: "JS002", sex: "Female", active: false },
    { id: 3, name: "Alice Johnson", code: "AJ003", sex: "Female", active: true },
    { id: 4, name: "Bob Brown", code: "BB004", sex: "Male", active: true },
    { id: 5, name: "Charlie Green", code: "CG005", sex: "Male", active: false },
    { id: 6, name: "Diana White", code: "DW006", sex: "Female", active: true },
    { id: 7, name: "Ethan Blue", code: "EB007", sex: "Male", active: true },
    { id: 8, name: "Fiona Black", code: "FB008", sex: "Female", active: false },
    { id: 9, name: "George Red", code: "GR009", sex: "Male", active: true },
    { id: 10, name: "Hannah Gold", code: "HG010", sex: "Female", active: true },
    { id: 11, name: "Ian Silver", code: "IS011", sex: "Male", active: false },
    { id: 12, name: "Jenna Copper", code: "JC012", sex: "Female", active: true },
    { id: 13, name: "Kevin Bronze", code: "KB013", sex: "Male", active: true },
    { id: 14, name: "Laura Iron", code: "LI014", sex: "Female", active: false },
    { id: 15, name: "Mike Steel", code: "MS015", sex: "Male", active: true },
    { id: 16, name: "Nina Pearl", code: "NP016", sex: "Female", active: true }
];

function EasyTable2() {
    // const {users,setUsers}=useContext(UserContext)
    // console.log(users, "INI USERS")
    const [selectedUsers, setSelectedUsers] = useState([])
    const ds = useMemo(() => {
        const ds = new DataSet({
            autoCreate: false,
            paging: true,
            pageSize: 10, // Show 5 records per page
            selection: 'multiple', // enable checkbox selection
            fields: [
                { name: 'id', type: 'number', label: 'ID' },
                { name: 'name', type: 'string', label: 'Name' },
                { name: 'code', type: 'string', label: 'Code' },
                { name: 'sex', type: 'string', label: 'Sex' },
                { name: 'active', type: 'boolean', label: 'Active' },
            ],
            data,
        });

        ds.addEventListener('select', ({ record }) => {
            const user = record.toData();
            console.log('Selected:', user.name);
            setSelectedUsers(prev => [...prev, user]);
        });

        ds.addEventListener('unSelect', ({ record }) => {
            const user = record.toData();
            console.log('Unselected:', user.name);
            setSelectedUsers(prev => prev.filter(u => u.id !== user.id));
        });

        return ds;
    }, []);

    return (
        <div>
            <Table dataSet={ds} columns={[
                { name: 'id' },
                { name: 'name' },
                { name: 'code' },
                { name: 'sex' },
                { name: 'active' },
            ]} pagination={{
                pageSize: 10,
                showSizeChanger: false, // optional: prevent users from changing page size
            }} />
            <div style={{ marginTop: '1rem' }}>
                <h3>Selected Users</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedUsers.length === 0 ? (
                        <span style={{ color: '#888' }}>No users selected</span>
                    ) : (
                        selectedUsers.map(user => (
                            <button key={user.id} style={{ marginBottom: '8px', backgroundColor: 'lightblue' }}>
                                {user.name}
                            </button>
                        ))
                    )}
                </div>
            </div>

        </div>
    );
}

export default EasyTable2;

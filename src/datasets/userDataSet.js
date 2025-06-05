import { DataSet } from 'choerodon-ui/pro';
// import { getUsers, addUser, updateUser, deleteUser } from '.helper/userAPI';
import { getUsers, addUser, updateUser, deleteUser } from '../helper/userApi';


const userDataSet = new DataSet({
    autoQuery: true,
    pageSize: 10,
    transport: {
        read: () => {
            const data = getUsers();
            return {
                data,
                total: data.length,
            };
        },
        create: ({ data }) => {
            const created = addUser(data[0]);
            return created;
        },
        update: ({ data }) => {
            return updateUser(data[0]);
        },
        destroy: ({ data }) => {
            return deleteUser(data[0].id);
        },
    },
    fields: [
        { name: 'id', type: 'number', label: 'ID', required: true },
        { name: 'name', type: 'string', label: 'Name', required: true },
        { name: 'code', type: 'string', label: 'Code' },
        { name: 'sex', type: 'string', label: 'Sex' },
        { name: 'active', type: 'boolean', label: 'Active' },
    ],
});

export default userDataSet;

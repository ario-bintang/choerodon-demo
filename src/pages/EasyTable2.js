import React, { useEffect, useRef } from 'react';
import { Table, DataSet } from 'choerodon-ui/pro';

const usePaginatedUserTable = () => {
    const dsRef = useRef(
        new DataSet({
            autoQuery: true,
            paging: true,
            pageSize: 10,
            primaryKey: 'id',
            dataKey: 'content',
            selection: false,
            transport: {
                read: ({ dataSet }) => {
                    const page = dataSet.currentPage ?? 1;
                    const pageSize = dataSet.pageSize ?? 10;
                    const skip = (page - 1) * pageSize;

                    return {
                        url: `https://dummyjson.com/users?limit=${pageSize}&skip=${skip}`,
                        method: 'GET',
                        transformResponse(response) {
                            const parsed = JSON.parse(response);
                            console.log('API Response:', parsed);
                            console.log("PAGINATION DATA: ", { page, pageSize })

                            return {
                                content: parsed.users,
                                total: parsed.total,
                            };
                        },
                    };
                },
            },
            fields: [
                { name: 'id', type: 'number', label: 'ID' },
                { name: 'firstName', type: 'string', label: 'First Name' },
                { name: 'lastName', type: 'string', label: 'Last Name' },
                { name: 'email', type: 'string', label: 'Email' },
                { name: 'gender', type: 'string', label: 'Gender' },
            ],
        })
    );

    return dsRef.current;
};

const UserTable = () => {
    const ds = usePaginatedUserTable();

    useEffect(() => {
        ds.addEventListener('load', () => {
            console.log('Loaded dataset:', ds.toData());
        });
    }, [ds]);

    return (
        <Table
            dataSet={ds}
            columns={[
                { name: 'id', width: 60 },
                { name: 'firstName' },
                { name: 'lastName' },
                { name: 'email' },
                { name: 'gender' },
            ]}
            style={{ marginTop: '1em' }}
        />
    );
};

export default UserTable;

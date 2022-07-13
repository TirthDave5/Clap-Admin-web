import { Card, Table, Tag, Switch } from 'antd';
import React from 'react';
import users from '../../assets/Constants/users.json';

function Users() {

    const renderStatus = (userStatus) => {
        if (userStatus === 'Member') {
            return <Tag color={'blue'}>{userStatus}</Tag>
        }
        if (userStatus === 'Pending') {
            return <Tag color={'orange'}>{userStatus}</Tag>
        }
        if (userStatus === 'Not Approved') {
            return <Tag color={'red'}>{userStatus}</Tag>
        }
    }

    const renderAction = (action) => {
        if (action === 'Member') {
            return (
                <Switch defaultChecked />
            )
        }
        if (action === 'Pending') {
            return (
                <Switch />
            )
        }
        if (action === 'Not Approved') {
            return (
                <Switch disabled />
            )
        }
    }

    const userColumn = [
        {
            title: 'Mobile No',
            dataIndex: 'mobileNo',
            key: 'mobileNo'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: renderStatus
        },
        {
            title: 'Action',
            dataIndex: 'status',
            key: 'action',
            render: renderAction
        },
    ]

    return (
        <Card title={'Users'} style={{ margin: 20 }}>
            <Table
                dataSource={users}
                columns={userColumn}
            />
        </Card>
    )
}

export default Users
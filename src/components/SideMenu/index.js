import React from 'react';
import { Menu, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

function SideMenu() {

    const navigate = useNavigate();

    const menuItems = [
        {
            key: '/home',
            label: 'Users'
        },
        {
            key: '/home/coupon',
            label: 'Generate Counpon'
        },
    ]

    return (
        <>
            <Divider />
            <Menu items={menuItems} onClick={(menuItems) => navigate(menuItems.key)} />
        </>
    )
}

export default SideMenu
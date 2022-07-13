import { Layout, Image } from 'antd';
import React from 'react';
import AppRoutes from '../AppRoutes';
import SideMenu from '../SideMenu';
import { Outlet } from 'react-router-dom';
const { Sider, Content } = Layout;

const AppScreen = () => {
    return (
        <Layout>
            <Sider style={{ height: "100vh", backgroundColor: "white" }}>
                <div style={{ fontSize: 30, marginTop: 10, marginLeft: 5, }}>ADMIN</div>
                <Image
                    src={require('../../assets/logo.png')}
                    preview={false}
                />
                <SideMenu />
            </Sider>
            <Layout>
                <Content>
                    <AppRoutes />
                </Content>
            </Layout>
        </Layout>
    )
}

export default AppScreen;
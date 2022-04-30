import React from 'react';
import { render } from 'react-dom';
import styles from './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

interface BasicProps {
    children: React.ReactNode;
}
export default function head({ children }: BasicProps) {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark"
                    mode="horizontal">
                    登录
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>速竞 提供快速即时竞赛消息</Footer>
        </Layout>
    )
}
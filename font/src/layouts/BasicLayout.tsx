import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import styles from './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import { history } from 'umi';
import { Button } from 'antd/lib/radio';
import { Link } from 'react-router-dom';
import { UserInfo } from '@/service/service';

const { Header, Content, Footer } = Layout;

interface BasicProps {
    children: React.ReactNode;
}
export default function head({ children }: BasicProps) {
    const uid = sessionStorage.getItem('uid')
    const [userInfo, setusrInfo] = useState()
    useEffect(() => {
        UserInfo({ uid: uid }).then((res) => {

            setusrInfo(res.data)
        })
    }, [uid])
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark"
                    mode="horizontal" >
                    {!uid &&
                        <Link to='/login'>登录</Link>
                    }
                    {
                        uid && <Link to='/home'>{userInfo?.username}</Link>
                    }
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center', color: '#989898' }}>速竞 提供快速即时竞赛消息<br />
                Copyright © 2022 &nbsp;&nbsp;&nbsp;&nbsp;
                Powered by .React, Node.js </Footer>
        </Layout>
    )
}

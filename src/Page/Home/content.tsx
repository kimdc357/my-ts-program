import * as React from 'react'
import Layout, { Content} from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Menu } from 'antd'
import './content.scss'
import {Login,logins} from '../Login/login'

class Contents extends React.Component{
    render(){
        return(
            <div className="content">
                    <Layout >
                        <Sider width={200} className="site-layout-background">
                        {/* <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu key="sub1" title="subnav 1">
                            <Menu.Item key="1">1</Menu.Item>
                            <Menu.Item key="2">2</Menu.Item>
                            <Menu.Item key="3">3</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="subnav 2">
                            <Menu.Item key="4">4</Menu.Item>
                            <Menu.Item key="5">5</Menu.Item>
                            <Menu.Item key="6">6</Menu.Item>
                        </SubMenu>
                        </Menu> */}
                        <div>
                            登陆
                            注册
                        </div>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                        <Content 
                            className="site-layout-background"
                            style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280, }}
                                        >
                            <Login></Login>
                        
                        </Content>
                        </Layout>
                    </Layout>   
            </div>
        )
    }
}

export default Contents
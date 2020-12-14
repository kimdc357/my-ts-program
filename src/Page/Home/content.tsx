import * as React from 'react'
import Layout, { Content} from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Menu } from 'antd'

class Contents extends React.Component{
    render(){
        return(
            <div>
                <Content>
                    <Layout >
                        <Sider width={200}>
                        <Menu>
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
                        </Menu>
                        </Sider>
                        <Content style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                                        }}>
                            Content
                        </Content>
                    </Layout>   
                </Content>
            </div>
        )
    }
}

export default Contents
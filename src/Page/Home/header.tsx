import * as React from 'react'
import {Menu} from 'antd'
import { Header } from 'antd/lib/layout/layout'

class Headers extends React.Component{
    render(){
        return(
            <div>
                <Header>
                    <div>logo</div>
                    <div>
                        <Menu >
                        <Menu.Item key="1">a</Menu.Item>
                        <Menu.Item key="2">b</Menu.Item>
                        <Menu.Item key="3">c</Menu.Item>
                        </Menu>
                    </div>
                </Header>   
            </div>
        )
    }
}

export default Headers
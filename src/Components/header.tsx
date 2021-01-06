import * as React from 'react'
import {Menu,Image} from 'antd'
import { Header } from 'antd/lib/layout/layout'
// import * as logo from '../img/images/logo.jpg'
 import * as logo from '../img/logo.jpg';
import './header.scss'

class Headers extends React.Component{
    render(){
        return(
            <div className="headers">
                <Header>
                    <div className="logo">
                        <Image src={logo} ></Image>
                    </div>
                    <div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
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
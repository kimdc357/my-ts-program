import * as React from 'react'
import {Menu,Image} from 'antd'
import { Header } from 'antd/lib/layout/layout'
// import * as logo from '../img/images/logo.jpg'
 import * as logo from '../../dist/logo.jpg';
import './header.scss'
import { HeadMenuComponent } from './contents/menu/headmenu'

class Headers extends React.Component{
    render(){
        return(
            <div className="headers">
                <Header>
                    <div className="logo">
                        <Image src='./dist/logo.jpg' ></Image>
                    </div>
                    <div>
                        <HeadMenuComponent></HeadMenuComponent>
                        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">a</Menu.Item>
                            <Menu.Item key="2">b</Menu.Item>
                            <Menu.Item key="3">c</Menu.Item>
                        </Menu> */}
                    </div>
                </Header>   
            </div>
        )
    }
}

export default Headers
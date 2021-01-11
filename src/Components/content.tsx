import * as React from 'react'
import Layout, { Content} from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Menu, Button } from 'antd'
import './content.scss'
import {LoginComponent} from './contents/login/login'
import {RegistersComponent} from './contents/login/register'
// import {LeftMenuComponent} from './contents/menu/leftmenu'

export interface IContensProps{

}

export interface IcontensState{
    contentpage?:any
}


class Contents extends React.Component<IContensProps,IcontensState>{

    constructor(props?:IContensProps){
        super(props)
        this.state={contentpage:<LoginComponent></LoginComponent>}
    }

    componentDidMount(){
        console.log()
        
    }

    render(){
        return(
            <div className="content">
                    <Layout >
                        <Sider width={200} className="site-layout-background">
                       
                        {/* <div>
                        <LeftMenuComponent></LeftMenuComponent>
                        </div> */}
                        <div>
                            <Button type='link' onClick={()=>this.onClickLink('denglu')}>登陆</Button>
                            <Button type='link' onClick={()=>this.onClickLink('zhuce')}>注册</Button>
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
                            {this.state.contentpage?this.state.contentpage:null}
                               {/* <Logins></Logins> */}
                            
                        </Content>
                        </Layout>
                    </Layout>   
            </div>
        )
    }

    onClickLink(key:string){
        switch(key){
            case 'denglu':
                this.setState({contentpage:<LoginComponent></LoginComponent>})
                break;
            case 'zhuce':
                this.setState({contentpage:<RegistersComponent></RegistersComponent>})
                break;
        }
    }
}

export default Contents
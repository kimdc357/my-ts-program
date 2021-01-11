import * as React from 'react'
import { connect } from 'react-redux' 
import { rootState } from '../../../redux/reducer'
import { Dispatch } from 'redux'
import { Menu } from 'antd';
import { headMenu } from '../../../redux/page/action'
import { IHeadMenuInfo } from '../../../redux/page/reducer'


const { SubMenu } = Menu;

export interface IHeadMenuProps{
    headMenu?:(menu:{ resolve?:(value?:IHeadMenuInfo)=>void,
        })=>void,

    headMenuResult?:IHeadMenuInfo,
    data?:any
}

export interface IHeadMenuState{
    headMenu?:( menu:{ resolve?:(value?:IHeadMenuInfo)=>void,
    })=>void,
    current: string[],
    data:any
}

export class BaseHeadMenu extends React.Component<IHeadMenuProps,IHeadMenuState>{

    constructor(props?:IHeadMenuProps){
        super(props)
        this.state = {
            current: ['mail'],
            data:{}
          };
    }

    componentDidMount(){
        this.props.headMenu({
            resolve:(value?:IHeadMenuInfo)=>{

                console.log(value)
                this.setState({
                    data:value
                })
            },
        });

    }

    menuBind(data:any){
        console.log(data.id)
        
           
        
    }

    render(){
        return(
            <div className='headmenu'>
                 <Menu onClick={this.handleClick.bind(this)} selectedKeys={this.state.current} mode="horizontal" theme="dark">
                     {
                         this.menuBind(this.state.data)
                     }
                    <Menu.Item key="mail">
                    Navigation One
                    </Menu.Item>
                    <SubMenu key="sub4"  title="Navigation Three">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>              
                    <SubMenu key="sub2" title="Navigation Two">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    </SubMenu>              
                    <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                    </Menu.Item>
                </Menu>         
            </div>
        )
    }

    handleClick(e:any){
        console.log('click ', e);
        this.setState({ current: e.key });
    };

}

const mapStateToProps=(state:rootState)=>{
    return{
        headMenuResult:state.pageState.headMenuResult
    }
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        headMenu:(menu:{resolve?:(value?:IHeadMenuInfo)=>void,})=>dispatch(headMenu(menu))
    }
}

export const HeadMenuComponent=connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseHeadMenu)
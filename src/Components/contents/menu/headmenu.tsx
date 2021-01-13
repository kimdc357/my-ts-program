import * as React from 'react'
import { connect } from 'react-redux' 
import { rootState } from '../../../redux/reducer'
import { Dispatch } from 'redux'
import { Menu } from 'antd';
import { headMenu } from '../../../redux/page/action'
import { IHeadMenuInfo } from '../../../redux/page/reducer'



const { SubMenu } = Menu;

export interface IHeadMenuProps{
    headMenu?:(menu:{ resolve?:(value?:any)=>void,
        })=>void,

    headMenuResult?:IHeadMenuInfo,
    datas?:any
    menus?:any
}

export interface IHeadMenuState{
    headMenu?:( menu:{ resolve?:(value?:any)=>void,
    })=>void,
    current: string[],
    datas:any
    menus:any
}

export class BaseHeadMenu extends React.Component<IHeadMenuProps,IHeadMenuState>{

    constructor(props?:IHeadMenuProps){
        super(props)
        this.state = {
            current: ['mail'],
            datas:{},
            menus:{}
          };
    }

    componentWillMount(){
        this.props.headMenu({
            resolve:(value?:any)=>{

                this.setState({
                    datas:value
                })

            },
        });

        
    }

    menuItemBind(data:any,id:any){
        if(data.length>0){
            return( 
                data.map((menu:any,i:any)=>{
                 if(menu.pid==id){
                     if(menu.isLeaf==0){
                         return (
                         <SubMenu key={menu.key} title={menu.name}>
                             {this.menuItemBind(data,menu.id)}
                         </SubMenu>
                         )
                     }else{
                       return (<Menu.Item key={menu.key}>{menu.name}</Menu.Item>)
                     }
                 }
             })
             )
        }
    }

    // menuItemSubBind(data:any,id:any){
    //    return( data.map((menu:any,i:any)=>{
    //         if(menu.pid==id){
    //             if(menu.isLeaf==1){
    //                 return (<Menu.Item key={menu.id}>{menu.name}</Menu.Item>)
    //             }else{
    //                 return(<SubMenu key={menu.id} title={menu.name}>
    //                     {
    //                     this.menuItemSubBind(data,menu.id)
    //                     }
    //                 </SubMenu>)
    //             }
    //         }
    //     })  
    //    )
    // }


    render(){
        return(
            <div className='headmenu'>
                 <Menu onClick={this.handleClick.bind(this)} selectedKeys={this.state.current} mode="horizontal" theme="dark">
                   {
                        this.menuItemBind(this.state.datas,0)
                   }
                </Menu>         
            </div>
        )
    }

    handleClick(e:any){
        console.log('click ', e);
        this.setState({ current: e.key });
        console.log(e.key)
        // import { hashHistory } from 'react-router';

        // hashHistory.push(e.key）
    };

}

const mapStateToProps=(state:rootState)=>{
    return{
        headMenuResult:state.pageState.headMenuResult
    }
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        headMenu:(menu:{resolve?:(value?:any)=>void,})=>dispatch(headMenu(menu))
    }
}

export const HeadMenuComponent=connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseHeadMenu)
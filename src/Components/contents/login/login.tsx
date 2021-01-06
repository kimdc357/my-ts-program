import * as React from 'react'
import './login.scss'
import { Button, Input, Row, Col, Form } from 'antd'
import { connect } from 'react-redux'
import { State } from '../../../redux/reducer'
import { Dispatch } from 'redux'
import { Buttons, IButtonsProps, IButtonsState, ButtonAPP } from '../../../field/button'
import { InputsComponent, IptProps, IptState } from '../../../field/input'
import { Verifaction } from './verifaction'
import { AlertComponents, IAlertProps, IAlertState} from '../../message/alert'
import { alert_info,alert_error,alert_success,alert_warning,login } from '../../../redux/action'
import {IUserInfo} from '../../../redux/user_reducer'

export interface ILoginProps{
    login?:(user:{user:IUserInfo,
        resolve:(value?:any)=>void,
        reject:(value?:any)=>void})=>void;
    user:IUserInfo
}

export interface ILoginState{
    login?:(user:{user:IUserInfo,
        resolve:(value?:any)=>void,
        reject:(value?:any)=>void})=>void;
    user:IUserInfo
}

type loginprops= ILoginProps  & IButtonsProps & IptProps & IAlertProps ;
type loginstate= ILoginState  & IButtonsState & IptState & IAlertState ;

export class BaseLogin extends React.Component<loginprops,loginstate>{

    constructor(props?:loginprops){
        super(props)
        this.state={
            user:{username:'',password:''}
        }
    }

    render(){
        return(
            <div className="login">
                <Row>
                <Col span={8}>
                </Col>
                <Col span={8}>
                    <div className="logs">
                    <InputsComponent placeholder="用户名" onChange={this.ChangeUserid.bind(this)} />
                    <Input.Password placeholder="密码" onChange={this.ChangePwd.bind(this)} />
                    <Verifaction></Verifaction>
                    <Button type='primary' onClick={()=>this.BtnLogin()}>Login</Button>
                    {/* <ButtonAPP type='primary' block >Login</ButtonAPP>           */}
                    </div>
                </Col>
                <Col span={8}><AlertComponents></AlertComponents></Col>
                </Row>
            </div>
        )
    }

    ChangeUserid(e:any){
        this.setState({
            user:{
                username:e.target.value,
                password:''
            }
        })
    }

    ChangePwd(e:any){
        this.setState({
            user:{
                username:this.state.user.username,
                password:e.target.value
            }
        })
    }

    BtnLogin(){
        this.props.login({
            user:this.state.user,
            resolve:(value?:any)=>{
                console.log(value)
            },
            reject:(value?:any)=>{

            }
        });
    }
   
}

const mapStateToProps=(state:State)=>{
    return{
        user:state.loginState.user ,
        alert:state.alertState.alert
    }
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        login:(user:{user:IUserInfo,
            resolve:(value?:void)=>void,
            reject:(value?:void)=>void})=>{dispatch(login(user))},
        alert_info:(alert:any)=>{dispatch(alert_info(alert))},
        alert_success:(alert:any)=>{dispatch(alert_success(alert))},
        alert_error:(alert:any)=>{dispatch(alert_error(alert))},
        alert_warning:(alert:any)=>{dispatch(alert_warning(alert))} 
    }
}

export const LoginComponent=connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseLogin)
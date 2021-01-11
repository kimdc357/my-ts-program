import { reduce } from 'lodash'
import * as React from 'react'
import { Button, Input, Row, Col, Form } from 'antd'
import {  IButtonsProps, IButtonsState, ButtonComponent } from '../../../field/button'
import { InputsComponent, IptProps, IptState } from '../../../field/input'
import { Verifaction, IVerifactionProps, IVerifactionState} from './verifaction'
import { connect } from 'react-redux'
import { rootState } from '../../../redux/reducer'
import { alertMessage } from '../../../redux/page/action'
import {register} from '../../../redux/user/action'
import { BaseAlert,AlertComponents, IAlertProps, IAlertState} from '../../message/alert'
import { bindActionCreators } from 'redux'
import {IUserInfo} from '../../../redux/user/reducer'


export interface IRegisterProps{
    register?:(user:IUserInfo,
        resolve?:(value?:any)=>void,
        reject?:(value?:any)=>void)=>void;
    user:IUserInfo
}

export interface IRegisterState{
    register?:( user:IUserInfo,
        resolve?:(value?:any)=>void,
        reject?:(value?:any)=>void)=>void;
    bian1?:any,
    bian2?:any,
    pwd1?:string,
    pwd2?:string,
    alertState:any
    user:IUserInfo
}

type RgisterProps=IRegisterProps  & IAlertProps & IVerifactionProps;
type RegiserState=IRegisterState  & IAlertState & IVerifactionState;


export class BaseRegister extends React.Component<RgisterProps,RegiserState>{

    constructor(props?:RgisterProps){
        super(props)

        this.state={
            bian1:'',
            bian2:'',
            pwd1:'',
            pwd2:'',
            bianState:'',
            alertState:<AlertComponents></AlertComponents>,
            user:{username:'',password:''}
        }
    }

    render(){
        return(
            <div className="register">
                <Row>
                <Col span={8}>
                </Col>
                <Col span={8}>
                    <div className="logs">
                    <InputsComponent placeholder="用户名" name='uid' onChange={this.onchangeuid.bind(this)} />
                    <Form.Item hasFeedback validateStatus={this.state.bian1} >
                    <Input.Password placeholder="密码" name='pwd1' onChange={this.onchangepwd1.bind(this)}/>
                    </Form.Item>
                    <Form.Item hasFeedback validateStatus={this.state.bian2} >
                    <Input.Password placeholder="确认密码" name='pwd2' onChange={this.onchangepwd2.bind(this)} />
                    </Form.Item>
                    <Verifaction></Verifaction>
                    <Button type='primary' block onClick={()=>this.btnClick()}>注册</Button>
                    {/* <ButtonAPP type='primary' block  >注 册</ButtonAPP>   */}
                    </div>
                </Col>
                <Col span={8}>
                    {/* <Alerts alert={this.props.alert}></Alerts> */}
                    {/* <AlertComponents></AlertComponents> */}
                    {this.state.alertState?this.state.alertState:null}
                </Col>
                </Row>
            </div>
        )
    }

    onchangeuid(e:any){
        this.setState({
            user:{
                username:e.target.value,
                password:''
            }
        })
    }

    onchangepwd1(e:any){
        var pwd=e.target.value;

        if(pwd==this.state.pwd2 && this.state.pwd2!=''){
            this.setState({
                bian1:'success',
                bian2:'success',
                pwd1:pwd,
                user:{
                    username:this.state.user.username,
                    password:e.target.value
                }
            })
        }else if(pwd!=this.state.pwd2 && this.state.pwd2!=''){
            this.setState({
                bian1:'error',
                bian2:'error',
                pwd1:pwd,
                user:{
                    username:this.state.user.username,
                    password:e.target.value
                }
            })
        }else{
            this.setState({
                pwd1:pwd,
                user:{
                    username:this.state.user.username,
                    password:e.target.value
                }
            })
        }

    }

    onchangepwd2(e:any){
        var pwd=e.target.value;
       
        if(pwd==this.state.pwd1){
            this.setState({
                bian2:'success',
                bian1:'success',
                pwd2:pwd
            })
        }else{
            this.setState({
                bian2:'error',
                bian1:'error',
                pwd2:pwd
            })
        }
    }

    btnClick(){
       
        if(this.state.bianState!='success'){
            console.log('验证码错误！')
        }else if(this.state.pwd1!=this.state.pwd2){
            console.log('密码不一致，请从新输入！')
        }
        
        this.props.register(this.state.user);
        this.setState({
            alertState:''
        })
       
        this.setState({
            alertState:<AlertComponents></AlertComponents>
        })
        var userinfo=JSON.parse(sessionStorage.getItem('user'))
        console.log(userinfo)
       
    }

}

const mapStateToProps=(state:rootState)=>{
    return{
         user:state.userinfoState.userinfoState,
         alert:state.pageState.alert
    
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        register:(
            user:IUserInfo,
            resolve?:(value?:any)=>void,
            reject?:(value?:any)=>void)=>{dispatch(register(user))},

        alertMessage:(alert:any)=>{dispatch(alertMessage(alert))}
    }
}

export const RegistersComponent=connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseRegister)
import { reduce } from 'lodash'
import * as React from 'react'
import { Button, Input, Row, Col, Form } from 'antd'
import { Buttons, IButtonsProps, IButtonsState, ButtonAPP } from '../../../field/button'
import { InputsComponent, IptProps, IptState } from '../../../field/input'
import { Verifaction } from './verifaction'
import { connect } from 'react-redux'
import { State } from '../../../redux/reducer'
import { register,message_info,alert_info,alert_error,alert_success,alert_warning,register1 } from '../../../redux/action'
import { Message, Msge, messageprops, messagestate,IMessageProps,IMessageState} from '../../message/message'
import { BaseAlert,AlertComponents, IAlertProps, IAlertState} from '../../message/alert'
import alert from '../../../redux/alert_reducer'


export interface IRegisterProps{
    register?:(user:{  user:any,
        resolve:(value?:any)=>void;
        reject:(value?:any)=>void;})=>void;
    register1?:(user:{  user:any,
            resolve:(value?:any)=>void;
            reject:(value?:any)=>void;})=>void;
    user:{
        username:string,
        password:string
    }
}

export interface IRegisterState{
    register?:(user:{  user:any,
        resolve:(value?:any)=>void;
        reject:(value?:any)=>void;})=>void;
    register1?:(user:{  user:any,
        resolve:(value?:any)=>void;
        reject:(value?:any)=>void;})=>void;
    bian1?:any,
    bian2?:any,
    pwd1?:any,
    pwd2?:any
}

type RgisterProps=IRegisterProps & IMessageProps & IAlertProps;
type RegiserState=IRegisterState & IMessageState & IAlertState;


export class Register extends React.Component<RgisterProps,RegiserState>{

    constructor(props?:RgisterProps){
        super(props)

        this.state={
            bian1:'',
            bian2:'',
            pwd1:'',
            pwd2:''
        }
    }

    render(){
        console.log('register    register    register    register    ')
        console.log(this.props.alert.msg)
        console.log(this.props.alert.types)
        return(
            <div className="register">
                <Row>
                <Col span={8}>
                   <Msge></Msge>
                </Col>
                <Col span={8}>
                    <div className="logs">
                    <InputsComponent placeholder="用户名" />
                    <Form.Item hasFeedback validateStatus={this.state.bian1} >
                    <Input.Password placeholder="密码" name='pwd1' onChange={()=>this.onchangepwd1.bind(this)}/>
                    </Form.Item>
                    <Form.Item hasFeedback validateStatus={this.state.bian2} >
                    <Input.Password placeholder="确认密码" name='pwd2' onChange={()=>this.onchangepwd2.bind(this)} />
                    </Form.Item>
                    <Verifaction></Verifaction>
                    <Button type='primary' block onClick={()=>this.btnClick()}>注册</Button>
                    <Button type='primary' block onClick={()=>this.btnClick1()}>注册</Button>
                    {/* <ButtonAPP type='primary' block  >注 册</ButtonAPP>   */}
                    </div>
                </Col>
                <Col span={8}>
                    {/* <Alerts alert={this.props.alert}></Alerts> */}
                    <AlertComponents></AlertComponents>
                </Col>
                </Row>
            </div>
        )
    }

    onchangepwd1(e:any){
        var pwd=e.target.value;
        console.log(e.target.value)
        if(pwd==''){
            this.setState({
                bian1:'success'
            })
        }else{
            this.setState({
                bian1:'error'
            })
        }
    }

    onchangepwd2(e:any){
        var pwd=e.target.value;
        console.log(pwd)
        if(pwd==''&& pwd==this.state.pwd1){
            this.setState({
                bian2:'success'
            })
        }else{
            this.setState({
                bian2:'error'
            })
        }
    }

    btnClick(){
        
        this.props.register({
            user:this.props.user,
            resolve:(value?:any)=>{
                console.log(value)
                console.log(this.props.alert)
                console.log(this.props.user);
                console.log(this.props.msg);
                console.log('0000000000000000000000');
            },
            reject:(value?:any)=>{
                
            }
        });
       
    }

    btnClick1(){
        this.props.register1({
            user:this.props.user,
            resolve:(value?:any)=>{
                console.log(this.props.alert)
                console.log('11111111111111111');
            },
            reject:(value?:any)=>{
                
            }
        });
    }
}

const mapStateToProps=(state:State)=>{
    return{
         user:state.registerState.user,
         msg:state.messageState.message_info,
         alert:state.alertState.alert
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        register:(user:{  user:any,
            resolve:(value?:any)=>void;
            reject:(value?:any)=>void;})=>{dispatch(register(user))},
        register1:(user:{  user:any,
            resolve:(value?:any)=>void;
            reject:(value?:any)=>void;})=>{dispatch(register1(user))},
        message_info:(msg:string)=>{dispatch(message_info(msg))},
        alert_info:(alert:any)=>{dispatch(alert_info(alert))},
        alert_success:(alert:any)=>{dispatch(alert_success(alert))},
        alert_error:(alert:any)=>{dispatch(alert_error(alert))},
        alert_warning:(alert:any)=>{dispatch(alert_warning(alert))}
    }
}

export const Registers=connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)
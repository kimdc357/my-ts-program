import { reduce } from 'lodash'
import * as React from 'react'
import { Button, Input, Row, Col, Form } from 'antd'
import { Buttons, IButtonsProps, IButtonsState, ButtonAPP } from '../../Components/Customcontrol/button'
import { InputsComponent, IptProps, IptState } from '../../Components/Customcontrol/input'
import { Verifaction } from '../../Components/Login/verifaction'
import { connect } from 'react-redux'
import { State } from '../../Redux/reducer'
import { register,message_info,alert_info,alert_error,alert_success,alert_warning } from '../../Redux/actions'
import { Message, Msge, messageprops, messagestate,IMessageProps,IMessageState} from '../../Components/Message/message'
import { Alertss, IAlertProps, IAlertState} from '../../Components/Message/alert'


export interface IRegisterProps{
    register?:(user:any)=>void;
    user:{
        username:'',
        password:''
    }
}

export interface IRegisterState{
    register?:(user:any)=>void;
}

type RgisterProps=IRegisterProps & IMessageProps & IAlertProps;
type RegiserState=IRegisterState & IMessageState & IAlertState;


export class Register extends React.Component<RgisterProps,RegiserState>{

    constructor(props?:RgisterProps){
        super(props)
    }

    render(){
        return(
            <div className="register">
                <Row>
                <Col span={8}>
                    <Msge></Msge>
                </Col>
                <Col span={8}>
                    <div className="logs">
                    <InputsComponent placeholder="用户名" />
                    <Input.Password placeholder="密码" />
                    <Input.Password placeholder="确认密码" />
                    <Verifaction></Verifaction>
                    <Button type='primary' block onClick={()=>this.btnClick()}>注册</Button>
                    {/* <ButtonAPP type='primary' block  >注 册</ButtonAPP>   */}
                    </div>
                </Col>
                <Col span={8}>
                    <Alertss></Alertss>
                </Col>
                </Row>
            </div>
        )
    }

    btnClick(){
        
        this.props.register(this.props.user)
        console.log(this.props.alert)
        console.log('0000000000000000000000');
        console.log(this.props.user);
        console.log(this.props.msg);
        console.log('0000000000000000000000');
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
        register:(user:any)=>{dispatch(register(user))},
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
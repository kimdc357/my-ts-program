import * as React from 'react'
import './login.scss'
import { Button, Input, Row, Col, Form } from 'antd'
import { Message, Msge, messageprops, messagestate,IMessageProps,IMessageState} from '../../message/message'
import { connect } from 'react-redux'
import { State } from '../../../redux/reducer'
import { message_success, message_error, message_info } from '../../../redux/action'
import { Dispatch } from 'redux'
import { Buttons, IButtonsProps, IButtonsState, ButtonAPP } from '../../../field/button'
import { InputsComponent, IptProps, IptState } from '../../../field/input'
import { Verifaction } from './verifaction'

export interface ILoginProps{
  
}

export interface ILoginState{

}

type loginprops= ILoginProps & IMessageProps & IButtonsProps & IptProps ;
type loginstate= ILoginState & IMessageState & IButtonsState & IptState ;

export class Login extends React.Component<loginprops,loginstate>{

    constructor(props?:loginprops){
        super(props)
    }

    render(){
        return(
            <div className="login">
                <Row>
                <Col span={8}>
                    <Msge></Msge>
                </Col>
                <Col span={8}>
                    <div className="logs">
                    <InputsComponent placeholder="用户名" />
                    <Input.Password placeholder="密码" />
                    <Verifaction></Verifaction>
                    <ButtonAPP type='primary' block >Login</ButtonAPP>          
                    </div>
                </Col>
                <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps=(state:State)=>{
    return{
        msg:state.messageState.message_info,
    }
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        message_info:(msg:string)=>{dispatch(message_info(msg))},
        message_error:(msg:any)=>{dispatch(message_error(msg))}
    }
}

export const Logins=connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
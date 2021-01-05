import * as React from 'react'
import './login.scss'
import { Button, Input, Row, Col, Form } from 'antd'
import { connect } from 'react-redux'
import { State } from '../../../redux/reducer'
import { Dispatch } from 'redux'
import { Buttons, IButtonsProps, IButtonsState, ButtonAPP } from '../../../field/button'
import { InputsComponent, IptProps, IptState } from '../../../field/input'
import { Verifaction } from './verifaction'

export interface ILoginProps{
  
}

export interface ILoginState{

}

type loginprops= ILoginProps  & IButtonsProps & IptProps ;
type loginstate= ILoginState  & IButtonsState & IptState ;

export class Login extends React.Component<loginprops,loginstate>{

    constructor(props?:loginprops){
        super(props)
    }

    render(){
        return(
            <div className="login">
                <Row>
                <Col span={8}>
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
        
    }
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{

    }
}

export const LoginComponent=connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
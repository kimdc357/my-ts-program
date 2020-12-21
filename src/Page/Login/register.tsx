import { reduce } from 'lodash'
import * as React from 'react'
import { Button, Input, Row, Col, Form } from 'antd'
import { Buttons, IButtonsProps, IButtonsState, ButtonAPP } from '../../Components/Customcontrol/button'
import { InputsComponent, IptProps, IptState } from '../../Components/Customcontrol/input'
import { Verifaction } from '../../Components/Login/verifaction'


export class Register extends React.Component{

    render(){
        return(
            <div className="register">
                <Row>
                <Col span={8}>
                </Col>
                <Col span={8}>
                    <div className="logs">
                    <InputsComponent placeholder="用户名" />
                    <Input.Password placeholder="密码" />
                    <Input.Password placeholder="确认密码" />
                    <Verifaction></Verifaction>
                    <ButtonAPP type='primary' block >注 册</ButtonAPP>  
                    </div>
                </Col>
                <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}
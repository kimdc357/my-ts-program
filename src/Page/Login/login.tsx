import * as React from 'react'
import { Button, Input, Row, Col } from 'antd'

class Login extends React.Component{
    render(){
        return(
            <div className="login">
                <Row>
                <Col span={8}></Col>
                <Col span={8}>
                <br/>
                <br/>
                <br/>
                    <Input placeholder="用户名"/><br/><br/>
                    <Input.Password placeholder="密码" /><br/><br/>
                    <Button type="primary">Login</Button>
                </Col>
                <Col span={8}></Col>
                </Row>
                
            </div>
        )
    }
}

export default Login
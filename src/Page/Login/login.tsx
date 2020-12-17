import * as React from 'react'
import { Button, Input, Row, Col, Form } from 'antd'
import './login.scss'
import { Message, msge, messageprops, messagestate} from '../Message/message'
import { connect } from 'react-redux'
import { State } from '../../Redux/reducer'
import { message_success, message_error, message_info } from '../../Redux/actions'


export interface ILoginProps{
    message_info?:(msg:string)=>void;
    msg?:string;
}

export interface ILoginState{

    message_info?:(msg:string)=>void;
    msg?:string;
    yanzheng?:any,
    yanzhengma?:any,
    bian?:any
}

type msgprops= ILoginProps & messageprops;
type msgstate= ILoginState & messagestate;

// export class Login extends Message<msgprops,msgstate>{
export class Login extends React.Component<ILoginProps,ILoginState>{

    constructor(props?:ILoginProps){
        super(props)

        this.state={
            yanzheng:'',
            yanzhengma:'',
            bian:'error'
        }
    }

    componentDidMount(){
        var result = '';
        var codeNormal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';//字母库
        for (var i =0; i < 4; i ++) {
            result = result + codeNormal[Math.round(Math.random()*(codeNormal.length-1))];
        }//随机获取字母四个

       var yanzheng1= result//.toLowerCase();

       console.log(yanzheng1);

       this.setState({
        yanzheng:yanzheng1
       })
    }
    
    render(){
        return(
            <div className="login">
                <Row>
                <Col span={8}>
                    
                </Col>
                <Col span={8}>
                    <div className="logs">
                    <Input placeholder="用户名" value={this.props.msg}/>
                    <Input.Password placeholder="密码" />
                    <Form>
                    <Form.Item hasFeedback validateStatus={this.state.bian}>
                    <Input placeholder="请输入验证码" name="yanzhengma" onChange={this.onChangeyan.bind(this)} />
                    </Form.Item>  
                    <Input name="yanzheng" disabled value={this.state.yanzheng} /> 
                    </Form>             
                    <Button type="primary" block onClick={()=>this.onClickBtn()}>Login</Button>
                    </div>
                </Col>
                <Col span={8}></Col>
                </Row>
                
            </div>
        )
    }

    onClickBtn(){
        this.props.message_info('登陆中');



    }

    onChangeyan(e:any){
        var yan=e.target.value;
        if(yan.toLowerCase()==this.state.yanzheng.toLowerCase()){
            this.setState({
                bian:"success"
            })
        }else{
            this.setState({
                bian:"error"
            })
        }
    }
}


const mapStateToProps=(state:State)=>{
    return{
        msg:state.messageState.message_info
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        message_info:(msg:string)=>{dispatch(message_info(msg))},
    }
}

export const logins=connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)


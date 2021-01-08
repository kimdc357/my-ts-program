import * as React from 'react'
import { Button, Input, Row, Col, Form } from 'antd'

export interface IVerifactionProps{
    yanzheng?:string,
    yanzhengma?:string,
    bianState?:any
}

export interface IVerifactionState{
    yanzheng?:string,
    yanzhengma?:string,
    bianState?:any
}



export class Verifaction extends React.Component<IVerifactionProps,IVerifactionState>{

    constructor(props?:any){
        super(props);

        this.state={
            yanzheng:'',
            yanzhengma:'',
            bianState:''
        }
    }

    componentDidMount(){

        var result = '';
        var codeNormal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';//字母库
        for (var i =0; i < 4; i ++) {
            result = result + codeNormal[Math.round(Math.random()*(codeNormal.length-1))];
        }//随机获取字母四个

       var yanzheng1= result//.toLowerCase();

       this.setState({
        yanzheng:yanzheng1
       })
    
       
    }

    render(){
        return(
            <div className="verifaction">
                    <Form>
                    <Form.Item hasFeedback validateStatus={this.state.bianState}>
                    <Input placeholder="请输入验证码" name="yanzhengma" onChange={this.onChangeyan.bind(this)} />
                    </Form.Item>  
                    <Input name="yanzheng" disabled value={this.state.yanzheng} /> 
                    </Form>   

            </div>
        )
    }

    onChangeyan(e:any){
        var yan=e.target.value;
        if(yan.toLowerCase()==this.state.yanzheng.toLowerCase()){
            this.setState({
                bianState:"success"
            })
        }else{
            this.setState({
                bianState:"error"
            })
        }
    }

}
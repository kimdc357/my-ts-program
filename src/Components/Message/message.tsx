import * as React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'antd'
import { message_success, message_error, message_info } from '../../redux/action'
import { State } from '../../redux/reducer'


export interface IMessageProps{
    message_success?:(msg:any)=>void;
    message_error?:typeof message_error;
    message_info?:(msg:string)=>void;
    msg?:string;

}

export interface IMessageState{
    message_success?:(msg:any)=>void;
    message_error?:typeof message_error;
    message_info?:(msg:string)=>void;
}

export type messageprops=IMessageProps;
export type messagestate=IMessageState;

export class Message<P extends messageprops,S extends messagestate> extends React.Component<P,S>{
    constructor(props?:P){
        super(props)
    }

    render(){
        return(
            <Alert message={this.props.msg}  closable></Alert>
        )
    }

}

const mapStateToProps=(state:State)=>{
    return{
        msg:state.messageState.message_error
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        message_info:(msg:string)=>{dispatch(message_info(msg))},
        message_success:(msg:any)=>{dispatch(message_success(msg))},
        message_error:(msg:any)=>{dispatch(message_error(msg))}
    }
}

export const Msge=connect(
    mapStateToProps,
    mapDispatchToProps
)(Message)
import * as React from 'react'
import * as ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { Alert, Button, Input } from 'antd';
import { hiddenAlert, showMsg } from '../store/actions'
import { State } from '../reducers';
import  './login.scss'
interface ILoginProps {


}

interface ILoginPageState {

}


class Login extends React.Component<ILoginProps, ILoginPageState> {

    render() {
        return (
            <div className="login">
                <Input></Input>
                <Input type="password"></Input>
                <Button>登录</Button>
                <Button>注册</Button>
            </div>
        )
    }

    onBtnClick() {

    }


}



const mapStateToProps = (state: State) => {
    return {
        isHiddenAlert: state.homepageState.hiddenAlert,
        msg: state.homepageState.message
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        hiddenAlert: (show: boolean) => { dispatch(hiddenAlert(show)) },
        showMsg: (msg: string) => { dispatch(showMsg(msg)) }

    }
}


export const LoginComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)


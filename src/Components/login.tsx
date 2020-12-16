import * as React from 'react'
import { connect } from 'react-redux'
import { Alert, Button, Input } from 'antd';
import { hiddenAlert, showMsg } from '../store/actions'
import { State } from '../reducers';
import { BaseComponent, basecomponentprops, basecomponentstate } from './basecomponent'
import './login.scss'
interface ILoginProps {

    visable?: boolean;

}

interface ILoginState {

}

type baseProps = ILoginProps & basecomponentprops;
type baseState = ILoginState & basecomponentstate;



class Login extends BaseComponent<baseProps, baseState> {
    constructor(props?: baseProps) {
        super(props);
    }
    render() {
        return (
            <BaseComponent clssName="login">
                <div className={this.getClassName("login")}>
                    <Input></Input>
                    <Input type="password"></Input>
                    <Button onClick={()=>this.onBtnClick()}>登录</Button>
                    <Button>注册</Button>
                </div>
            </BaseComponent>

        )
    }

    onBtnClick() {
        console.log("111")
        this.props.showMsg("dddddd");
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


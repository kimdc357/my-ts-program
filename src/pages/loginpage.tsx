import * as React from 'react'
import * as ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { Alert, Button } from 'antd';
import { hiddenAlert, showMsg } from '../store/actions'
import { State } from '../reducers';
import { LoginComponent } from '../components/login';
import { BasePage, baseP, basepageprops, basepagestate } from './basepage'
import './loginpage.scss'
import { BaseComponent } from '../components/basecomponent';

export interface ILoginPageProps {
    isHiddenAlert?: boolean;
    hiddenAlert?: (hid: boolean) => void;
    showMsg?: typeof showMsg;
    msg?: string;
    alertMsg?: (msg: string) => void;

}

export interface ILoginPageState {
    hiddenAlert?: (hid: boolean) => void;
    showMsg?: typeof showMsg;
}


export type loginpageprops = basepageprops;
export type loginpagestate = basepagestate;




class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {

    constructor(props:any){
        super(props)
    }


    render() {
        return (
            <BasePage {...this.props}>
                {/* {this.props.isHiddenAlert && (
                    <Alert message={this.props.msg} closable></Alert>
                )} */}

                {/* <div >
                    <Button onClick={() => this.props.showMsg("22222222")}>22222222222</Button>

                </div> */}
                <div className="root">
                    <LoginComponent {...this.props}></LoginComponent>
                </div>
            </BasePage>



        )
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


export const loginP = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)
import * as React from 'react'
import * as ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { Alert, Button } from 'antd';
import { hiddenAlert, showMsg } from '../store/actions'
import { State } from '../reducers';
import { LoginComponent } from '../components/login';
import  './loginpage.scss'
interface IHomePageProps {
    isHiddenAlert: boolean;
    hiddenAlert: (hid: boolean) => void;
    showMsg: typeof showMsg;
    msg: string;

}

interface IHomePageState {

    hiddenAlert: (hid: boolean) => void;
    showMsg: typeof showMsg;

}


class LoginPage extends React.Component<IHomePageProps, IHomePageState> {

    render() {
        return (
            <div className="root">

                 <LoginComponent></LoginComponent>

            </div>
        )
    }

    onBtnClick() {
        this.props.showMsg("asdsadsad");
        this.props.hiddenAlert(!this.props.isHiddenAlert);
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


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)


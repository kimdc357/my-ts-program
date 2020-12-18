import * as React from 'react'
import { connect } from 'react-redux'
import { Alert, Button } from 'antd';
import { hiddenAlert, showMsg } from '../store/actions'
import { State } from '../reducers';

export interface IBasePageProps {
    isHiddenAlert?: boolean;
    hiddenAlert?: (hid: boolean) => void;
    showMsg?: typeof showMsg;
    message?: string;

}

export interface IBasePageState {
    hiddenAlert?: (hid: boolean) => void;
    showMsg?: typeof showMsg;
}

export type basepageprops=IBasePageProps;
export type basepagestate=IBasePageState;


export  class BasePage<P extends basepageprops, S extends basepagestate> extends React.Component<P, S>{

    private _className = "program-page";


    constructor(props?: P) {
        super(props)
    }
    render() {
        return (
            <>
                {this.props.isHiddenAlert && (
                    <Alert message={this.props.message} closable onClose={()=>{this.hidAlert()}}></Alert>
                )}
                {this.props.children}

            </>

        )

    }

    alertMsg(msg: string) {
        this.props.showMsg(msg);

    }

    hidAlert() {
        this.props.hiddenAlert(false);

    }

}
const mapStateToProps = (state: State) => {
    return {
        isHiddenAlert: state.homepageState.hiddenAlert,
        message: state.homepageState.message
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        hiddenAlert: (show: boolean) => { dispatch(hiddenAlert(show)) },
        showMsg: (msg: string) => { dispatch(showMsg(msg)) }

    }
}


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(BasePage)
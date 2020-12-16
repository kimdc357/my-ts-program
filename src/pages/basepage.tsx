import * as React from 'react'
import { connect } from 'react-redux'
import { Alert, Button } from 'antd';
import { hiddenAlert, showMsg } from '../store/actions'
import { State } from '../reducers';

export interface IBasePageProps {
    isHiddenAlert?: boolean;
    hiddenAlert?: (hid: boolean) => void;
    showMsg?: typeof showMsg;
    msg?: string;
    alertMsg?: (msg: string) => void;

}

export interface IBasePageState {
    hiddenAlert?: (hid: boolean) => void;
    showMsg?: typeof showMsg;
}

export type basepageprops=IBasePageProps;
export type basepagestate=IBasePageState;


export class BasePage<P extends basepageprops, S extends basepagestate> extends React.Component<P, S>{

    private _className = "program-page";


    constructor(props?: P) {
        super(props)
    }
    render() {
        return (
            <>
                {this.props.isHiddenAlert && (
                    <Alert message={this.props.msg} closable></Alert>
                )}

                <div className={this._className}>
                    <Button onClick={() => this.alertMsg("222")}>登录1111</Button>
                    {this.props.children}
                </div>
            </>

        )

    }

    alertMsg(msg: string) {
        this.props.showMsg(msg);

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


export const baseP = connect(
    mapStateToProps,
    mapDispatchToProps
)(BasePage)
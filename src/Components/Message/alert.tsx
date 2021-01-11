import * as React from 'react'
import { Alert } from 'antd'
import { connect } from 'react-redux'
import { rootState } from "../../redux/reducer"
import { alertMessage } from '../../redux/page/action'
import { IAlertInfo } from '../../redux/page/reducer'

export interface IAlertProps {
    alert?: IAlertInfo
    alert_message?: (alert: IAlertInfo) => void
}

export interface IAlertState {
    alert?: IAlertInfo
    alert_message?: (alert: IAlertInfo) => void
}


export class BaseAlert<P extends IAlertProps, S extends IAlertState> extends React.Component<P, S>{

    constructor(props?: P) {
        super(props)
    }

    render() {
        return (
            <div>
                <Alert message={this.props.alert?.msg} type={this.props.alert?.types} closable ></Alert>
            </div>
        )
    }
}

const mapStateToProps = (state: rootState) => {
    return {
        alert: state.pageState.alert
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        alertMessage: (alert: IAlertInfo) => { dispatch(alertMessage(alert)) }
    }
}

export const AlertComponents = connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseAlert)
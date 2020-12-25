import * as React from 'react'
import { Alert} from 'antd'
import { connect } from 'react-redux'
import { State } from '../../Redux/reducer'
import { alert_info, alert_success, alert_error, alert_warning } from '../../Redux/actions'

export interface IAlertProps{
    alert?:{
        msg:string,
        types:any
    }
    alert_info?:(alert:any)=>void
    alert_success?:(alert:any)=>void
    alert_error?:(alert:any)=>void
    alert_warning?:(alert:any)=>void
}

export interface IAlertState{
    alert_info?:(alert:any)=>void
    alert_success?:(alert:any)=>void
    alert_error?:(alert:any)=>void
    alert_warning?:(alert:any)=>void
}


export class Alerts extends React.Component<IAlertProps,IAlertState>{

    constructor(props?:IAlertProps){
        super(props)
    }

    render(){
        return(
            <div>
                <Alert message={this.props.alert.msg} type={this.props.alert.types} closable></Alert>
            </div>
        )
    }
}

const mapStateToProps=(state:State)=>{
    return{
        alert:state.alertState.alert
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        alert_info:(alert:any)=>{dispatch(alert_info(alert))},
        alert_success:(alert:any)=>{dispatch(alert_success(alert))},
        alert_error:(alert:any)=>{dispatch(alert_error(alert))},
        alert_warning:(alert:any)=>{dispatch(alert_warning(alert))}
    }
}

export const Alertss=connect(
    mapStateToProps,
    mapDispatchToProps
)(Alerts)
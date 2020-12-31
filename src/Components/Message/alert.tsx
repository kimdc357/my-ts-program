import * as React from 'react'
import { Alert} from 'antd'
import { connect } from 'react-redux'
import { State } from '../../redux/reducer'
import { alert_info, alert_success, alert_error, alert_warning } from '../../redux/action'

export interface IAlertProps{
    alert?:{
        msg:'',
        types:any
    }
    alert_info?:(alert:any)=>void
    alert_success?:(alert:any)=>void
    alert_error?:(alert:any)=>void
    alert_warning?:(alert:any)=>void
}

export interface IAlertState{
    alert?:{
        msg:'',
        types:any
    }
    alert_info?:(alert:any)=>void
    alert_success?:(alert:any)=>void
    alert_error?:(alert:any)=>void
    alert_warning?:(alert:any)=>void
}


export class BaseAlert<P extends IAlertProps,S extends IAlertState> extends React.Component<P,S>{

    constructor(props?:P){
        super(props)
    }

    render(){
        console.log('alert   alert   alert   alert   alert   ')
        //console.log(this.props.alert)
        console.log(this.props.alert.msg)
        console.log(this.props.alert.types)
        return(
            <div>
                <Alert message={this.props.alert.msg} type={this.props.alert.types} closable ></Alert>
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

export const AlertComponents=connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseAlert)
import { ALERT_INFO, ALERT_SUCCESS, ALERT_ERROR, ALERT_WARNING } from './action'

export const alertstate={
    alert:{
        msg:'',
        types:''
    }
}

export interface IAlertState{
    alert:{
        msg:string,
        types:any
    }
}

const alert=(state=alertstate,action:any)=>{
    switch (action.type){
        case ALERT_INFO:
            state.alert.msg=action.data
            state.alert.types='info'
            return{...state}
        case ALERT_SUCCESS:
            state.alert.msg=action.data
            state.alert.types='success'
            return{...state}
        case ALERT_ERROR:
            state.alert.msg=action.data
            state.alert.types='error'
            return{...state}
        case ALERT_WARNING:
            state.alert.msg=action.data
            state.alert.types='warning'
            return{...state}  
        default:
            return state
    }
}

export default alert
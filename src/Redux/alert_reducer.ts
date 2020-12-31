import { fromPairs } from 'lodash'
import { ALERT_INFO, ALERT_SUCCESS, ALERT_ERROR, ALERT_WARNING } from './action_types'
import { produce } from 'Immer'


export const alertstate={
    alert:{
        msg:'',
        types:''
    }
}

export interface IAlertState{
    alert:{
        msg:'',
        types:any
    }
}

const alert=(state=alertstate,action:any)=>{
    return produce(state,draftState=>{
        switch (action.type){
            case ALERT_INFO:
                draftState.alert.msg=action.data
                draftState.alert.types='info'
                return draftState
            case ALERT_SUCCESS:
                state={alert:{msg:'',types:''}}
                state['alert']['msg']=action.data
                state['alert']['types']='success'
                return {...state}
                // state.alert.msg=action.data
                // state.alert.types='success'
                // return{...state}
            case ALERT_ERROR:
                draftState.alert.msg=action.data
                draftState.alert.types='error'
                return draftState
            case ALERT_WARNING:
                state.alert.msg=action.data
                state.alert.types='warning'
                return{...state}  
            default:
                return draftState
        }
    })
}

export default alert
import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter,RouterState } from 'connected-react-router'
import {IusernameState, register1,register} from './user_reducer'
import alert,{IAlertState} from './alert_reducer'



const rootReducer=(history:History)=>combineReducers({
    registerState:register,
    registerState1:register1,
    alertState:alert,
    router: connectRouter(history)
})

export interface State{
    registerState:IusernameState,
    registerState1:IusernameState,
    alertState:IAlertState,
    router: RouterState
}


export default rootReducer
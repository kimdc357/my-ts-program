import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter,RouterState } from 'connected-react-router'
import {IusernameState, register1,register,login} from './user_reducer'
import alert,{IAlertState} from './alert_reducer'



const rootReducer=(history:History)=>combineReducers({
    registerState:register,
    registerState1:register1,
    loginState:login,
    alertState:alert,
    router: connectRouter(history)
})

export interface State{
    registerState:IusernameState,
    registerState1:IusernameState,
    loginState:IusernameState,
    alertState:IAlertState,
    router: RouterState
}


export default rootReducer
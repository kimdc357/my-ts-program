import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter,RouterState } from 'connected-react-router'
import message,{IMessageState} from './message_reducer'
import register,{IusernameState} from './register_reducer'
import alert,{IAlertState} from './alert_reducer'



const rootReducer=(history:History)=>combineReducers({
    messageState:message,
    registerState:register,
    alertState:alert,
    router: connectRouter(history)
})

export interface State{
    messageState:IMessageState,
    registerState:IusernameState,
    alertState:IAlertState,
    router: RouterState
}


export default rootReducer
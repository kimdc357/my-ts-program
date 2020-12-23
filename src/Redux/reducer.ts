import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter,RouterState } from 'connected-react-router'
import message,{IMessageState} from './message_reducer'
import register,{IusernameState} from './register_reducer'



const rootReducer=(history:History)=>combineReducers({
    messageState:message,
    registerState:register,
    router: connectRouter(history)
})

export interface State{
    messageState:IMessageState,
    registerState:IusernameState,
    router: RouterState
}


export default rootReducer
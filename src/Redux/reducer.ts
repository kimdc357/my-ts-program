import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter,RouterState } from 'connected-react-router'
import message,{IMessageState} from './message_reducer'



const rootReducer=(history:History)=>combineReducers({
    messageState:message,
    router: connectRouter(history)
})

export interface State{
    messageState:IMessageState,
    router: RouterState
}


export default rootReducer
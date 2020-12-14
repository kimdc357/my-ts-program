import { MESSAGE_LIST } from './action'
import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter,RouterState } from 'connected-react-router'



const rootReducer=(history:History)=>combineReducers({
    router: connectRouter(history)

})

export interface State{
    router: RouterState
}





export default rootReducer
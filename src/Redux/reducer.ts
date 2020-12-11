import { MESSAGE_LIST } from './action'
import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter,RouterState } from 'connected-react-router'



const defaults = {
    name:'',
    list:[''],
}

const rootReducer=(history:History)=>combineReducers({
    router: connectRouter(history)
    
})

export interface State{
    router: RouterState
}


function message_list(state=defaults,action:any){

    if(action.typp===MESSAGE_LIST){

        return state;
    }
    return state;
}



export default rootReducer
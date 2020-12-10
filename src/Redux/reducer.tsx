import { MESSAGE_LIST } from './action'
import { combineReducers } from 'redux'

const defaults = {
    name:'',
    list:[''],
}



function message_list(state=defaults,action:any){

    if(action.typp===MESSAGE_LIST){

        return state;
    }

    return state;
}


export default combineReducers({
    message_list
})
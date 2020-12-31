import { MESSAGE_INFO, MESSAGE_SUCCESS, MESSAGE_ERROR} from './action_types'

export const messageState={
    message_info:'',
    message_success:'',
    message_error:''
}

export interface IMessageState{
    message_info:string,
    message_success:string,
    message_error:string
}

const message=(state=messageState,action:any)=>{
    switch(action.type){
        case MESSAGE_INFO:
            state.message_info=action.data
            return {...state};
        case MESSAGE_SUCCESS:
            state.message_success=action.data
            return {...state}
        case MESSAGE_ERROR:
            state.message_error=action.data
            return {...state}
        default:
            return state
    }
}

export default message
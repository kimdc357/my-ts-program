import { MESSAGE_INFO,MESSAGE_SUCCESS,MESSAGE_ERROR,REGISTER } from './action'

export const message_info=(msg:any)=>({
    type:MESSAGE_INFO,
    data:msg
})

export const message_success=(msg:any)=>({
    type:MESSAGE_SUCCESS,
    data:msg
})

export const message_error=(msg:any)=>({
    type:MESSAGE_ERROR,
    data:msg
})

export const register=(user:any)=>({
    type:REGISTER,
    data:user
})
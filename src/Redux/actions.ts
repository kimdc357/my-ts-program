import { MESSAGE_INFO,MESSAGE_SUCCESS,MESSAGE_ERROR,REGISTER, ALERT_INFO, ALERT_SUCCESS, ALERT_WARNING, ALERT_ERROR } from './action'

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

export const register=(user:{
    user:any,
    resolve:(value?:any)=>void;
    reject:(value?:any)=>void;
})=>({
    type:REGISTER,
    data:user
})

export const alert_info=(alert:any)=>({
    type:ALERT_INFO,
    data:alert
})

export const alert_success=(alert:any)=>({
    type:ALERT_SUCCESS,
    data:alert
})

export const alert_error=(alert:any)=>({
    type:ALERT_ERROR,
    data:alert
})

export const alert_warning=(alert:any)=>({
    type:ALERT_WARNING,
    data:alert
})
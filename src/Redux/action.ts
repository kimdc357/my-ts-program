import {REGISTER, ALERT_INFO, ALERT_SUCCESS, ALERT_WARNING, ALERT_ERROR, REGISTER1,LOGIN } from './action_types'
import {IUserInfo} from './user_reducer'

export const register=(user:{
    user:IUserInfo,
    resolve:(value?:any)=>void;
    reject:(value?:any)=>void;
})=>({
    type:REGISTER,
    data:user
})

export const login=(user:{
    user:IUserInfo,
    resolve:(value?:any)=>void;
    reject:(value?:any)=>void;
})=>({
    type:LOGIN,
    data:user
})

export const register1=(user:{
    user:IUserInfo,
    resolve:(value?:any)=>void;
    reject:(value?:any)=>void;
})=>({
    type:REGISTER1,
    data:user
})

export const alert_info=(alert:string)=>({
    type:ALERT_INFO,
    data:alert
})

export const alert_success=(alert:string)=>({
    type:ALERT_SUCCESS,
    data:alert
})

export const alert_error=(alert:string)=>({
    type:ALERT_ERROR,
    data:alert
})

export const alert_warning=(alert:string)=>({
    type:ALERT_WARNING,
    data:alert
})
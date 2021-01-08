import {REGISTER, ALERT_INFO, ALERT_SUCCESS, ALERT_WARNING, ALERT_ERROR,LOGIN,HEAD_MENU,USER_INFO } from './action_types'
import {IUserInfo} from './user_reducer'
import {IMenuInfo} from './menu_reducer'

export const register=(user:{
    user:IUserInfo,
    resolve:(value?:any)=>void;
    reject:(value?:any)=>void;
})=>({
    type:REGISTER,
    data:user
})

export const login=(userid:string,pwd:string)=>({
    type:LOGIN,
    userid:userid,
    pwd:pwd
})

export const hedamenu=(menu:{
    resolve:(menu?:IUserInfo)=>void;
})=>({
    type:HEAD_MENU,
    data:menu
})

export const user_info=(user:{
    user:IUserInfo,
})=>({
    type:USER_INFO,
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
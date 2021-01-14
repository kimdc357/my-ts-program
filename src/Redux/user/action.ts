import {REGISTER, LOGIN,USER_INFO } from './types'

import {IUserInfo} from './reducer'


export const register=(
    user:IUserInfo, 
    resolve?:(value?:any)=>void,
    reject?:(value?:any)=>void
)=>({
    type:REGISTER,
    user
})

export const login=(userid:string,pwd:string)=>({
    type:LOGIN,
    userid,
    pwd
})

export const setUserInfo=(
    user:IUserInfo
)=>({
    type:USER_INFO,
    data:user
})

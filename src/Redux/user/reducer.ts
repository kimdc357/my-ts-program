import { REGISTER,LOGIN,USER_INFO } from './types'
import { produce } from 'immer'
import { Reducer } from 'redux'

export interface UserState{
    userInfo:IUserInfo
}


export interface IUserInfo{
    username?:string,
    password?:string
    phone?:string,
    email?:string,
}


export const userstate:IusernameState={
   userInfo:{}
}

export interface IusernameState{
    userInfo:IUserInfo
}

export const userReducer:Reducer<IusernameState>=(state=userstate,action)=>
     produce(state,draftState=>{
        switch(action.type){
            case USER_INFO:
            case REGISTER:
            case LOGIN:
                draftState.userInfo=action.data
                return draftState
            default :
                return draftState
        }
    })
 
import { REGISTER,LOGIN,USER_INFO } from './action_types'
import { produce } from 'immer'

export interface IUserInfo{
    username:string,
    password:string
}

export interface IRequstUser{
    
}

export const userstate={
    user:{}
}

export interface IusernameState{
    user:{}
}

export const userinfo=(state=userstate,action:any)=>{
    return produce(state,draftState=>{
        switch(action.type){
            case USER_INFO:
                draftState.user=action.data
                return draftState
            default :
                return draftState
        }
    })
}

export const  register=(state=userstate,action:any)=>{
    return produce(state,draftState=>{
        switch(action.type){
            case REGISTER:
                draftState.user=action.data
                return draftState
            default :
                return draftState
        }
    })
}

export const login=(state=userstate,action:any)=>{
    return produce(state,draftState=>{
        switch(action.type){
            case LOGIN:
                draftState.user=action.data
                return draftState
            default :
                return draftState
        }
    }) 
}



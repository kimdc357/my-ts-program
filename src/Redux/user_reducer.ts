import { REGISTER,LOGIN } from './action_types'
import { produce } from 'immer'

export interface IUserInfo{
    username:string,
    password:string
}

export const userstate={
    user:{}
}

export interface IusernameState{
    user:{}
}

export const  register=(state=userstate,action:any)=>{
    switch(action.type){
        case REGISTER:
            state.user=action.data
            return {...state,users:action.data}
        default :
            return state
    }
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


export const  register1=(state=userstate,action:any)=>{
    switch(action.type){
        case REGISTER:
            state.user=action.data
            return {...state,users:action.data}
        default :
            return state
    }
}


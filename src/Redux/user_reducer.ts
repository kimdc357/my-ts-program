import { REGISTER } from './action_types'

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


export const  register1=(state=userstate,action:any)=>{
    switch(action.type){
        case REGISTER:
            state.user=action.data
            return {...state,users:action.data}
        default :
            return state
    }
}


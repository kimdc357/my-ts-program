import { REGISTER } from './action'


export const userstate={
    user:{}
}

export interface IusernameState{
    user:{}
}

const  register=(state=userstate,action:any)=>{
    switch(action.type){
        case REGISTER:
            state.user=action.data
            return {...state,users:action.data}
        default :
            return state
    }
}

export default register
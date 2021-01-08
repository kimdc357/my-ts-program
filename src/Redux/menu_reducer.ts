import { HEAD_MENU } from './action_types'
import { produce } from 'Immer'

export interface IMenuInfo{
    id:Number,
    name:String,
    url:String,
    pid:Number,
    isLeaf:Number,
    status:Number,
    seq:Number
}

export const menustate={
    menu : {
        id:0,
        name:'',
        url:'',
        pid:0,
        isLeaf:0,
        status:0,
        seq:0
    }
}

export interface IMenuState{
    menu:IMenuInfo
}

export const menu=(state=menustate,action:any)=>{
    return produce(state,draftState=>{
        switch(action.type){
            case HEAD_MENU:
                draftState.menu=action.data;
                return draftState
            default :
                return draftState
        }
    })
}


import { VERIFACTION,ALET_MESSAGE,HEAD_MENU } from './types'
import { produce } from 'Immer'


export interface PageState{
    alert:IAlertInfo,
    verifactionResult:boolean,
    headMenuResult:IHeadMenuInfo
}


export interface IAlertInfo{
    msg:string,
    types?: 'success' | 'info' | 'warning' | 'error';
}

export interface IHeadMenuInfo{
    id:number,
    name:string,
    url:string,
    pid:number,
    isLeaf:number,
    status:number,
    seq:number
}


export const alertstate={
    alert:{
        msg:'',
        types:''
    },
    verifactionResult:true,
    headMenuResult:{}
}


export const pageReducer=(state=alertstate,action:any)=>{
    return produce(state,draftState=>{
        switch (action.type){
            case ALET_MESSAGE:
                draftState.alert.msg=action.msg
                draftState.alert.types=action.types
                return draftState
            case VERIFACTION:
                if(action.verifaction==action.currentVerifaction){
                    draftState.verifactionResult=false;
                }else{
                    draftState.verifactionResult=true;
                }
                return draftState
            case HEAD_MENU:
                draftState.headMenuResult=action.headMenuResult
                return draftState
            default:
                return draftState
        }
    })
}

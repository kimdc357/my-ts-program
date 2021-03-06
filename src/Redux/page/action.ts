import { VERIFACTION,ALET_MESSAGE,HEAD_MENU,HEAD_TEST,MOVING_MENU,MOVING_INFO} from './types'
import { IAlertInfo,IHeadMenuInfo } from './reducer'

export const alertMessage=(alert:IAlertInfo)=>({
    type:ALET_MESSAGE,
    msg:alert.msg,
    types:alert.types
})

export const checkVerifactions=(currentVerifaction:string,verifaction:string)=>({
    type:VERIFACTION,
    currentVerifaction,
    verifaction
})

export const headMenu=(menu:{
    resolve?:(value?:any)=>void
}
)=>({
    type:HEAD_MENU,
    data:menu
})

export const headMenuInfo=(menu:any)=>({
    type:HEAD_TEST,
    data:menu
})

export const movingMenu=(pid:number,disting:string)=>({
    type:MOVING_MENU,
    pid,
    disting
})

export const movingMenuInfo=(menu:any)=>({
    type:MOVING_INFO,
    data:menu
})
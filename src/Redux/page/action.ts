import { VERIFACTION,ALET_MESSAGE,HEAD_MENU } from './types'
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
    resolve?:(value?:IHeadMenuInfo)=>void
}
)=>({
    type:HEAD_MENU,
    data:menu
})
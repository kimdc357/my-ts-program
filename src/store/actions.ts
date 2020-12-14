import { MESSAGE,HIDDENALERT } from './types'

export const showMsg=(msg:string)=>({
    type:MESSAGE,
    data:msg
})

export const hiddenAlert=(hidden:boolean)=>({
    type:HIDDENALERT,
    data:hidden
})
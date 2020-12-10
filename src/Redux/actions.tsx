import { MESSAGE_LIST } from './action'

export const messageAction=(msg:any)=>({
    type:MESSAGE_LIST,
    data:msg
})
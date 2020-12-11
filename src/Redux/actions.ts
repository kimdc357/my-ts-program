import { MESSAGE_LIST } from './action'

export const messageAction=(msg:string)=>({
    type:MESSAGE_LIST,
    data:msg
})
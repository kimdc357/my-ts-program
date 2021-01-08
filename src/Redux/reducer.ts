import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter,RouterState } from 'connected-react-router'
import {IusernameState,register,login,userinfo} from './user_reducer'
import alert,{IAlertState} from './alert_reducer'
import {IMenuState,menu} from './menu_reducer'



const rootReducer=(history:History)=>combineReducers({
    registerState:register,
    loginState:login,
    userinfoState:userinfo,
    menuState:menu,
    alertState:alert,
    router: connectRouter(history)
})

export interface State{
    registerState:IusernameState,
    loginState:IusernameState,
    userinfoState:IusernameState,
    menuState:IMenuState,
    alertState:IAlertState,
    router: RouterState
}


export default rootReducer
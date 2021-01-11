import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'
import { userReducer, UserState } from './user/reducer'
import { pageReducer, PageState } from './page/reducer'



const rootReducer = (history: History) => combineReducers({
    userinfoState: userReducer,
    pageState: pageReducer,
    router: connectRouter(history)
})

export interface rootState{
    pageState:PageState,
    userinfoState:UserState,
}


export default rootReducer



// type rootState=  PageState & UserState ;
// export {rootState} 


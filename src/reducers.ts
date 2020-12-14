import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import homepage, { IHomePageState } from './store/reducer'

const rootReducer = (history: History) => combineReducers({
    homepageState: homepage,
    router: connectRouter(history)
})

export interface State {
    homepageState: IHomePageState,
    router: RouterState
}

export default rootReducer
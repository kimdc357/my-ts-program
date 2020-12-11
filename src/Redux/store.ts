import { createStore , applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history=createBrowserHistory();

// const createsaga=createSagaMiddleware();

// const sagas = applyMiddleware(createsaga);

export default function createstore(preloaded?:any){
    const roters=applyMiddleware(routerMiddleware(history));

    const store=createStore(rootReducer(history),preloaded,roters)


    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducer', () => {
            store.replaceReducer(rootReducer(history));
        });
      }

    return store
}

// const roters=applyMiddleware(routerMiddleware(history));

// const store=createStore(rootReducer(history),roters)

// export default store
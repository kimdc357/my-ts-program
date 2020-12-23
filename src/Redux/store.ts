import { createStore , applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import mysaga from './sagas'


export const history=createBrowserHistory();


// const createsaga=createSagaMiddleware();

// const sagas = applyMiddleware(createsaga);

export default function createstore(preloaded?:any){
    //const roters=applyMiddleware(routerMiddleware(history));

    const sagaMiddleware = createSagaMiddleware()

    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

    const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

    const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


    // const store=createStore(
    //     rootReducer(history),
    //     preloaded,
    //     composeEnhancer(applyMiddleware(routerMiddleware(history),),),)
    
    const store=createStore(
            rootReducer(history),
            preloaded,
            composeEnhancers(applyMiddleware(sagaMiddleware,routerMiddleware(history)))
            )
           // composeEnhancer(applyMiddleware(routerMiddleware(history),sagaMiddleware),applyMiddleware(sagaMiddleware)),)


    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('./reducer', () => {
    //         store.replaceReducer(rootReducer(history));
    //     });
    //   }
    sagaMiddleware.run(mysaga)

    return store
}

// const roters=applyMiddleware(routerMiddleware(history));

// const store=createStore(rootReducer(history),roters)

// export default store
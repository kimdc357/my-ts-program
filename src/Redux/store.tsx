import { fromPairs } from "lodash";
import { createStore , applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'


const createsaga=createSagaMiddleware();

const sagas = applyMiddleware(createsaga);

const store=createStore(reducer,sagas)

export default store
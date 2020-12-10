import { takeEvery } from 'redux-saga/effects'
import { MESSAGE_LIST } from './action'


//generator
function* mysaga(){
    yield takeEvery(MESSAGE_LIST,message)
} 

function* message(){
    yield console.log('11111111111')
}

export default mysaga
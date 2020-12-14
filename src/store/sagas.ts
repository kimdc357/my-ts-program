import { takeEvery } from 'redux-saga/effects'
import { MESSAGE } from './types'


//generator
function* mysaga(){
    yield takeEvery(MESSAGE,message)
} 

function* message(){
    yield console.log('11111111111')
}

export default mysaga
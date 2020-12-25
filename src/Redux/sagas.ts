import { takeEvery, put, takeLatest, select,all,call,delay,fork } from 'redux-saga/effects'
import { REGISTER } from './action'
import { register,message_info, alert_info } from './actions'
import { get_data, register_data} from '../Data/axios'
import axios from 'axios'

function* register_test(){
    const {data:{data:{user}}} =yield axios.get('http://localhost:4050')
    console.log(user)
    const list=user[0].username
    const users={
        username:user[0].username,
        password:user[0].password
    }
    console.log('777777777777')
    const action =alert_info(user[0].username)
    //const action =message_info(users)
    yield put(action)

    console.log('888888888888888')
}

function* register_saga(){
    console.log('666666666666666666')
    //yield delay(3000)
    
    yield fork(register_test)
}

//generator
function* registers(){

    yield takeEvery('*', function* logger(action) {
        const state = yield select()
    
        console.log('action', action)
        console.log('state after', state)
      })

    yield takeEvery(REGISTER,register_saga)
    //yield takeLatest(REGISTER, register_saga);
} 

export default function* mysaga(){
    yield all([
        registers()
    ])
}
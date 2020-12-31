import { takeEvery, put, takeLatest, select,all,call,delay,fork } from 'redux-saga/effects'
import { REGISTER,REGISTER1 } from './action_types'
import { register,message_info, alert_info, alert_error } from './action'
import { get_data, register_data} from '../data/axios'
import axios from 'axios'


function fn(id:string):Promise<any> {
    var r=axios.get('http://localhost:4050')
    return r;
}

function* register_test(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                
            })
        }, 1000);
    });
    
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
    try {

        yield put(action);
     } catch (error) {
        yield put({type: "ALERT_ERROR", error});
     }

    console.log('888888888888888')

    

}

function* register_saga(d:any){
    console.log('666666666666666666')
    //yield delay(3000)
    //var reg:any=yield call(fn,'123');

    //var {data:{data:{user}}}=reg
    var action =alert_info('OK')
    yield put(action);
    var action =alert_error('error')
    yield put(action);
    d.data.resolve('12345');
   
    // const action =alert_info(user[0].username)
    // //const action =message_info(users)
    // yield put(action)
    // try {

    //     yield put(action);
    //  } catch (error) {
    //     yield put({type: "ALERT_ERROR", error});
    //  }

    //yield fork(register_test)
}

function* register_saga1(d:any){
    console.log('666666666666666666')
    //yield delay(3000)
    //var reg:any=yield call(fn,'123');

    //var {data:{data:{user}}}=reg
    var action =alert_info('OK')
    yield put(action);

    d.data.resolve('12345');
   
    // const action =alert_info(user[0].username)
    // //const action =message_info(users)
    // yield put(action)
    // try {

    //     yield put(action);
    //  } catch (error) {
    //     yield put({type: "ALERT_ERROR", error});
    //  }

    //yield fork(register_test)
}

//generator
function* registers(){

    yield takeEvery('*', function* logger(action) {
        const state = yield select()
    
        console.log('action', action)
        console.log('state after', state)
      })

      yield takeEvery(REGISTER,register_saga)
      yield takeEvery(REGISTER1,register_saga1)
    //yield takeLatest(REGISTER, register_saga);
} 

export default function* mysaga(){
    yield all([
        registers()
    ])
}
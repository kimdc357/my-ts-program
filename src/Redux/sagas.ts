import { takeEvery, put, takeLatest, select,all,call,delay,fork } from 'redux-saga/effects'
import { REGISTER,REGISTER1,LOGIN } from './action_types'
import { register, alert_info, alert_error, alert_success } from './action'
import * as Axios from '../data/axios'
import axios from 'axios'
import { IUserInfo } from './user_reducer'



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
    // console.log(d.data.user.username)
    // console.log(d.data.user.password)
   
    //yield delay(3000)
    let useradd:IUserInfo={username:d.data.user.username,password:d.data.user.password}
    //let useradd={username:'admin123',password:'admin123'};

    var res:any=yield call(Axios.register_axios,useradd) 

    //var reg:any=yield call(fn,'123');

    var data=res
    // console.log('+++++++++++++++++++++')
    console.log(data)
    console.log(data.data.code)

    if(data.data.code==0){
        var action =alert_info('OK')
        yield put(action);
    }else{
        var action =alert_error(data.data.msg)
        yield put(action);
    }

    
    
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

function* login_saga(dt:any){
    let useradd:IUserInfo={username:dt.data.user.username,password:dt.data.user.password}

    var res:any=yield call(Axios.login_axios,useradd)

    if(res.data.code=='1'){
        var action=alert_error(res.data.msg)
        yield put(action);
    }else{
        var action =alert_success('OK')
        yield put(action);
    }

    dt.data.resolve(res)
}

function* register_saga1(d:any){
    console.log('666666666666666666')
    var action =alert_info('OK')
    yield put(action);

    d.data.resolve('12345');
   
}

//generator
function* registers(){

    yield takeEvery('*', function* logger(action) {
        const state = yield select()
    
        console.log('action', action)
        console.log('state after', state)
      })

      yield takeEvery(REGISTER,register_saga)
      yield takeEvery(LOGIN,login_saga)
      yield takeEvery(REGISTER1,register_saga1)
    //yield takeLatest(REGISTER, register_saga);
} 

export default function* mysaga(){
    yield all([
        registers()
    ])
}
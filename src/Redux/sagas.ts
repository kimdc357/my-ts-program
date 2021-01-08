import { takeEvery, put, takeLatest, select,all,call,delay,fork } from 'redux-saga/effects'
import { REGISTER,LOGIN,HEAD_MENU } from './action_types'
import { alert_info, alert_error, alert_success,user_info } from './action'
import * as Axios from '../data/axios'
import { IUserInfo } from './user_reducer'


function* register_saga(d:any){

    const useradd:IUserInfo={username:d.data.user.username,password:d.data.user.password}

    let res:any=yield call(Axios.register_axios,useradd) 
    let data=res


    if(data.data.code==0){
        sessionStorage.setItem('user',JSON.stringify(data.data.user))
        yield put(alert_info('OK'));
    }else{
        yield put(alert_error(data.data.msg));
    }

    d.data.resolve('12345');

}

function* login_saga(dt:any){

    let useradd:IUserInfo={username:dt.data.userid,password:dt.data.pwd}
    let res:any=yield call(Axios.login_axios,useradd)
    
    if(res.data.code=='0'){
        yield put(user_info(res.data.data.user));
        yield put(alert_success('OK'));
    }else{
        yield put(alert_error(res.data.msg));
    }

    //dt.data.resolve(res)
}

function* head_menu_saga(dt:any){
    let res:any=yield call(Axios.head_menu_axios)
    dt.data.resolve(res)
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
      yield takeEvery(HEAD_MENU,head_menu_saga)

} 

export default function* mysaga(){
    yield all([
        registers()
    ])
}
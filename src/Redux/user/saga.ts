import { takeEvery, put, takeLatest, select, all, call, delay, fork } from 'redux-saga/effects'
import { REGISTER, LOGIN } from './types'
import { register,setUserInfo,login} from '../user/action'
import { alertMessage } from '../page/action'
import * as Axios from '../../data/axios'
import { IUserInfo } from '../user/reducer'
import { IAlertInfo } from '../page/reducer'


function* registerSaga(action: ReturnType<typeof register>) {

    const useradd: IUserInfo = { username: action.user.username, password: action.user.password }

    let res: any = yield call(Axios.register_axios, useradd)

    if (res.data.code == 0) {
        let alert : IAlertInfo={msg:res.data.msg,types:'error'}
        yield put(alertMessage(alert));
    } else {
        let alert : IAlertInfo={msg:'OK!',types:'success'}
        yield put(alertMessage(alert));
    }
}

function* loginSaga(action: ReturnType<typeof login>) {

    let useradd: IUserInfo = { username: action.userid, password: action.pwd }
    let res: any = yield call(Axios.login_axios, useradd)

    if (res.data.code == '0') {
        let alert : IAlertInfo={msg:res.data.msg,types:'error'}
        yield put(alertMessage(alert));
    } else {
        yield put(setUserInfo(res.data.data.user));
        let alert : IAlertInfo={msg:'OK!',types:'success'}
        yield put(alertMessage(alert));
    }

}


//generator
function* userSaga() {
   
    yield all([
        yield takeEvery(REGISTER, registerSaga),
        yield takeEvery(LOGIN, loginSaga),
    ])
}

export { userSaga }

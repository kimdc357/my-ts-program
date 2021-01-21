import { takeEvery, put, takeLatest, select, all, call, delay, fork } from 'redux-saga/effects'
import { HEAD_MENU } from './types'
import * as Axios from '../../data/axios'
import { headMenu,headMenuInfo } from '../page/action'
import {IHeadMenuInfo} from './reducer'


function* headMenuSaga(dt:any) {

    const menu:IHeadMenuInfo ={distinguish:'head'}

    let res = yield call(Axios.head_menu_axios,menu)

    yield put(headMenuInfo(res.data.data.menu));
}

function* pageSaga() {
    yield all([
        yield takeEvery(HEAD_MENU, headMenuSaga)
    ])
}

export { pageSaga }
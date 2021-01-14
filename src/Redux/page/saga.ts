import { takeEvery, put, takeLatest, select, all, call, delay, fork } from 'redux-saga/effects'
import { HEAD_MENU } from './types'
import * as Axios from '../../data/axios'
import { headMenu,headMenutest } from '../page/action'


function* headMenuSaga(dt:any) {
    let res = yield call(Axios.head_menu_axios)

    yield put(headMenutest(res.data.data.menu));
}

function* pageSaga() {
    yield all([
        yield takeEvery(HEAD_MENU, headMenuSaga)
    ])
}

export { pageSaga }
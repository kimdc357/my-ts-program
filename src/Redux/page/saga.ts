import { takeEvery, put, takeLatest, select, all, call, delay, fork } from 'redux-saga/effects'
import { HEAD_MENU } from './types'
import * as Axios from '../../data/axios'


function* headMenu(dt:any) {
    let res = yield call(Axios.head_menu_axios)

    dt.data.resolve(res.data.data.menu)
}

function* pageSaga() {
    yield all([
        yield takeEvery(HEAD_MENU, headMenu)
    ])
}

export { pageSaga }
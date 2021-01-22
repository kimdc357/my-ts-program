import { takeEvery, put, takeLatest, select, all, call, delay, fork } from 'redux-saga/effects'
import { HEAD_MENU,MOVING_MENU } from './types'
import * as Axios from '../../data/axios'
import { headMenu,headMenuInfo,movingMenu,movingMenuInfo } from '../page/action'
import {IHeadMenuInfo} from './reducer'


function* headMenuSaga(dt:any) {

    const menu:IHeadMenuInfo ={distinguish:'head'}

    let res = yield call(Axios.head_menu_axios,menu)

    yield put(headMenuInfo(res.data.data.menu));
}

function* movingMenuSaga(action:ReturnType<typeof movingMenu>){

    const menu:IHeadMenuInfo={pid:action.pid,distinguish:action.disting}

    let res = yield call(Axios.moving_menu_axios,menu)

    yield put(movingMenuInfo(res.data.data.menu));

}

function* pageSaga() {
    yield all([
        yield takeEvery(HEAD_MENU, headMenuSaga),
        yield takeEvery(MOVING_MENU,movingMenuSaga),
    ])
}

export { pageSaga }
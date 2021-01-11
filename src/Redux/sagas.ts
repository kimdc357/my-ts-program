import { all } from 'redux-saga/effects'
import { userSaga } from './user/saga'
import { pageSaga } from './page/saga'

export default function* rootSagas() {
    yield all([
        userSaga(),
        pageSaga(),
    ])
}
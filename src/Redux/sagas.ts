import { takeEvery, put } from 'redux-saga/effects'
import { REGISTER } from './action'
import { register,message_info } from './actions'
import { get_data, register_data} from '../Data/axios'
import axios from 'axios'



function* register_saga(){
    console.log('666666666666666666')
    const {data:{data:{user}}} =yield axios.get('http://localhost:4050')
    console.log(user)
    const list=user[0].username
    const users={
        username:user[0].username,
        password:user[0].password
    }

    const action =message_info(users)
    yield put(action)

    
}

//generator
function* mysaga(){
    yield takeEvery(REGISTER,register_saga)
} 

export default mysaga
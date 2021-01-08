import axios from 'axios'
import {IUserInfo} from '../redux/user_reducer'


var url='http://localhost:4050'

export const get_data = ():Promise<any>=>{
    var res=axios.get(url)
    return res;
}

export const register_axios=(user:IUserInfo):Promise<any>=>{
    var res=axios.post(url+'/register',user)
    return res;
}

export const login_axios=(user:IUserInfo):Promise<any>=>{
    var res=axios.post(url+'/login',user)
    return res;
}

export const head_menu_axios=():Promise<any>=>{
    var res=axios.post(url+'/menu')
    return res;
}


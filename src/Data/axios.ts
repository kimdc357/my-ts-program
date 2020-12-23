import axios from 'axios'

var url='http://localhost:4050/'

export const register_data = (user:any)=>{
    axios.post(url+'/register',user)
}

export const get_data = ()=>{
    axios.get(url)
}


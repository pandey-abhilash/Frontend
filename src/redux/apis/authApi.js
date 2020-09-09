import axios from 'axios'
import config from '../../utils/config'

export async function registerUser(body){
    return axios.post(`${config.backendUrl}/users/register`,body)
}

export async function loginUser(body){
    
    return axios.post(`${config.backendUrl}/users/login`,body)
}

export async function fetchAllUserPosts(params){
    return axios.get(`${config.backendUrl}/users/${params.email}/${params.pageNumber}/${params.pageSize}`)
}



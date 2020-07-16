import axios from 'axios'
import config from '../../utils/config'

export async function registerUser(body){
    return axios.post(`${config.backendUrl}/users/register`,body)
}
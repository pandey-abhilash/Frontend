
import axios from 'axios'
import config from '../../utils/config'

export async function sendFollowRequest(body){
    return axios.post(`${config.backendUrl}/follows/followuser`,body)
}

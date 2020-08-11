
import axios from 'axios'
import config from '../../utils/config'

export async function fetchComments(params){
    return axios.get(`${config.backendUrl}/comments/fetch/${params.postId}`)
}

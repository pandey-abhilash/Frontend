
import axios from 'axios'
import config from '../../utils/config'

export async function sendFollowRequest(body){
    return axios.post(`${config.backendUrl}/follows/followuser`,body)
}

export async function deleteFollower(params){
    return axios.delete(`${config.backendUrl}/follows/delete/${params.followByEmailId}/${params.followToEmailId}`)
}

export async function fetchPendingRequestFollowers(params){
    return axios.get(`${config.backendUrl}/follows/fetching/${params.email}/${params.pageNumber}/${params.pageSize}`)
}

export async function acceptFollowRequest(body){
    return axios.put(`${config.backendUrl}/follows/acceptrequest`,body)
}

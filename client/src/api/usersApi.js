import http from './http';
import config from '../config'

const createUser = data => http.post(`${config.apiUrl}/users`, data)
const loginUser = data => http.post(`${config.apiUrl}/auth`, data)

const usersApi = {createUser, loginUser}
export default usersApi
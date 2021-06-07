import http from './http';

const apiUrl = `http://localhost:5000/api`;

const createUser = data => http.post(`${apiUrl}/users`, data)
const loginUser = data => http.post(`${apiUrl}/auth`, data)

const usersApi = {createUser, loginUser}
export default usersApi
import jwtDecode from 'jwt-decode';

const key = 'token';

const setToken = token => localStorage.setItem(key, token);
const deleteToken = () => localStorage.removeItem(key);
const getToken = () => localStorage.getItem(key);
const getUser = () => {
    const token = getToken()
    console.log('token:',  token)
    console.log('jwtdecode:',  jwtDecode)
    console.log('jwtdecode(token):',  jwtDecode(token))
    return token && jwtDecode(token)
}

const authApi = { setToken, deleteToken, getToken, getUser };
export default authApi;
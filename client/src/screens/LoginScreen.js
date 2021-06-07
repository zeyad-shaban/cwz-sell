import React, { useState } from 'react';
import usersApi from '../api/usersApi';
import authApi from '../api/auth';
import { toast } from 'react-toastify';
import Input from '../components/Input';

function LoginScreen(props) {
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const { data: token } = await usersApi.loginUser(data);
            authApi.setToken(token);
            window.location = '/';
        } catch (err) {
            if (err.response && err.response.status >= 400 && err.response.status < 500) toast.error(err.response.data);
        }
    };

    const handleChange = ({ target }) => setData({ ...data, [target.name]: target.value });

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input id="username" handleChange={handleChange} value={data.username} label="Username" />
                <Input type="password" id="password" handleChange={handleChange} value={data.value} label="Password" />
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
}
export default LoginScreen;
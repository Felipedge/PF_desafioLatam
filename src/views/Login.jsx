import React, { useState } from 'react';
import './login.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
    };

    return (
        <div className='container-login'>
            <form  onSubmit={handleSubmit}>
                <div className='login-user'>
                    <label className='login-text' htmlFor="username">Username:</label>
                    <input className='login-text' type="text" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div className='login-pass'>
                    <label className='login-text' htmlFor="password">Password:</label>
                    <input className='login-text' type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div >
                <button className='login-button' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;

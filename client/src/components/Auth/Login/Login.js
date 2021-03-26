import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"

import './Login.css'
import FormHeader from "../../Other/FormHeader/FormHeader";

import authenticate from "../../../utils/authenticate";
import UserContext from "../../../Context";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const context = useContext(UserContext);
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

        await authenticate('http://localhost:5000/api/user/login', {
                username,
                password
            }, (user) => {
                context.logIn(user)
                history.push('/home')
            }, (e) => {
                console.log('Error', e)
            }
        )
    }

    return (
        <div className="custom-section login-section">
            <div className="login-container">
                <div className="auth-form-wrapper login-form-wrapper">

                    <FormHeader title="Вход"/>

                    <form className="auth-form" onSubmit={handleSubmit}>

                        <div className="auth-form-field-wrapper">
                            <div className="auth-form-field-heading">
                                <label htmlFor="username">Потребителско име:</label>
                            </div>
                            <input className="auth-form-field-input" type="text" id="username" name="username"
                                   value={username} onChange={e => setUsername(e.target.value)}/>
                        </div>

                        <div className="auth-form-field-wrapper">
                            <div className="auth-form-field-heading">
                                <label htmlFor="password">Парола:</label>
                            </div>
                            <input className="auth-form-field-input" type="password" id="password" name="password"
                                   value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div className="auth-form-button-wrapper">
                            <button className="auth-form-button" type="submit">ИЗПРАТИ</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
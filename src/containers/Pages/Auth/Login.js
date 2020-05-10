import React, { Component } from 'react'
import LoginForm from '../../../components/Forms/LoginForm';
import '../../../styles/login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <LoginForm/>
            </div>
        )
    }
}

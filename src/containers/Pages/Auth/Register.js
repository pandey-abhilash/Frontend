import React, { Component } from 'react'
import RegisterForm from '../../../components/Forms/RegisterForm'
import '../../../styles/register.css'

export default class Register extends Component {
    render() {
        return (
            <div className='register'>
                <RegisterForm/>
            </div>
        )
    }
}

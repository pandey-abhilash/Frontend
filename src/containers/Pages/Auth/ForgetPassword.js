import React, { Component } from 'react'
import ForgetPasswordForm from '../../../components/Forms/ForgetPasswordForm'
import '../../../styles/forgetpassword.css';

export default class ForgetPassword extends Component {
    render() {
        return (
            <div className='authPage' >
                <ForgetPasswordForm/>
            </div>
        )
    }
}

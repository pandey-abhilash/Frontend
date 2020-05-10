import React, { Component } from 'react'
import ResetPasswordForm from '../../../components/Forms/ResetPasswordForm'
import '../../../styles/resetpassword.css';

export default class ResetPassword extends Component {
    render() {
        return (
            <div className='reset'>
                <ResetPasswordForm/>
            </div>
        )
    }
}

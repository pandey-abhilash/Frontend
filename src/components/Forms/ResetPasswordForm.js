import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ResetPasswordForm extends Component {
    render() {
        return (
            <section className="reset-form">
            <div className="reset-form-heading">
                <h2>Reset Password</h2>
            </div>
            <div className="reset-form-body">
                <form>
                    <div >
                        <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Email Id*</span></div>
                        <input type="text" placeholder="Enter you registered email Id." />
                    </div>
                    <div >
                        <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Current Password*</span></div>
                        <input type="password" placeholder="Enter you current password." />
                    </div>
                    <div>
                        <div className="form-lable" style={{ paddingLeft: '0px' }}><span>New Password*</span></div>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <div>
                        <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Confirm New Password*</span></div>
                        <input type="text" placeholder="Re-enter your password" />
                    </div>
                    <div className="form-action" style={{ paddingLeft: '0px' }}>
                        <button >Reset</button>
                    </div>
                    <div className="login-link">
                        <div style={{ padding: '0px' }}><Link to='/'>Already have account ?</Link></div>
                        <div style={{ padding: '0px' }}><Link to='/register/'>Create new account ?</Link></div>
                    </div>
                    <div className="login-link" style={{ padding: '5px' }}>
                        <div style={{ padding: '0px' }}><Link to='/forget/pass/'>Forget Password ?</Link></div>
                    </div>
                </form>
            </div>
        </section>
        )
    }
}

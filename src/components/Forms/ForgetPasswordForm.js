import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class ForgetPasswordForm extends Component {
    render() {
        return (
            <section className="forget-form">
            <div className="forget-form-heading">
                <h2>Forget Password</h2>
            </div>
            <div className="forget-form-body">
                <form>
                    <div >
                        <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Email Id*</span></div>
                        <input type="text" placeholder="Enter you registered email Id." />
                    </div>
                    <div className="form-action" style={{ paddingLeft: '0px' }}>
                        <button >Send</button>
                    </div>
                    <div className="login-link">
                        <div style={{ padding: '0px' }}><Link to='/'>Already have account ?</Link></div>
                        <div style={{ padding: '0px' }}><Link to='/register/'>Create new account ?</Link></div>
                    </div>
                    <div className="login-link" style={{ padding: '5px' }}>
                        <div style={{ padding: '0px' }}><Link to='/reset/pass/'>Reset Password ?</Link></div>
                    </div>
                </form>
            </div>
        </section>
        )
    }
}

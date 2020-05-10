import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import history from '../../utils/history';

export default class RegisterForm extends Component {
    render() {
        return (
            <section className="register-form">
            <div className="register-form-heading">
                <h2>Sign Up</h2>
            </div>
            <div className="register-form-body">
                <form>
                    <div >
                        <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Name*</span></div>
                        <input type="text" placeholder="Enter you name." />
                    </div>
                    <div >
                        <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Email Id*</span></div>
                        <input type="text" placeholder="Enter you valid email id" />
                    </div>
                    <div >
                        <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Phone Number"</span></div>
                        <input type="text" placeholder="Enter you valid phone number." />
                    </div>
                    <div>
                        <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Password*</span></div>
                        <input type="password" placeholder="Enter your password." />
                    </div>
                    <div>
                        <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Confirm Password*</span></div>
                        <input type="password" placeholder="Re-enter your password." />
                    </div>
                    <div className="form-action" style={{ paddingLeft: '0px' }}>
                        <button >Sign Up</button>
                        <button onClick={() => history.push('/')}>LogIn</button>
                    </div>
                    <div className="register-link" style={{ paddingLeft: '0px' }}>
                        <div style={{ paddingLeft: '0px' }}><Link to='/forget/pass/'>Forget Password ?</Link></div>
                        <div style={{ paddingLeft: '0px' }}><Link to='/reset/pass/'>Reset Password ?</Link></div>
                    </div>
                </form>
            </div>
        </section>
        )
    }
}

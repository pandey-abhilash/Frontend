import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import history from '../../utils/history';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { displayName, email, password, phone, confirmPassword, onSubmit, onSetState } = this.props;
        return (
            <section className="register-form">
                <div className="register-form-heading">
                    <h2>Sign Up</h2>
                </div>
                <div className="register-form-body">
                    <form>
                        <div >
                            <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Name*</span></div>
                            <input
                                type="text"
                                placeholder="Enter you name."
                                value={displayName}
                                onChange={(e) => onSetState({ displayName: e.target.value })}
                            />
                        </div>
                        <div >
                            <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Email Id*</span></div>
                            <input
                                type="text"
                                placeholder="Enter you valid email id"
                                value={email}
                                onChange={(e) => onSetState({ email: e.target.value })}
                            />
                        </div>
                        <div >
                            <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Phone Number"</span></div>
                            <input
                                type="number"
                                style={{ 
                                    width: "98%", 
                                    padding: '15px', 
                                    margin: '0px 2px 0px 0px',
                                    backgroundColor:'#ededed !important' 
                                }}
                                placeholder="Enter you valid phone number."
                                value={phone}
                                onChange={(e) => onSetState({ phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Password*</span></div>
                            <input
                                type="password"
                                placeholder="Enter your password."
                                value={password}
                                onChange={(e) => onSetState({ password: e.target.value })}
                            />
                        </div>
                        <div>
                            <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Confirm Password*</span></div>
                            <input
                                type="password"
                                placeholder="Re-enter your password."
                                value={confirmPassword}
                                onChange={(e) => onSetState({ confirmPassword: e.target.value })}
                            />
                        </div>
                        <div className="form-action" style={{ paddingLeft: '0px' }}>
                            <button onClick={(e=>onSubmit())} >Sign Up</button>
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

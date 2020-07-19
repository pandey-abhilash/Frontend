import React, { Component } from 'react'
import history from '../../utils/history'
// import config from '../../utils/config';
import {Link} from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.onChangeUsername=this.onChangeUsername.bind(this)
        this.onChangePassword=this.onChangePassword.bind(this)
        
    }
    
    onChangeUsername(e){
        const{value}=e.target
        const{onSetState}=this.props
        onSetState({email:value})
    }

    onChangePassword(e){
        const{value}=e.target
        const{onSetState}=this.props
        onSetState({password:value})
    }

    render() {
        const{email,password,onSubmit}=this.props
        return (
            <section className="login-form">
                <div className="login-form-heading">
                    <h2>Login</h2>
                </div>
                <div className="login-form-body">
                    <form>
                        <div >
                            <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Username*</span></div>
                            <input 
                                type="text" 
                                onChange={this.onChangeUsername}
                                value={email}
                                placeholder="Enter you registered email id" 
                                /> 
                        </div>
                        <div>
                            <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Password*</span></div>
                            <input 
                            type="password" 
                            onChange={this.onChangePassword}
                            value={password}
                            placeholder="Enter your password" 
                            />
                        </div>
                        <div className="form-action" style={{ paddingLeft: '0px' }}>
                            <button onClick={(e)=>onSubmit(e)}>Login</button>
                            <button onClick={() => history.push('/register/')}>Sign Up</button>

                        </div>
                        <div className="login-link" style={{ paddingLeft: '0px' }}>
                            <div style={{ paddingLeft: '0px'}}><Link to='/forget/pass/'>Forget Password ?</Link></div>
                            <div style={{ paddingLeft: '0px'}}><Link to='/reset/pass/'>Reset Password ?</Link></div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
export default LoginForm;

import React, { Component } from 'react'
import history from '../../utils/history'
// import config from '../../utils/config';
import {Link} from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uError:null,
            pErro:null
        }
        
    }
    onChangeUsername(e){

        

    }
    onChangePassword(e){


    }

    render() {
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
                                placeholder="Enter you registered email id" 
                                /> 
                            {this.state.uError && <span style={{color:"red", fontSize:'8px'}}>Enter valid email id.</span>}
                        </div>
                        <div>
                            <div className="form-lable" style={{ paddingLeft: '0px' }}><span>Password*</span></div>
                            <input 
                            type="password" 
                            placeholder="Enter your password" 
                            />
                        </div>
                        <div className="form-action" style={{ paddingLeft: '0px' }}>
                            <button >Login</button>
                            <button onClick={() => history.push('/register/')}>Sign Up</button>

                        </div>
                        <div className="login-link" style={{ paddingLeft: '0px' }}>
                            <div style={{ paddingLeft: '0px' }}><Link to='/forget/pass/'>Forget Password ?</Link></div>
                            <div style={{ paddingLeft: '0px' }}><Link to='/reset/pass/'>Reset Password ?</Link></div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
export default LoginForm;

import React, { Component } from 'react'
import history from '../../utils/history'
// import config from '../../utils/config';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card';


class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)

    }

    onChangeUsername(e) {
        const { value } = e.target
        const { onSetState } = this.props
        onSetState({ email: value })
    }

    onChangePassword(e) {
        const { value } = e.target
        const { onSetState } = this.props
        onSetState({ password: value })
    }

    render() {
        const { email, password, onSubmit } = this.props
        return (
           
            <Card variant="outlined" 
            style={{ width: '520px',
             padding: "20px", margin: "auto", 
             position: "relative", top: "250px"
             }}>
                <div style={{marginLeft:"45%"}}>Login</div>
                <Divider style={{marginTop:"10px"}}/>
                     <div style={{marginTop:"35px",marginLeft:"30px"}}>
                                <TextField
                                    label="EmailId*"
                                    variant="outlined"
                                    style={{ width: "90%" ,marginTop:"10px"}}
                                    onChange={this.onChangeUsername}
                                    value={email}

                                />

                                <TextField
                                    label="Password*"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    style={{  width: '90%' ,marginTop:"30px"}}
                                    onChange={this.onChangePassword}
                                    value={password}
                                />
                         </div>
                            <div className="form-action" style={{ paddingLeft: '0px' ,marginTop: "40px"}}>
                                <Button style={{marginLeft:"70px"}} variant="contained"
                                    color="primary"
                                    size="medium"
                                    startIcon={<SaveIcon />} onClick={(e) => onSubmit(e)}>Login</Button>
                        <Button style={{marginLeft:"90px"}} variant="contained"
                                    color="primary"
                                    size="medium"
                                    startIcon={<SaveIcon />} onClick={() => history.push('/register/')}> Sign Up</Button>

                            </div>
                            <div className="login-link" style={{ paddingLeft: '0px',marginTop: "40px" }}>
                                <div style={{ paddingLeft: '0px' }}><Link to='/forget/pass/'>Forget Password ?</Link></div>
                                <div style={{ paddingLeft: '0px'}}><Link to='/reset/pass/'>Reset Password ?</Link></div>
                            </div>
                        
                    
                            </Card>
        
        )
    }
}
export default LoginForm;


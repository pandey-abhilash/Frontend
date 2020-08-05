import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import history from '../../utils/history';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { displayName, email, password, phone, confirmPassword, onSubmit, onSetState } = this.props;
        return (
            <Card variant="outlined" style={{ width: '520px', padding: "20px", margin: "auto", position: "relative", top: "100px"}}>
                           <div style={{marginLeft:"45%"}}>Register</div>
                <Divider style={{marginTop:"10px"}}/>
                     <div style={{marginTop:"35px",marginLeft:"30px"}}>

                            <TextField
                                label="Name*"
                                variant="outlined"
                                style={{ width: "90%" ,marginTop:"10px"}}
                                value={displayName}
                                onChange={(e) => onSetState({ displayName: e.target.value })}
                            />
                        
                       
                            
                            <TextField
                                label="Email Id*"
                                type="email"
                                variant="outlined"
                                style={{ width: "90%" ,marginTop:"25px"}}
                                value={email}
                                onChange={(e) => onSetState({ email: e.target.value })}
                            />
                        
                        
                            
                            <TextField
                               label="Phone Number*"
                               type="number"
                               variant="outlined"
                               style={{  width: '90%' ,marginTop:"25px"}}
                                value={phone}
                                onChange={(e) => onSetState({ phone: e.target.value })}
                            />
                       
                        
                            
                            <TextField
                            label="Password*"
                                type="password"
                                variant="outlined"
                                style={{ width: "90%" ,marginTop:"25px"}}
                                value={password}
                                onChange={(e) => onSetState({ password: e.target.value })}
                            />
                        
                       
                            <TextField
                               label="Confirm Password*"
                               type="password"
                               variant="outlined"
                               style={{ width: "90%" ,marginTop:"25px"}}
                                value={confirmPassword}
                                onChange={(e) => onSetState({ confirmPassword: e.target.value })}
                            />
                        </div>
                        <div className="form-action" style={{ paddingLeft: '0px' ,marginTop: "40px" }}>
                            <Button variant="contained"
                                    color="primary"
                                    size="medium"
                                    style={{marginLeft:"70px"}}
                                    startIcon={<SaveIcon />} onClick={(e=>onSubmit())} >Sign Up</Button>
                            <Button variant="contained"
                                    color="primary"
                                    size="medium"
                                    style={{marginLeft:"90px"}}
                                    startIcon={<SaveIcon />} onClick={() => history.push('/')}>LogIn</Button>
                        </div>
                        <div className="register-link" style={{ paddingLeft: '0px' ,marginTop: "40px"}}>
                            <div style={{ paddingLeft: '0px' }}><Link to='/forget/pass/'>Forget Password ?</Link></div>
                            <div style={{ paddingLeft: '0px' }}><Link to='/reset/pass/'>Reset Password ?</Link></div>
                        </div>
                        </Card>
        )
    }
}

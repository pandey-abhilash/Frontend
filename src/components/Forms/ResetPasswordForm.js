import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card';


export default class ResetPasswordForm extends Component {
    render() {
        return (
            <Card variant="outlined" style={{ width: '520px', padding: "20px", margin: "auto", position: "relative", top: "100px"}}>
                        <div style={{marginLeft:"35%"}}>Reset Password</div>
                <Divider style={{marginTop:"10px"}}/>
                     <div style={{marginTop:"35px",marginLeft:"30px"}}>

                        <TextField
                         label=" Enter Registered Email Id*"
                         type="email"
                         variant="outlined"
                         style={{ width: "90%" ,marginTop:"25px"}}
                         />
                    
                    
                        <TextField
                         label="Enter Current password*"
                         type="password"
                         variant="outlined"
                         style={{ width: "90%" ,marginTop:"25px"}}
                         />
                   
                        <TextField
                         label="Enter New Password*"
                         type="password"
                         variant="outlined"
                         style={{ width: "90%" ,marginTop:"25px"}}
                        />
                    
                        <TextField 
                        label=" Re-Enter your  Password*"
                        type="password"
                        variant="outlined"
                        style={{ width: "90%" ,marginTop:"25px"}}
                        />
                    </div>
                    <div className="form-action" style={{ paddingLeft: '0px' ,marginTop:"40px"}}>
                        <Button variant="contained"
                                    color="primary"
                                    size="medium"
                                    style={{marginLeft:"40%"}}
                                    startIcon={<SaveIcon />}>Reset</Button>
                    </div>
                    <div className="login-link" style={{ padding: '5px',marginTop:"40px" }}>
                        <div style={{ padding: '0px' }}><Link to='/'>Already have account ?</Link></div>
                        <div style={{ padding: '0px' }}><Link to='/register/'>Create new account ?</Link></div>
                    </div>
                    <div className="login-link" style={{ padding: '5px',marginTop:"40px" }}>
                        <div style={{ padding: '0px' }}><Link to='/forget/pass/'>Forget Password ?</Link></div>
                    </div>
                </Card>

        )
    }
}

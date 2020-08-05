import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card';

export default class ForgetPasswordForm extends Component {
    render() {
        return (
            <Card variant="outlined" style={{ width: '520px', padding: "20px", margin: "auto", position: "relative", top: "100px"}}>
                        <div style={{marginLeft:"35%"}}>Forget Password</div>
                <Divider style={{marginTop:"10px"}}/>
                     <div style={{marginTop:"35px",marginLeft:"30px"}}>
                        <TextField
                        label="Email Id*"
                        type="email"
                        variant="outlined"
                        style={{ width: "90%" ,marginTop:"25px"}}
                        />
                     </div>

                    <div className="form-action" style={{ paddingLeft: '0px' ,marginTop:"40px"}}>
                        <Button variant="contained"
                                    color="primary"
                                    size="medium"
                                    style={{marginLeft:"40%"}}
                                    startIcon={<SaveIcon />} >Send</Button>
                    </div>
                    <div className="login-link"  style={{ padding: '5px' ,marginTop:"40px"}}>
                        <div style={{ padding: '0px' }}><Link to='/'>Already have account ?</Link></div>
                        <div style={{ padding: '0px' }}><Link to='/register/'>Create new account ?</Link></div>
                    </div>
                    <div className="login-link" style={{ padding: '5px',marginTop:"40px" }}>
                        <div style={{ padding: '0px' }}><Link to='/reset/pass/'>Reset Password ?</Link></div>
                    </div>
                    </Card>
        )
    }
}

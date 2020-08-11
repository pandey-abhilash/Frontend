import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card';

export default class ForgetPasswordForm extends Component {
    render() {
        return (
            <div style={{padding:"20px"}}>
            <Card 
            variant="outlined" 
            style={{
                left: '50%',
                top: '50%',
                width:'350px',
                position: 'absolute',
                'transform': 'translate3d(-50%, -50%, 0)'
                 }}>
                <div style={{ textAlign: "center", fontSize: "20px", paddingTop: "10px", fontWeight: "600" }}>
                    Forget Password
                </div>
                <Divider style={{ marginTop: "10px" }} />
                <div style={{ padding: "20px" }}>
                    <TextField
                        label="Email Id*"
                        type="email"
                        variant="outlined"
                        style={{ width: "100%"}}
                    />
                    <div className="login-link" style={{marginTop: "15px" }}>
                        <div ><Link to='/'>Already have account ?</Link></div>
                        <div ><Link to='/register/'>Create new account ?</Link></div>
                    </div>
                    <div style={{ paddingLeft: '0px', marginTop: "20px", display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained"
                            color="primary"
                            size="medium"
                            startIcon={<SaveIcon />} >Send</Button>
                    </div>
                </div>
            </Card>
            </div>
        )
    }
}

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
            <div style={{padding:'20px'}}>
            <Card
                variant="outlined"
                style={{ 
                    left: '50%',
                    top: '50%',
                    width:'350px',
                    position: 'absolute',
                    '-webkit-transform': 'translate3d(-50%, -50%, 0)',
                    '-moz-transform': 'translate3d(-50%, -50%, 0)',
                    'transform': 'translate3d(-50%, -50%, 0)'
                }}
            >
                <div style={{ textAlign: "center", fontSize: "20px", paddingTop: "10px", fontWeight: "600" }}>
                    User Register
                    </div>
                <Divider style={{ marginTop: "10px" }} />
                <form>
                    <div style={{ padding: "20px" }}>
                        <TextField
                            label="Name*"
                            variant="outlined"
                            style={{ width: "100%" }}
                            value={displayName}
                            onChange={(e) => onSetState({ displayName: e.target.value })}
                        />
                        <TextField
                            label="Email Id*"
                            type="email"
                            variant="outlined"
                            style={{ width: "100%", marginTop: "25px" }}
                            value={email}
                            onChange={(e) => onSetState({ email: e.target.value })}
                        />
                        <TextField
                            label="Phone Number*"
                            type="number"
                            variant="outlined"
                            style={{ width: '100%', marginTop: "25px" }}
                            value={phone}
                            onChange={(e) => onSetState({ phone: e.target.value })}
                        />
                        <TextField
                            label="Password*"
                            type="password"
                            variant="outlined"
                            style={{ width: "100%", marginTop: "25px" }}
                            value={password}
                            onChange={(e) => onSetState({ password: e.target.value })}
                        />
                        <TextField
                            label="Confirm Password*"
                            type="password"
                            variant="outlined"
                            style={{ width: "100%", marginTop: "25px" }}
                            value={confirmPassword}
                            onChange={(e) => onSetState({ confirmPassword: e.target.value })}
                        />
                        <div className="register-link" style={{ paddingLeft: '0px', marginTop: "10px" }}>
                            <div ><Link to='/forget/pass/'>Forget Password ?</Link></div>
                            <div ><Link to='/'>Click for Login ?</Link></div>
                        </div>
                        <div style={{ marginTop: "20px", display:'flex', justifyContent:'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                startIcon={<SaveIcon />}
                                onClick={(e => onSubmit())}
                            >
                                Sign Up
                                </Button>
                        </div>
                    </div>
                </form>
            </Card>
            </div>
        )
    }
}

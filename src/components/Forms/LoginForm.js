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
            <div style={{padding:'20px'}}>
            <Card variant="outlined"
                style={{
                    left: '50%',
                    top: '50%',
                    width:'350px',
                    position: 'absolute',
                    'transform': 'translate3d(-50%, -50%, 0)'
                }}>
                <form >
                    <div style={{ textAlign: "center", fontSize: "20px", paddingTop: "10px", fontWeight: "600" }}>User Login</div>
                    <Divider style={{ marginTop: "10px", fontSize: "20px" }} />
                    <div style={{ padding: '20px' }}>
                        <TextField
                            label="Email-Id*"
                            variant="outlined"
                            style={{ width: "100%" }}
                            onChange={this.onChangeUsername}
                            value={email}

                        />
                        <TextField
                            label="Password*"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            style={{ width: '100%', marginTop: "30px" }}
                            onChange={this.onChangePassword}
                            value={password}
                        />
                        <div className="login-link" style={{ paddingLeft: '0px', marginTop: "15px" }}>
                            <div ><Link to='/forget/pass'>Forget Password ?</Link></div>
                            <div ><Link to='/register'>Create New Account ?</Link></div>
                        </div>
                        <div style={{ marginTop: "20px", display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                startIcon={<SaveIcon />}
                                onClick={(e) => onSubmit(e)}
                            >
                                Login
                     </Button>
                        </div>
                    </div>
                </form>
            </Card>
            </div>
        )
    }
}
export default LoginForm;


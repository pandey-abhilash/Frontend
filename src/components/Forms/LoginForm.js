import React, { Component } from 'react'
//import history from '../../utils/history'
// import config from '../../utils/config';
import { Link } from 'react-router-dom';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Grid, Typography, Avatar} from '@material-ui/core';

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
        const { email, password, onSubmit,classes } = this.props
        return (
            <div style={{ display:"flex", flexDirection: 'column', alignItems: 'center' }}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
          </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        value={email}
                        fullWidth
                        id="email"
                        label="Email Id"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={this.onChangeUsername}
                    />
                    <TextField
                        variant="outlined"
                        value={password}
                        margin="normal"
                        onChange={this.onChangePassword}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        startIcon={<SaveIcon />}
                        onClick={(e) => onSubmit(e)}
                    >
                        Sign In
            </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to='/forget/pass'>
                            <span style={{fontSize:"12px"}}>   Forgot password?</span>
                </Link>
                        </Grid>
                        <Grid item>
                            <Link to='/register'>
                                <span style={{fontSize:"12px"}}>{"Don't have an account? Sign Up"}</span>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}
export default LoginForm;


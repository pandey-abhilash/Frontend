import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography, Avatar } from '@material-ui/core'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { 
            displayName, email, password, phone, confirmPassword, 
            onSubmit, onSetState, classes 
        } = this.props;
        return (
            <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
          </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        label="Name*"
                        variant="outlined"
                        style={{ width: "100%" }}
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={displayName}
                        onChange={(e) => onSetState({ displayName: e.target.value })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        value={email}
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => onSetState({ email: e.target.value })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="number"
                        label="Phone Number"
                        name="number"
                        autoComplete="number"
                        autoFocus
                        value={phone}
                        onChange={(e) => onSetState({ phone: e.target.value })}
                    />
                    <TextField
                        variant="outlined"
                        value={password}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={(e) => onSetState({ password: e.target.value })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Confirm Password"
                        type="password"
                        id="password"
                        value={confirmPassword}
                        onChange={(e) => onSetState({ confirmPassword: e.target.value })}
                    />
                    <Grid container>
                        <Grid item xs>
                            <Link to='/forget/pass'>
                                <span style={{ fontSize: "12px" }}>   Forgot password ?</span>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to='/'>
                                <span style={{ fontSize: "12px" }}>{"Already have an account click ?"}</span>
                            </Link>
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        fullWidth
                        style={{marginTop:"15px"}}
                        startIcon={<SaveIcon />}
                        onClick={(e => onSubmit())}
                    >
                        Sign Up
                                </Button>
                </form>
            </div>
        )
    }
}

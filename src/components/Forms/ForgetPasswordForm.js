import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

export default class ForgetPasswordForm extends Component {
    render() {
        const {classes,email}= this.props;
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        startIcon={<SaveIcon />}
                        onClick={(e) => {} }
                        className={classes.submit}
                    >
                        Send Mail
            </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link to='/'>
                            <span style={{fontSize:"12px"}}> Click to Login ?</span>
                </Link>
                        </Grid>
                        <Grid item>
                        <Link to='/register/'>
                                <span style={{fontSize:"12px"}}>{"Don't have an account ? Sign Up"}</span>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}

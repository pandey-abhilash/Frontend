import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
import ForgetPassword from './ForgetPassword';

class AuthRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/reset/pass" exact component={ResetPassword}/>
                    <Route path="/forget/pass" exact component={ForgetPassword}/>
                    <Redirect to='/'/>
            </Switch>
            </Router>
        )
    }
}

export default AuthRouter;

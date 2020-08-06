import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Headers from '../Heders/Header'
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import MyPost from '../MyPost/MyPost';


class ApplicationRouter extends Component {
    render() {
        return (
            <section  className='applicationPage' style={{ padding: '0px', margin: '0px', boxSizing: 'border-box' }}>
                <Router>
                    <Headers />
                    <Switch>
                        <Route path='/app/' exact component={Home} />
                        <Route path='/app/post/' exact component={MyPost} />
                        <Route path='/app/profile/' exact component={Profile} />
                        <Redirect to="/app" />
                    </Switch>
                </Router>
            </section>
        )
    }
}
export default ApplicationRouter;

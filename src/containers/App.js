import React, { Component } from 'react'
import ApplicationRouter from './containers/Pages/Application/ApplicationRouter';
import AuthRouter from './containers/Pages/Auth/AuthRouter';
import {connect } from 'react-redux';

class App extends Component {
  componentDidMount(){
    const {loggin}= this.props;
    if(loggin){


    }

  }
  render() {
    const {loggin}= this.props;
    debugger
    let user = 'hello';
    if(!loggin){
      return <ApplicationRouter/>
    }
    return<div style={{margin:'10px'}}> <AuthRouter/></div>
  }
}

export default connect(
  state=>({
    // loggin: state.get('auth').loggin
})
)(App);

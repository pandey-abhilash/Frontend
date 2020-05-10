import React, { Component } from 'react'
import ApplicationRouter from './containers/Pages/Application/ApplicationRouter';
import AuthRouter from './containers/Pages/Auth/AuthRouter';

class App extends Component {
  render() {
    let user = 'hello';
    if(user){
      return <ApplicationRouter/>
    }
    return<div style={{margin:'10px'}}> <AuthRouter/></div>
  }
}
export default App;

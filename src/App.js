import React, { Component } from 'react'
import ApplicationRouter from './containers/Pages/Application/ApplicationRouter';
import AuthRouter from './containers/Pages/Auth/AuthRouter';
import './styles/toastr.css';

class App extends Component {
  render() {

    let user = null;
    if(user){
      return <div id="app"><ApplicationRouter/></div>
    }
    return<div style={{margin:'10px'}}  id="app"> <AuthRouter/></div>
  }
}
export default App;

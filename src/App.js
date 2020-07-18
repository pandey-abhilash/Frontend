import React, { Component } from 'react'
import ApplicationRouter from './containers/Pages/Application/ApplicationRouter';
import AuthRouter from './containers/Pages/Auth/AuthRouter';
import './styles/toastr.css';
import { connect } from "react-redux";
import userReducer from './redux/actions/auth'

class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidMount(){
    const {userReducer}=this.props
    let myproject=window.localStorage.getItem("myproject");
    
    myproject=JSON.parse(myproject)
    if(myproject && myproject.email && myproject.password){
      userReducer.loginUser({
        email:myproject.email,
        password:myproject.password
      })
    }
  }
  render() {
    const {user}=this.props
    
    //let user = true;
    if(user){
      return <div id="app"><ApplicationRouter/></div>
    }
    return<div style={{margin:'10px'}}  id="app"> <AuthRouter/></div>
  }
}

export default connect(
  state=>({
    user:state.get('auth').user
  }),
  dispatch=>({
    userReducer:userReducer.getActions(dispatch)
  })
)(App)



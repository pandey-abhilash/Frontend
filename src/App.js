import React, { Component } from 'react'
import ApplicationRouter from './containers/Pages/Application/ApplicationRouter';
import AuthRouter from './containers/Pages/Auth/AuthRouter';
import './styles/toastr.css';
import './styles/common.css';
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
      userReducer.authCheckUser({
        email:myproject.email,
        password:myproject.password
      })
    }
  }
  render() {
    const {user}=this.props
    if(user){
      return<ApplicationRouter/>
    }
    return<AuthRouter/>
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



import React, { Component } from 'react'
import LoginForm from '../../../components/Forms/LoginForm';
import '../../../styles/login.css';
import toastr from 'toastr' 
import {connect} from 'react-redux'
import userReducer from '../../../redux/actions/auth'

class Login extends Component {
    constructor(props){ //dynamic 
        super(props)
        this.state={
            email:null,
            password:null 

        } 
        this.onSubmit=this.onSubmit.bind(this)  
        this.onSetState=this.onSetState.bind(this)  
    }
    onSubmit(){
        const {email,password}=this.state
        const{userReducer}=this.props
        if(!email || !password){
            return toastr.warning("Please Enter Email and Password")
        }
        console.log(email,password)
        userReducer.loginUser({email,password})
    }
    onSetState(value){
        this.setState(value)//builtin function
    }
    render() {
        const{
            email,password
        }=this.state
        return (
            <div className="login">
                <LoginForm
                email={email}
                password={password}
                onSubmit={this.onSubmit}
                onSetState={this.onSetState}
                />
                
            </div>
        )
    }
}

export default connect(
    state=>({}),
    dispatch=>({
        userReducer:userReducer.getActions(dispatch)
    })
    )(Login) 
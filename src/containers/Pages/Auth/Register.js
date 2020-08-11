import React, { Component } from 'react'
import {connect} from 'react-redux';
import toastr from 'toastr';
import RegisterForm from '../../../components/Forms/RegisterForm'
import '../../../styles/register.css'
import userRedcuer from '../../../redux/actions/authReducer'
class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            displayName:'',
            email:'',
            phone:'',
            password:'',
            confirmPassword:''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onSetState = this.onSetState.bind(this);
    }
    onSubmit(){
        const { userRedcuer } = this.props;
        const {displayName,email, phone, password, confirmPassword}= this.state;
        if(!displayName || !email || !phone || !password || !confirmPassword){
            return toastr.warning("Input field cannot be empty.")
        } 
        if(password !== confirmPassword){
            return toastr.warning("Confirm password can be same as password.")
        }
        if(phone.length !== 10){
            return  toastr.warning('Please enter 10 digit phone number.')
        }
        let newUser={displayName, email, phone, password, confirmPassword}
        userRedcuer.registerUser(newUser).then(res=>{
            if(res.success){
                this.setState({ 
                    displayName:'',
                    email:'',
                    phone:null,
                    password:'',
                    confirmPassword:''});
            }
        })
    }
    onSetState(value){
        this.setState(value);
    }
    render() {
        const {email, password, confirmPassword,displayName, phone }= this.state;
        return (
            <div className='authPage'>
                <RegisterForm
                    onSubmit={this.onSubmit}
                    onSetState={this.onSetState}
                    email={email}
                    password={password}
                    phone={phone}
                    confirmPassword={confirmPassword}
                    displayName={displayName}
                />
                </div>
        )
    }
}

export default connect(state=>({

}),
dispatch=>({
    userRedcuer: userRedcuer.getActions(dispatch)
}))(Register)

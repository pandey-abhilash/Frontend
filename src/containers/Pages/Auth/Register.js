import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import toastr from 'toastr';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import userReducer from '../../../redux/actions/authReducer'
import RegisterForm from '../../../components/Forms/RegisterForm';


const useStyles = ((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state={
      displayName:'',
      email:'',
      phone:null,
      password:'',
      confirmPassword:''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onSetState = this.onSetState.bind(this);
  }
  onSubmit(){
    const { userReducer } = this.props;
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
    userReducer.registerUser(newUser).then(res=>{
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
  render(){
    const {classes}=this.props
    const {email, password, confirmPassword,displayName, phone }= this.state;
    return (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={9} className={classes.image} />
        <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
          <div className={classes.paper}>
                    <RegisterForm
                    onSubmit={this.onSubmit}
                    onSetState={this.onSetState}
                    email={email}
                    password={password}
                    phone={phone}
                    classes={classes}
                    confirmPassword={confirmPassword}
                    displayName={displayName}
                />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)( connect(
  state=>({}),
  dispatch=>({
    userReducer:userReducer.getActions(dispatch)
  })
  )(Register))
import React, { Component } from 'react'
import '../../../styles/Profile.css';
import ProfilePicture from '../../../components/Profile/ProfilePicture';
import ProfileAbout from '../../../components/Profile/ProfileAbout';
import {
    Button, Menu, MenuItem ,Grid,Paper,Card,CardContent,Typography,Avatar,CardHeader,IconButton,CardActions,Divider
    } from '@material-ui/core'

import {connect} from 'react-redux'
import userReducer from '../../../redux/actions/authReducer'
import {ProfileBasicDetail} from '../../../components/Profile/ProfileBasicDetail'
import {PersonalDetail} from '../../../components/Profile/PersonalDetail'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <Grid container spacing={3}>
                <Grid item xs={12}>  
                <Paper>
                    
                          <ProfilePicture/>
                
                </Paper>
                </Grid>
                <Grid item xs={6}> 
                <Paper>
                <div >
                    <Typography variant="h5">Personal Details</Typography>
                 </div>  
                 <Divider/>
                 <CardContent>
                     <PersonalDetail user={this.props.user}/>
                </CardContent>
                </Paper>
                </Grid>
                <Grid item xs={6}> 
                <Paper>
                <div >
                          <Typography variant="h5" color="primary">Academic Details</Typography>
                 </div>
                 <Divider />
                <CardContent>
                            <ProfileBasicDetail user={this.props.user}/>
                </CardContent>
                </Paper>
                 </Grid>
                <Grid item xs={12}>  
                <Paper>
                    <div>
                    <Typography>Social Networks</Typography>
                    </div>
                    <Divider/>
                    <div>
                        <IconButton>
                            <FacebookIcon/>
                        </IconButton>
                        <Typography variant="button" gutterBottom>Connect</Typography>
                        <IconButton style={{marginLeft:"50px"}}>
                            <TwitterIcon/>
                        </IconButton>
                        <Typography variant="button" gutterBottom>Connect</Typography>
                        <IconButton style={{marginLeft:"50px"}}>
                            <LinkedInIcon/>
                        </IconButton>
                        <Typography variant="button" gutterBottom>Connect</Typography>
                        <IconButton style={{marginLeft:"50px"}}>
                            <InstagramIcon/>
                        </IconButton>
                        <Typography variant="button" gutterBottom>Connect</Typography>
                        <IconButton style={{marginLeft:"50px"}}>
                            <YouTubeIcon/>
                        </IconButton>
                        <Typography variant="button" gutterBottom>Connect</Typography>
                    </div>
                </Paper>
                </Grid>
                <Grid item xs={12}> 
                <Paper>
                    <div>
                    <Typography>Devices</Typography>
                    </div>
                    <Divider/>
                    <div>
                    <IconButton>
                            <PhoneAndroidIcon/>
                        </IconButton>
                        <Typography variant="button" gutterBottom>Lenovo</Typography>
                    </div>
                </Paper>
                 </Grid>
                </Grid>
                {/* <div>
                          <ProfilePicture/>
                </div>
                <div className="profile-details">
                    <ProfileAbout/>
                </div>
                 */} 
            </div>
        )
    }
}
export default connect (
    state=>({
        user:state.get('auth').user
    }),
    dispatch=>({
        userReducer:userReducer.getActions(dispatch)
    })
)(Profile)



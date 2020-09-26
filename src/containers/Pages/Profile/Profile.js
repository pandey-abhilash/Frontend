import React, { Component } from 'react'
import '../../../styles/Profile.css';
import ProfilePicture from '../../../components/Profile/ProfilePicture';
import ProfileAbout from '../../../components/Profile/ProfileAbout';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
                <Paper>Second Section </Paper>
                </Grid>
                <Grid item xs={6}> 
                <Paper>Third Section</Paper>
                 </Grid>
                <Grid item xs={12}>  
                <Paper>Fourth Section</Paper>
                </Grid>
                <Grid item xs={12}> 
                <Paper>Fifth Section</Paper>
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
export default Profile;



import React, { Component } from 'react'
//import { Grid, Card, Typography, CardContent, Divider } from '@material-ui/core';
import {ProfileBasicDetail} from './ProfileBasicDetail'
import {PersonalDetail} from './PersonalDetail'
import {connect} from 'react-redux'
import userReducer from '../../redux/actions/authReducer'
import '../../styles/style.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import {
    Button, Menu, MenuItem ,Grid,Paper,Card,CardContent,Typography,Avatar,CardHeader,IconButton,CardActions,Divider
    } from '@material-ui/core'
import { MoreVert, ExpandMore, Favorite, Share, Comment ,CreateNewFolder} from '@material-ui/icons/';


class ProfileAbout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div></div>
            // <section >
            //     <div className="about">
            //         <Grid
            //             container
            //             justify="space-around"
            //             alignItems="center"
            //             alignContent="center"
            //             spacing={2}
            //         >
            //             { <Grid item sm={12}  xs={12} md={4} lg={3}>
            //                 <Card className="card" style={{marginLeft:"130px" }}>
            //                     <div style={{ padding: '10px' }}>
            //                         <div className="heading">
            //                             <Typography variant="h5">Personal Details</Typography>
            //                         </div>
            //                         <Divider />
            //                         <CardContent>
            //                         <PersonalDetail user={this.props.user}/>
            //                         </CardContent>
            //                     </div>
            //                 </Card>
            //             </Grid> }
            //             <Grid item sm={12} xs={12} md={8} lg={8}>
            //                 <Card className="card" style={{ width: '81%' ,marginLeft:"100px"}}>
            //                     <div style={{ padding: '10px' }}>
            //                         <div >
            //                             <Typography variant="h5" color="primary">Academic Details</Typography>
            //                         </div>
            //                         <Divider />
            //                         <CardContent>
            //                             <div>
            //                                 <ProfileBasicDetail user={this.props.user}/>
            //                             </div>
            //                         </CardContent>
            //                     </div>
            //                 </Card>
            //             </Grid>
            //             <Card
            //         style={{ padding: "20px", marginTop: '20px',width:"80%",height:"100px"}}
            //     >
            //         <Typography>Social Networks</Typography>
            //         <Divider/>
            //         <div>
            //             <IconButton>
            //                 <FacebookIcon/>
            //             </IconButton>
            //             <Typography variant="button" gutterBottom>Connect</Typography>
            //             <IconButton style={{marginLeft:"50px"}}>
            //                 <TwitterIcon/>
            //             </IconButton>
            //             <Typography variant="button" gutterBottom>Connect</Typography>
            //             <IconButton style={{marginLeft:"50px"}}>
            //                 <LinkedInIcon/>
            //             </IconButton>
            //             <Typography variant="button" gutterBottom>Connect</Typography>
            //             <IconButton style={{marginLeft:"50px"}}>
            //                 <InstagramIcon/>
            //             </IconButton>
            //             <Typography variant="button" gutterBottom>Connect</Typography>
            //             <IconButton style={{marginLeft:"50px"}}>
            //                 <YouTubeIcon/>
            //             </IconButton>
            //             <Typography variant="button" gutterBottom>Connect</Typography>
            //         </div>
            //     </Card>
            //     <Card
            //         style={{ padding: "20px", marginTop: '20px',width:"80%",height:"100px"}}
            //     >
            //         <Typography>Devices</Typography>
            //         <Divider/>
            //         <div>
            //         <IconButton>
            //                 <PhoneAndroidIcon/>
            //             </IconButton>
            //             <Typography variant="button" gutterBottom>Lenovo</Typography>
            //         </div>
            //         </Card>
            //         </Grid>
            //     </div>
            // </section>
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
)(ProfileAbout)
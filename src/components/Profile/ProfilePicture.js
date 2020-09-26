import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { Button, Menu, MenuItem, Grid } from '@material-ui/core'
import EditProfile from '../Modals/EditProfile'
import {
    Button, Menu, MenuItem, Grid, Card, Typography, Avatar, IconButton
} from '@material-ui/core'
import '../../styles/style.css'
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import Paper from '@material-ui/core/Paper';

class ProfilePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openMenu: null,
            open: false
        }
        this.openEditMenu = this.openEditMenu.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    
    handleClose() {
        this.setState({
            open: false
        })
    }
    handleOpen() {
        this.setState({
            open: true
        })
    }
    openEditMenu(e) {
        this.setState({
            openMenu: e.currentTarget

        })


    }
    render() {
        const { user } = this.props
        const { openMenu } = this.state
        return (
            <div>
                <Grid container  justyfy="flex" alignItems="center">
                    <Grid item xs={12}><div>Edit Profile</div></Grid>
                    <Grid item xs={4}>
                        <div class="header1">
                            <div class="left">
                                <Avatar aria-label="recipe" style={{ textTransform: 'capitalize', height: "80px", width: '80px', marginLeft: '10px' }}
                                >
                                    {user.displayName ? user.displayName[0] : 'N/A'}

                                </Avatar>
                            </div>
                            <div class="right">
                                <Typography >{user.displayName}</Typography>
                                <Typography >Student,Kipm -CET</Typography>
                                <Typography >Year, 2016 to 2019</Typography>
                                <Typography > Reset Password</Typography>
                            </div>
                            </div>
                        
                    </Grid>
                    <Grid item xs={4}>
                       
                        <div>
                                    <IconButton>
                                        <MailIcon />
                                    </IconButton>
                                    <Typography variant="button" gutterBottom>
                                        {user.email}
                                    </Typography>
                                    <IconButton style={{ marginLeft: "140px" }}>
                                        <CallIcon />
                                    </IconButton>
                                    <Typography variant="button" gutterBottom >
                                        {user.phone}
                                    </Typography>
                                </div>
                        
                    </Grid>
                </Grid>
                
                    {/* <div style={{ float: 'right', padding: '10px' }}>
                            
                        </div> 
                        <div class="header1">
                            <div class="left">
                                <Avatar aria-label="recipe" style={{ textTransform: 'capitalize', height: "80px", width: '80px', marginLeft: '10px' }}
                                >
                                    {user.displayName ? user.displayName[0] : 'N/A'}

                                </Avatar>
                            </div>

                            <div class="right">
                                <Typography >{user.displayName}</Typography>
                                <Typography >Student,Kipm -CET</Typography>
                                <Typography >Year, 2016 to 2019</Typography>
                                <Typography > Reset Password</Typography>
                            </div>
                            <div class="last">
                                <div>
                                    <IconButton>
                                        <MailIcon />
                                    </IconButton>
                                    <Typography variant="button" gutterBottom>
                                        {user.email}
                                    </Typography>
                                    <IconButton style={{ marginLeft: "140px" }}>
                                        <CallIcon />
                                    </IconButton>
                                    <Typography variant="button" gutterBottom >
                                        {user.phone}
                                    </Typography>
                                </div>
                                <div>
                                    <IconButton>
                                        <CallIcon />
                                    </IconButton>
                                    <Typography variant="button" gutterBottom>
                                        {user.phone}
                                    </Typography>
                                </div>    

                                <div>
                                <Button
                                variant='container'
                                color="primary"
                                style={{ color: '#000' }}
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={(e) => this.openEditMenu(e)}
                            >
                                Edit Profile
                   </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={openMenu}
                                keepMounted
                                open={Boolean(openMenu)}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                onClose={() => this.setState({ openMenu: null })}
                            >
                                <MenuItem onClick={this.handleOpen}>Edit Profile</MenuItem>
                                <MenuItem onClick={() => { }}>Edit Picture</MenuItem>
                            </Menu>

                                </div>

                            </div>
                        </div>
                    <div>
                        <EditProfile
                            open={this.state.open}
                            handleClose={this.handleClose}
                        />
                    </div> */}
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.get('auth').user
    })

)(ProfilePicture)

import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { Button, Menu, MenuItem, Grid } from '@material-ui/core'
import EditProfile from '../Modals/EditProfile'
import {
    Button, Menu, MenuItem, Grid ,Paper,Card,CardContent,Typography,Avatar,CardHeader,IconButton,CardActions
    } from '@material-ui/core'
import { MoreVert, ExpandMore, Favorite, Share, Comment ,CreateNewFolder} from '@material-ui/icons/';
import '../../styles/style.css'
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';

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
                <Grid container justify="center">
                    <Grid item sm={12} md={12} lg={12}>
                        <div style={{ float: 'right', padding: '10px' }}>
                            <Button
                                variant='container'
                                color="primary"
                                style={{ color: '#fff' }}
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
                    </Grid>
                    
                    <Card
                    style={{ padding: "20px", marginBottom: '20px',width:"80%"}}
                >
                        
                        <div class="header1">
                            
                            <div class="left">
                            <Avatar aria-label="recipe" style={{ textTransform: 'capitalize' ,height:"80px", width:'80px',marginLeft:'10px'}}
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
                                     <MailIcon/> 
                                </IconButton>
                            <Typography variant="button" gutterBottom>
                                {user.email}
                                </Typography>
                                <IconButton style={{marginLeft:"140px"}}>
                                     <CallIcon/> 
                                </IconButton>
                            <Typography variant="button" gutterBottom >
                                {user.phone}
                                </Typography>
                                </div>
                                <div>
                                <IconButton>
                                     <CallIcon/> 
                                </IconButton>
                            <Typography variant="button" gutterBottom>
                            {user.phone}
                                </Typography>
                                </div>
                            </div>
                        </div>
                  </Card> 
              
                         <div>
                                <EditProfile
                                    open={this.state.open}
                                    handleClose={this.handleClose}
                                />
                        </div>
                </Grid>


            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.get('auth').user
    })

)(ProfilePicture)

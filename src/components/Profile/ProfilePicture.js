import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Button,Menu,MenuItem} from '@material-ui/core'
import EditProfile from '../Modals/EditProfile'

 class ProfilePicture extends Component {
     constructor(props){
        super(props)
        this.state={
            openMenu:null,
            open:false
        }
        this.openEditMenu=this.openEditMenu.bind(this)
        this.handleOpen=this.handleOpen.bind(this)
        this.handleClose=this.handleClose.bind(this)
     }
     handleClose(){
         this.setState({
             open:false
         })
     }
     handleOpen(){
        this.setState({
            open:true
        })
    }
    openEditMenu(e){
        this.setState({
            openMenu:e.currentTarget
            
        })
        

     }
    render() {
        const{user}=this.props
        const{openMenu}=this.state
        return (
            <div style={{padding:'10px', display:'flex', flexDirection:'column',alignItems:'center' }}>
               <div style={{
                   float:'right'

               }}>
                   <Button varient='container' color="primary" style={{
                       color:'#fff'
                   }} 
                   aria-controls="simple-menu" aria-haspopup="true" onClick={(e)=>this.openEditMenu(e)}
                   >
                       Edit Profile
                   </Button>
                   <Menu
        id="simple-menu"
        anchorEl={openMenu}
        keepMounted
        open={Boolean(openMenu)}
        onClose={()=>this.setState({openMenu:null})}
      >
        <MenuItem onClick={this.handleOpen}>Edit Profile</MenuItem>
        <MenuItem onClick={()=>{}}>Edit Picture</MenuItem>
        
      </Menu>

               </div>
                <div style={{padding:'5px'}}>
                    <img 
                        className="profile_pic"
                        src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' 
                        alt='img'
                        />
                </div>
        <div  style={{padding:'5px'}}><span style={{color:'#fff' ,fontWeight:'500'}}><h2><i>{user.displayName}</i></h2></span></div>
        <div>
            <EditProfile
             open={this.state.open} 
             handleClose={this.handleClose} 
            />
            
        </div>
            </div>
        )
    }
}

export default connect(
    state=>({
        user:state.get('auth').user
    })
 
)(ProfilePicture)

import React, { Component } from 'react';
import {connect} from 'react-redux'


 class ProfilePicture extends Component {
    render() {
        const{user}=this.props
        return (
            <div style={{padding:'10px', display:'flex', justifyContent:'center', flexDirection:'column', alignContent:'center', alignItems:'center' }}>
                <div style={{padding:'5px'}}>
                    <img 
                        className="profile_pic"
                        src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' 
                        alt='img'
                        />
                </div>
        <div  style={{padding:'5px'}}><span style={{color:'#fff' ,fontWeight:'500'}}><h2><i>{user.displayName}</i></h2></span></div>
            </div>
        )
    }
}

export default connect(
    state=>({
        user:state.get('auth').user
    })
 
)(ProfilePicture)

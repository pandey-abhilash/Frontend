import React, { Component } from 'react'
import '../../../styles/Profile.css';
import ProfilePicture from '../../../components/Profile/ProfilePicture';
import ProfileAbout from '../../../components/Profile/ProfileAbout';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile-img">
                          <ProfilePicture/>
                </div>
                <div className="profile-details">
                    <ProfileAbout/>
                </div>
                
            </div>
        )
    }
}
export default Profile;



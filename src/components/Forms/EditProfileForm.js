import React from 'react'
import { Button } from '@material-ui/core/';
export class EditProfileForm extends React.Component {
    render() {

        const { user } = this.props //destraction

        return (
            <div>
                <div style={{ width: '500px', marginBottom: '10px' }}>
                    <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                        <span>Your Name</span>
                    </div>
                    <input
                        type="text"
                        placeholder=" Enter Your Name"
                        value={user.displayName}
                    />

                </div>
                <div style={{ width: '500px', marginBottom: '10px' }}>
                    <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                        <span>Your Email ID</span>
                    </div>
                    <input
                        type="text"
                        placeholder=" Enter Your Email ID"
                        disabled
                        value={user.email}
                    />
                </div>
                <div style={{ width: '500px', marginBottom: '10px' }}>
                    <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                        <span>About Me</span>
                    </div>

                    <input
                        type="text"
                        placeholder="About Me"
                        value={user.aboutMe ? user.aboutMe : ''}
                    />
                </div>
                <div style={{ width: '500px', marginBottom: '10px' }}>
                    <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                        <span>Contact</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Contact"
                        value={user.phone}
                    />
                </div>
                <div style={{ width: '500px', marginBottom: '10px' }}>
                    <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                        <span>Street/Location</span>
                    </div>
                    <input
                        type="text"
                        placeholder=" Enter Your Street"
                    />
                </div>

                <div style={{ width: '500px', marginBottom: '10px' }}>
                    <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                        <span>City</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Your City"
                    />
                </div>
                <div style={{ width: '500px', marginBottom: '10px' }}>
                    <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                        <span>State</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Your State"
                    />
                </div>
                <div style={{ width: '500px', marginBottom: '10px' }}>
                    <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                        <span>Pincode</span>
                    </div>
                    <input
                        type="text"
                        placeholder=" Enter Your Area Pincode"
                    />
                </div>

                <div style={{ width: '500px', marginBottom: '10px' }}>
                    <Button
                        variant="contained"
                        color="primary">
                        Update
                    </Button>
                </div>


            </div>

        )
    }
}
// Component
import React from 'react'
import { Dialog, DialogTitle, DialogContent, Button ,DialogActions} from '@material-ui/core/';

import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default class EditProfile extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { open, handleClose } = this.props
        return <div>
            <Dialog

                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => handleClose()}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Edit Profile
        </DialogTitle>
                <DialogContent dividers>
                    <div>
                        <div style={{ width: '500px', marginBottom: '10px' }}>
                            <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                                <span>Your Name</span>
                            </div>
                            <input type="text" placeholder=" Enter Your Name" />
                        </div>
                        <div style={{ width: '500px', marginBottom: '10px' }}>
                            <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                                <span>Your Email ID</span>
                            </div>
                            <input type="text" placeholder=" Enter Your Email ID" disabled />
                        </div>
                        <div style={{ width: '500px', marginBottom: '10px' }}>
                            <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                                <span>About Me</span>
                            </div>

                            <input type="text" placeholder="About Me" />
                        </div>
                        <div style={{ width: '500px', marginBottom: '10px' }}>
                            <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                                <span>Contact</span>
                            </div>
                            <input type="text" placeholder="Contact" />
                        </div>
                        <div style={{ width: '500px', marginBottom: '10px' }}>
                            <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                                <span>Street</span>
                            </div>
                            <input type="text" placeholder=" Enter Your Street" />
                        </div>
                        <div style={{ width: '500px', marginBottom: '10px' }}>
                            <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                                <span>Location</span>
                            </div>
                            <input type="text" placeholder=" Enter Your Location" />
                        </div>
                        <div style={{ width: '500px', marginBottom: '10px' }}>
                            <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                                <span>City</span>
                            </div>
                            <input type="text" placeholder="Enter Your City" />
                        </div>
                        <div style={{ width: '500px', marginBottom: '10px' }}>
                            <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                                <span>State</span>
                            </div>
                            <input type="text" placeholder="Enter Your State" />
                        </div>
                        <div style={{ width: '500px', marginBottom: '10px' }}>
                            <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                                <span>Pincode</span>
                            </div>
                            <input type="text" placeholder=" Enter Your Area Pincode" />
                        </div>
                        
                        <div style={{ width: '500px', marginBottom: '10px' }}>
                            <Button variant="contained" color="primary">Update</Button>
                        </div>
                       

                    </div>

                </DialogContent>
            </Dialog>
        </div>
    }

}
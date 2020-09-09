// Component
import React ,{Component} from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core/';
import {connect} from 'react-redux'
import userReducer from '../../redux/actions/authReducer'

import Slide from '@material-ui/core/Slide';
import { EditProfileForm } from '../Forms/EditProfileForm'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class EditProfile extends Component {
    
    render() {
        const { open, handleClose } = this.props
        console.log(this.props.user)
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
                        <EditProfileForm user={this.props.user} />
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    }

}

export default connect (
    state=>({
        user:state.get('auth').user
    }),
    dispatch=>({
        userReducer:userReducer.getActions(dispatch)
    })
)(EditProfile)
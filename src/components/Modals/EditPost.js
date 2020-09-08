import React ,{Component} from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core/';
import Slide from '@material-ui/core/Slide';
import EditPostForm from '../Modals/EditPostForm'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class EditPost extends Component{ 
    render(){
        const { open, handleClose } = this.props
        return(
            <div>
                <Dialog

                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={() => handleClose()}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                            >
                            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                Edit Post
                            </DialogTitle>
                            <DialogContent dividers>
                                <div>
                                <EditPostForm />
                                </div>

                            </DialogContent>
                            </Dialog>
            </div>
        )
    }
}
export default EditPost
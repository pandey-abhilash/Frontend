import React ,{Component} from 'react'
import { Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@material-ui/core/';
import Slide from '@material-ui/core/Slide';
import EditPostForm from '../Modals/EditPostForm'
//import DialogActions from '@material-ui/core/DialogActions';
//import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class DeletePost extends Component{
    constructor(props) {
        super(props)
    }
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
                            <DialogTitle id="alert-dialog-slide-title">{"Are you Sure You want to delete?"}</DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        Delete...
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Delete
                                    </Button>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    </DialogActions>
                            </Dialog>
            </div>
        )
    }
}
export default DeletePost
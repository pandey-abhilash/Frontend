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

class HidePost extends Component{
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
                            <DialogTitle id="alert-dialog-slide-title">{"Hide Post?"}</DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        Hide Post
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Ok
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
export default HidePost
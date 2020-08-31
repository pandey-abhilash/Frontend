import React ,{Component} from 'react'
import { Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@material-ui/core/';
import Slide from '@material-ui/core/Slide';
import EditPostForm from '../Modals/EditPostForm'
//import DialogActions from '@material-ui/core/DialogActions';
//import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import postsReducer from '../../redux/actions/postReducer'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class DeletePost extends Component{
    constructor(props) {
        super(props)
        this.state={
            postId:''
        }
        
    }
    
    render(){
        const { open, handleClose,deletePost } = this.props
       
        
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
                                        Delete Post...
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button  color="primary" style={{color:"blue"}} onClick={(e)=>deletePost(e)}>
                                        Delete
                                    </Button>
                                    <Button  color="primary" style={{color:"blue"}} onClick={() => handleClose()}>
                                        Cancel
                                    </Button>
                                    </DialogActions>
                            </Dialog>
            </div>
        )
    }
}
export default connect(state => ({
    user: state.get('auth').user,
    myposts: state.get('posts').myposts
})
    , dispatch => ({
        postsReducer: postsReducer.getActions(dispatch)
    }))(DeletePost)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Typography, Divider, CardContent, Collapse, Button,
    CardHeader, Card, Icon, IconButton, Avatar, CardActions, TextField
} from '@material-ui/core'
import moment from 'moment'
import toastr from 'toastr';
import { MoreVert, ExpandMore, Favorite, Share, Comment } from '@material-ui/icons/';
import '../../styles/common.css'
import commentReducer from '../../redux/actions/commentReducer';
import PostAddIcon from '@material-ui/icons/PostAdd';
import BackspaceIcon from '@material-ui/icons/Backspace';
import CommentCard from './CommentCard';
import {  Menu, MenuItem, Grid } from '@material-ui/core'
import EditPost from '../Modals/EditPost'
import HidePost from '../Modals/HidePost'
import DeletePost from '../Modals/DeletePost'
// import postsReducer from '../../../redux/actions/post';

class MyPostCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            commentMessage: '',
            openMenu: null,
            openEdit: false,
            openHide:false,
            openDelete:false
        }
        this.onChangeComment = this.onChangeComment.bind(this)
        this.addComment = this.addComment.bind(this);
        this.fetchPostComments = this.fetchPostComments

        this.openEditMenu = this.openEditMenu.bind(this)
        this.handleOpenEdit = this.handleOpenEdit.bind(this)
        this.handleOpenHide = this.handleOpenHide.bind(this)
        this.handleOpenDelete = this.handleOpenDelete.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.deletePost=this.deletePost.bind(this)
   
    }

    handleClose() {
        this.setState({
            openEdit: false,
            openHide:false,
            openDelete:false
        })
    }

    handleOpenEdit() {
        this.setState({
            openEdit: true
        })
    }
    handleOpenHide() {
        this.setState({
            openHide: true
        })
    }

    handleOpenDelete() {
        this.setState({
            openDelete: true
        })
    }


    openEditMenu(e) {
        this.setState({
            openMenu: e.currentTarget

        })
    }

    componentWillReceiveProps(nextProps){
        if(this.props!==nextProps){
            this.props=nextProps
        }
    }

    componentDidMount() {
        // this.fetchPostComments()

    }

    onChangeComment(e) {
        this.setState({ commentMessage: e.target.value })
    }

    fetchPostComments() {
        const { post, commentReducer } = this.props;
        if(!this.state.expanded){
            commentReducer.fetchComments({ postId: post.postId }).then(res=>{
                if(res.data.success){
                    this.setState({expanded:!this.state.expanded});
                }
            })
        }else{
            this.setState({expanded:!this.state.expanded});
        }
    }

    addComment() {
        const { post, onSubmitComment } = this.props
        const { commentMessage } = this.state;
        if (!commentMessage && commentMessage.length === 0) {
            return toastr.warning("Please enter comment to add.")
        }
        onSubmitComment(post.postId, commentMessage)
        this.setState({ commentMessage: '' });
    }
    deletePost(){
        const{post,deleteUserPost}=this.props
        //debugger
        deleteUserPost(post.postId)
        
    }





    render() {
        console.log(this.props)
        const { openMenu } = this.state
        const { post, onAddLike, user, comments } = this.props
        //console.log(user)
        const { commentMessage } = this.state;
        const _checkLiked = (post) => {
            if (post.likes.filter(l => l.email === user.email).length > 0) {
                return false
            }
            return true
        }
        const _checkMyComment = (post) => {
            if (post.likes.filter(l => l.email === user.email).length > 0) {
                return true
            }
            return false
        }
        return (
            <div key={post.postId}>
                <Card style={{ padding: "20px 20px 0px 20px", marginBottom: '20px' }}>
                    <CardHeader
                        avatar={<Avatar aria-label="recipe" style={{ textTransform: 'capitalize', backgroundColor:"green" }}>{post.displayName ? post.displayName[0] : 'N/A'}</Avatar>}
                        action={
                        <IconButton aria-label="settings">
                            <MoreVert
                            onClick={(e) => this.openEditMenu(e)}
                            />
                           
                                <Menu
                                id="simple-menu"
                                anchorEl={openMenu}
                                keepMounted
                                open={Boolean(openMenu)}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                onClose={() => this.setState({ openMenu: null })}
                            >             
                             
                            {user.email===post.email &&  <MenuItem onClick={this.handleOpenEdit}>Edit</MenuItem>} 
                            {user.email===post.email && <MenuItem onClick={this.handleOpenDelete}>Delete </MenuItem>}
                            <MenuItem onClick={this.handleOpenHide}>Hide </MenuItem>

                                             
                            </Menu>
                            
                            </IconButton>}
                        title={post.displayName}
                        subheader={moment(post.createdAt).format('llll')}
                    />
                    <CardContent>
                        <Typography variant="subtitle2" color="textSecondary" component="p">{post.message}</Typography>
                    </CardContent>
                    <Divider />
                    <CardActions disableSpacing>
                        <div style={{ display: 'flex', fontSize: '12px', 'width': '100%', 'alignContent': 'space-between' }}>
                            <div style={{ flex: 1 }}><span>{post.likeCount} likes</span></div>
                            <div><span>{post.commentCount} Comment</span></div>
                        </div>
                    </CardActions>
                    <Divider />
                    <CardActions disableSpacing>
                        <div style={{ display: 'flex', fontSize: '14px', 'width': '100%', justifyContent: 'center' }}>
                            <div style={{ textAlign: "center", flexGrow: 1 }}>
                                {_checkLiked(post, user) && <IconButton className="likes" style={{ padding: '5px' }} onClick={(e) => onAddLike(post.postId)} >
                                    <Favorite />
                                </IconButton>}
                                {!_checkLiked(post, user) && <IconButton style={{ padding: '5px', color: 'red' }}>
                                    <Favorite />
                                </IconButton>}
                                <span> Like</span>
                            </div>
                            <div style={{ textAlign: "center", flexGrow: 1 }}>
                                <IconButton
                                    className="comment"
                                    style={{ padding: '5px' }}
                                    onClick={() => this.fetchPostComments()}
                                >
                                    <Comment />
                                </IconButton>
                                <span>Comment</span>
                            </div>
                        </div>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <Divider />
                        <CardContent style={{ fontSize: "12px", padding: '10px 0px 0px 0px' }}>
                            <div style={{ width: '100%'}}>
                                {comments[post.postId] && comments[post.postId].length > 0 && comments[post.postId].map(comment =>{
                                    return <CommentCard
                                    key={comment.commentId}
                                    comment={comment}
                                    />
                                })}
                            </div>
                        </CardContent>
                        <CardContent style={{ fontSize: "12px", padding: '10px 0px 0px 0px' }}>
                            <div style={{ width: '100%', display: 'flex', alignContent: 'space-between' }}>
                                <div style={{ flexGrow: 1, padding: "5px 0px 10px 0px" }}>
                                    <TextField
                                        style={{ width: '100%' }}
                                        inputProps={{
                                            style: { padding: '8px', marginTop: '5px', }
                                        }}
                                        variant="standard"
                                        value={commentMessage}
                                        placeholder="write a comment..."
                                        onChange={(e) => this.onChangeComment(e)}
                                    />
                                </div>
                                <div style={{ textAlign: "inline", flexGrow: 0, padding: "10px 0px 10px 10px" }}>
                                    <IconButton
                                        style={{ padding: '5px' }}
                                        className="iconbtn"
                                        color="primary" 
                                        onClick={(e) => this.addComment(e)}
                                    >
                                        <PostAddIcon />
                                    </IconButton>
                                    <IconButton
                                        style={{ padding: '5px' }}
                                        className="iconbtn"
                                        color="secondary" 
                                        variant="outlined"
                                        onClick={() => this.setState({ expanded: false })}
                                    >
                                        <BackspaceIcon />
                                    </IconButton>
                                </div>
                                
                            </div>
                            
                        </CardContent>
                        
                    </Collapse>
                    
                            <div>
                            <EditPost
                            open={this.state.openEdit}
                            handleClose={this.handleClose}
                            />
                        </div>
                        <div>
                            <HidePost
                            open={this.state.openHide}
                            handleClose={this.handleClose}
                            />
                        </div>
                        <div>
                            <DeletePost
                            open={this.state.openDelete}
                            handleClose={this.handleClose}
                            deletePost={this.deletePost}

                            />
                        </div>
                       
                </Card>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.get('auth').user,
        comments: state.get('comments').comments
    }),
    dispatch => ({
        commentReducer: commentReducer.getActions(dispatch)
    })
)(MyPostCard)

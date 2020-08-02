import React, { Component } from 'react'
import '../../../styles/Profile.css';
import { connect } from 'react-redux';
import {
    Grid, Paper, Typography, Divider, TextField, Button, CardContent,
    CardHeader, Card, Icon, IconButton, Avatar, CardActions
} from '@material-ui/core'
import toastr from 'toastr';
import moment from 'moment'
import { MoreVert, ExpandMore, Favorite, Share, CreateNewFolder } from '@material-ui/icons/';
import postsReducer from '../../../redux/actions/post';
import MyPostCard from '../../../components/Cards/MyPostCard';

class MyPost extends Component {
    constructor() {
        super()
        this.state = {
            data: false,
            pageNumber: 0,
            pageSize: 10,
            message: null,
            expanded: false
        }
        this.onGetMyPosts = this.onGetMyPosts.bind(this);
        this.onCreatePosts = this.onCreatePosts.bind(this);
    }
    componentDidMount() {
        this.onGetMyPosts();
    }

    onCreatePosts() {
        const { postsReducer, user } = this.props
        const { message } = this.state;
        if (!message) {
            return toastr.warning("Please enter something in the to posts.")
        }
        let data = {
            displayName: user.displayName,
            email: user.email,
            message,
            comments: [],
            likes: [],
            images: [],
            tags: [],
            shares: [],
            likesCount: 0,
            commentsCount: 0,
        }
        postsReducer.createPosts(data).then(res => {
            if (res.success) {
                this.setState({ message: null }, () => {
                    this.onGetMyPosts();
                })
            }
        })
    }

    onGetMyPosts() {
        const { pageNumber, pageSize } = this.state
        const { postsReducer, user } = this.props
        postsReducer.fetchPosts({
            email: user.email,
            pageNumber,
            pageSize
        });
    }
    render() {
        const data = this.state.data;
        const { myposts } = this.props
        return (
            <div className='profile'>
                <Grid container justify="space-between" >
                    <Grid item sm={12} md={2} lg={2}>
                        <Paper style={{ height: 'auto', padding: '20px' }}>
                            <Typography>dddd</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6}>
                        <Paper style={{ padding: '20px' }}>
                        <IconButton
                                    style={{ padding: '5px', color: "#5b78c7", cursor:"none" }}
                                >
                                    <CreateNewFolder/>
                                </IconButton>
                            <Typography variant="button" style={{ paddingLeft: "5px", color: "#5b78c7" }} gutterBottom>
                                Post something in your mind.
                                </Typography>
                            <Divider />
                            <div style={{ padding: '20px' }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    value={this.state.message}
                                    style={{ width: "100%" }}
                                    onChange={e => this.setState({ message: e.target.value })}
                                    rows={4}
                                    placeholder="Write something in like to share"
                                    variant="outlined"
                                />
                                <div style={{ marginTop: '10px', alignContent: "end" }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        // style={{ backgroundColor: "#5b78c7", color: "#fff" }}
                                        onClick={(e) => this.onCreatePosts(e)}
                                    >
                                        Publish
                                            </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{ marginLeft: "5px" }}
                                    >
                                        Add Photo
                                        </Button>
                                </div>
                            </div>
                            <div>
                                <Divider />
                            </div>
                        </Paper>
                        <div style={{ paddingTop: '20px' }}>
                            {myposts.length > 0 && myposts.map(post => {
                                return <MyPostCard
                                    post={post}
                                />
                            })}
                        </div>
                    </Grid>

                    <Grid item sm={12} md={3} lg={3}>
                        <Paper style={{ height: 'auto', padding: '20px' }}>
                            hello
                        </Paper>
                    </Grid>
                </Grid>
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
    }))(MyPost)

import React, { Component } from 'react'
import '../../../styles/Profile.css';
import { Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import postsReducer from '../../../redux/actions/postReducer'
import MyPostCard from '../../../components/Cards/MyPostCard'
import AllUserCard from '../../../components/Cards/AllUserCard'
import userReducer from '../../../redux/actions/authReducer'
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            pageNumber: 0,
            pageSize: 4
        }
        this.onGetAllPosts=this.onGetAllPosts.bind(this)
        this.onSubmitComment = this.onSubmitComment.bind(this);
        this.onAddLike = this.onAddLike.bind(this)
        this.deleteUserPost=this.deleteUserPost.bind(this)
        this.onGetAllUserPosts=this.onGetAllUserPosts.bind(this)
    }

    componentDidMount() {
        this.onGetAllPosts();
    }

    componentWillMount(){
        this.onGetAllUserPosts();
    }
    
    onGetAllPosts(){
        const { pageNumber, pageSize } = this.state
        const { postsReducer, user } = this.props
        console.log(postsReducer)
        //console.log(pageNumber,pageSize)
        //debugger
        postsReducer.fetchAllPosts({
            email: user.email,
            pageNumber,
            pageSize
        });
        }
        onGetAllUserPosts(){
            const { pageNumber, pageSize } = this.state
            const { userReducer, user } = this.props
            console.log(userReducer)
            userReducer.fetchAllUserPosts({
                email: user.email,
                pageNumber,
                pageSize
            });
            }




        onAddLike(postId) {
            const { postsReducer, user, myallpost } = this.props
            let findPost = myallpost.filter(p => p.postId === postId);
            if (findPost.length > 0) {
                let checkLikeExits = findPost[0].likes.filter(l => l.email === user.email);
                if (checkLikeExits.length > 0) {
                    return
                }
            }
            postsReducer.likePost({
                postId,
                likesBy: { email: user.email, displayName: user.displayName,likeAt: Date.now()}
            }).then(res => {
                if (res.success) {
                    this.onGetAllPosts()
                }
            })
        }

        onSubmitComment(postId, commentMessage) {
            const { postsReducer, user } = this.props;
            postsReducer.commentPost({
                postId,
                commentBy: {
                    email: user.email, displayName: user.displayName, commentMessage,
                }
            }).then(res => {
                if (res.success) {
                    this.onGetAllPosts()
                }
            })
        }
        deleteUserPost(postId){
            const{postsReducer}=this.props
            postsReducer.deletePost({postId})
             
        }

    render() {
        const{myallpost,myalluserpost}=this.props
        console.log(myallpost)
        console.log(myalluserpost)
        return (
            <div className='profile'>
                <Grid container justify="space-between" >
                    <Grid item sm={12} md={2} lg={2}>
                        <Paper style={{ height: 'auto', padding: '20px' }}>
                            Category
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6}>
                        {myallpost.length > 0 && myallpost.map(post => {
                                return <MyPostCard
                                key={post._id}
                                    post={post}
                                    onAddLike={this.onAddLike}
                                    onSubmitComment={this.onSubmitComment}
                                    deleteUserPost={this.deleteUserPost}
                                />
                            })}
                    </Grid>
                    <Grid item sm={12} md={3} lg={3}>
                        <Paper style={{ height: 'auto', padding: '20px' }}>
                        {myalluserpost.length > 0 && myalluserpost.map(post => {
                                return <AllUserCard
                                key={post._id}
                                    post={post}
                                />
                            })}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default connect(
    state=>({
    user: state.get('auth').user,
    myalluserpost:state.get('auth').myalluserpost,
    myallpost: state.get('posts').myallpost
    }),
    dispatch=>({
        userReducer:userReducer.getActions(dispatch),
        postsReducer: postsReducer.getActions(dispatch)
    })
)(Home)
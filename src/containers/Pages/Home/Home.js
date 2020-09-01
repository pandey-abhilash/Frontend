import React, { Component } from 'react'
import '../../../styles/Profile.css';
import { Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import postsReducer from '../../../redux/actions/postReducer'
import MyPostCard from '../../../components/Cards/MyPostCard'
import AllUserCard from '../../../components/Cards/AllUserCard'
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            pageNumber: 0,
            pageSize: 4
        }
        this.onGetAllPosts=this.onGetAllPosts.bind(this)
    }

    componentDidMount() {
        this.onGetAllPosts();
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

    render() {
        const{myallpost}=this.props
        console.log(myallpost)
        return (
            <div className='profile'>
                <Grid container justify="space-between" >
                    <Grid item sm={12} md={2} lg={2}>
                        <Paper style={{ height: 'auto', padding: '20px' }}>
                            Category
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6}>
                        <Paper style={{ height: 'auto', padding: '20px' }}>
                        {myallpost.length > 0 && myallpost.map(post => {
                                return <MyPostCard
                                key={post._id}
                                    post={post}
                                />
                            })}
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={3} lg={3}>
                        <Paper style={{ height: 'auto', padding: '20px' }}>
                        {myallpost.length > 0 && myallpost.map(post => {
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
    myallpost: state.get('posts').myallpost
    }),
    dispatch=>({
        postsReducer: postsReducer.getActions(dispatch)
    })
)(Home)
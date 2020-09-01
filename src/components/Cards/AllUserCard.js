import React ,{Component} from 'react'
import { connect } from 'react-redux';
import {
    Typography, Divider, CardContent, Collapse, Button,
    CardHeader, Card, Icon, IconButton, Avatar, CardActions, TextField
} from '@material-ui/core'
import moment from 'moment'
import { MoreVert, ExpandMore, Favorite, Share, Comment } from '@material-ui/icons/';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import postsReducer from '../../redux/actions/postReducer'
class AllUserCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { post } = this.props
        console.log(post)
        return(
            <div>
                {/* <Card
                    style={{ padding: "20px", marginBottom: '20px' ,marginTop:"60px"}}
                > */}
               
                    <CardHeader style={{marginTop:"10px"}}
                    
                        avatar={
                            <Avatar aria-label="recipe" style={{ textTransform: 'capitalize' }}>
                                {post.displayName ? post.displayName[0] : 'N/A'}
                            </Avatar>
                        }
                        
                        title={post.displayName}
                       
                    />
                    <div style={{ marginTop: '30px', alignContent: "end" }}>
                                <Button
                                        variant="contained"
                                        color="primary"
                                        style={{ marginLeft: "75px" }}
                                    >
                                        Follow
                                            </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{ marginLeft: "60px" }}
                                    >
                                        Unfollow
                                        </Button>
                                </div>
                {/* </Card> */}

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
    }))(AllUserCard)

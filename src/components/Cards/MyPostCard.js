import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Typography, Divider, CardContent, Collapse, Button,
    CardHeader, Card, Icon, IconButton, Avatar, CardActions, TextField
} from '@material-ui/core'
import moment from 'moment'
import { MoreVert, ExpandMore, Favorite, Share, Comment } from '@material-ui/icons/';
import '../../styles/common.css'

// import postsReducer from '../../../redux/actions/post';

class MyPostCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
    }
    render() {
        const { post } = this.props
        return (
            <div>
                <Card
                    style={{ padding: "20px", marginBottom: '20px' }}
                >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" style={{ textTransform: 'capitalize' }}>
                                {post.displayName ? post.displayName[0] : 'N/A'}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVert />
                            </IconButton>
                        }
                        title={post.displayName}
                        subheader={moment(post.createdAt).format('llll')}
                    />
                    <CardContent>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            {post.message}
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions disableSpacing>
                        <div style={{
                            display: 'flex',
                            'width': '100%',
                            'alignContent': 'space-between'

                        }}>
                            <div style={{ flex: 1 }}>
                                <IconButton className="likes" style={{ padding: '5px' }}>
                                    <Favorite />
                                </IconButton>
                                <span>{post.likesCount} likes</span>
                            </div>
                            <div>
                                <IconButton
                                    className="likes"
                                    style={{ padding: '5px' }}
                                    onClick={() => this.setState({ expanded: !this.state.expanded })}
                                >
                                    <Comment />
                                </IconButton>
                                <span>{post.commentsCount} Comment</span>
                            </div>
                        </div>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <Divider />
                        <CardContent style={{ fontSize: "12px" }}>
                            <Typography paragraph>Add Comments:</Typography>
                            <Typography paragraph>
                                <TextField style={{ width: '100%' }} />
                                <div style={{ width: '100%' }}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        style={{ margin: "3px", textAlign: "end" }}
                                    >Add
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="secondary"
                                        onClick={()=>this.setState({expanded:false })}
                                        style={{ margin: "3px", textAlign: "end" }}
                                    >
                                        Discard
                                    </Button>
                                </div>
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.get('auth').user
    }),
    dispatch => ({})
)(MyPostCard)

import React from 'react'
import { MoreVert, ExpandMore, Favorite, Share, Comment } from '@material-ui/icons/';
import moment from 'moment'
import { Card, CardHeader, Divider, CardActions, IconButton, Avatar, Typography, CardContent } from '@material-ui/core'

const CommentCard = (props) => {
    const { comment } = props;
    return (
            <div style={{ padding: "0px" }}>
                <CardHeader
                style={{padding:"0px", paddingTop:"10px"}}
                    titleTypographyProps={{
                        style:{fontSize:'12px'}
                    }}
                    avatar={<Avatar style={{ textTransform: 'capitalize', width:'25px', height:'25px', fontSize:"12px" }}>{comment.displayName ? comment.displayName[0] : 'N/A'}</Avatar>}
                    title={comment.displayName}
                    subheader={comment.commentMessage}
                />
            </div>
    )
}

export default CommentCard;
import React, { Component } from 'react'
import '../../../styles/Profile.css';
import { Grid, Paper, Typography, Divider ,TextField, Button,CardContent,Card} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';


export default class MyPost extends Component {
    constructor(){
        super()
        this.state={
            data:false
        }
    }
    componentDidMount(){
        let url="http://localhost:3001/post/0/10"
        fetch(url,{
            method:'GET',
            header:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        }).then((result)=>{
            result.json().then((resp)=>{
                this.setState({data:resp})
            })
        })
    }
    render() {
        const data=this.state.data;
        console.warn(data);
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
                            <div>
                                <Typography variant="h5"><b>Publish your post here....</b></Typography>
                                <MoreHorizIcon style={{marginLeft:'750px'}}/>
                                <Divider />
                            </div>
                            <div style={{padding:'20px'}}>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    style={{width:"100%"}}
                                    rows={4}
                                    placeholder="Write something in like to share"
                                    variant="outlined"
                                />
                                <div style={{marginTop:'10px', alignContent:"end"}}>
                                    <Button style={{backgroundColor:"#5b78c7", color:"#fff"}}>Publish</Button>
                                    <Button style={{backgroundColor:"#5b78c7", color:"#fff",marginLeft:"5px"}}>Add Photo</Button>
                                </div>
                            </div>
                            <div>
                          
                            <Divider />
                            
                            </div>
                            
                        </Paper>

                        <Card className="card" style={{ width: '100%' }}>
                        
                                <div style={{ padding: '10px' }}>
                                    <div className="heading">
                                        <ThumbUpIcon style={{marginLeft:'200px'}}/>Like
                                        <ChatBubbleOutlineIcon style={{marginLeft:'250px'}}/>Comment
                                    </div>
                                    <Divider />
                                    <CardContent>
                                    
                                        <div>
                                            
                                        <p>View previous comments</p>
                                       
                                        <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    style={{width:"45%",marginLeft:'55px',marginTop:'8px',border:'1px solid black',borderRadius:'25px'}}
                                    rows={3}
                                    placeholder="Write"
                                    variant="outlined" 
                                    
                                />
                                   <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    style={{width:"90%",marginLeft:'55px',marginTop:'8px',border:'1px solid black',borderRadius:'25px'}}
                                    rows={2}
                                    placeholder="Write a comment......."
                                    variant="outlined"

                                />
                            
                                
                                      {
                                          data ?
                                          <div>
                                             
                                              <p>Name:{data.displayName} {data.email} {data.message}</p>
                                          </div>
                                          :<p>Please wait....</p>
                                      }
                                      
                                        </div>
                                    </CardContent>
                                    </div>
                            </Card>
                        

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

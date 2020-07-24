import React, { Component } from 'react'
import '../../../styles/Profile.css';
import { Grid, Paper, Typography, Divider ,TextField, Button} from '@material-ui/core'

export default class MyPost extends Component {
    render() {
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
                                hiii nidhi
                            <Divider />
                            </div>
                        </Paper>
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

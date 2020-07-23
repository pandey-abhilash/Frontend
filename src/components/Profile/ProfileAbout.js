import React, { Component } from 'react'
import { Grid, Card, Typography, CardContent, Divider } from '@material-ui/core';
import {ProfileBasicDetail} from './ProfileBasicDetail'
import {connect} from 'react-redux'
import userReducer from '../../redux/actions/auth'

class ProfileAbout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section >
                <div className="about">
                    <Grid
                        container
                        justify="space-around"
                        alignItems="center"
                        alignContent="center"
                        spacing={2}
                    >
                        <Grid item sm={12} md={4} lg={4}>
                            <Card className="card">
                                <div style={{ padding: '10px' }}>
                                    <div className="heading">
                                        <Typography variant="h5">Profile Satus</Typography>
                                    </div>
                                    <Divider />
                                    <CardContent>
                                        sss
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item sm={12} md={8} lg={8}>
                            <Card className="card" style={{ width: '100%' }}>
                                <div style={{ padding: '10px' }}>
                                    <div className="heading">
                                        <Typography variant="h5">Basic Details</Typography>
                                    </div>
                                    <Divider />
                                    <CardContent>
                                        <div>
                                            <ProfileBasicDetail user={this.props.user}/>

                                   
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>

                    </Grid>
                </div>
            </section>
        )
    }
}

export default connect (
    state=>({
        user:state.get('auth').user
    }),
    dispatch=>({
        userReducer:userReducer.getActions(dispatch)
    })
)(ProfileAbout)
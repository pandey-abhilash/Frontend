import React, { Component } from 'react'
import '../../../styles/Profile.css';
import { Grid, Paper } from '@material-ui/core';

export default class Home extends Component {
    render() {
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
                            hello
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

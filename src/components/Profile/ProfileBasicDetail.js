import React, { Component } from 'react'

export class ProfileBasicDetail extends Component {
    render() {
        const { user } = this.props
        return (
            <div>
                <div style={{ width: '900px', marginBottom: '20px' }}>
                    
                    <div style={{ fontWeight: '600' }}>
                    <span style={{marginBottom:'15px'}}>Master </span>
        <span style={{marginLeft:'285px'}}>Marks</span>
        <span style={{marginLeft:'145px'}}>Year</span>
        <span style={{marginLeft:'145px'}}>Marksheet</span>
                    </div>
                    <span>Vision Institute Of Pharmacy</span>
                    <span style={{marginLeft:'145px'}}>80%</span>
                    <span style={{marginLeft:'130px'}}>2015-2018</span>
                    <span style={{marginLeft:'125px'}}>Marksheet</span>
                    


                    <div style={{ width: '900px', marginBottom: '10px' }}>
                        <div style={{ fontWeight: '600' }}>
                        <span style={{marginBottom:'15px'}}>Bachelors</span>
                        <span style={{marginLeft:'271px'}}>Marks</span>
                        <span style={{marginLeft:'142px'}}>Year</span>
                        <span style={{marginLeft:'144px'}}>Marksheet</span>
                        </div>
                        <span>Vision Institute Of Pharmacy</span>
                    <span style={{marginLeft:'145px'}}>80%</span>
                    <span style={{marginLeft:'132px'}}>2009-2015</span>
                    <span style={{marginLeft:'122px'}}>Marksheet</span>
                    </div>



                    <div style={{ width: '900px', marginBottom: '10px' }}>
                        <div style={{ fontWeight: '600' }}>
                        <span>Intermediate</span>
                        <span style={{marginLeft:'247px'}}>Marks</span>
                        <span style={{marginLeft:'138px'}}>Year</span>
                        <span style={{marginLeft:'146px'}}>Marksheet</span>
                        </div>
                        <span>Vision Institute Of Pharmacy</span>
                    <span style={{marginLeft:'145px'}}>80%</span>
                    <span style={{marginLeft:'130px'}}>2007-2009</span>
                    <span style={{marginLeft:'122px'}}>Marksheet</span>

                    </div>



                    <div style={{ width: '900px', marginBottom: '10px' }}>
                        <div style={{ fontWeight: '600' }}>
                        <span>High School</span>
                        <span style={{marginLeft:'247px'}}>Marks</span>
                        <span style={{marginLeft:'138px'}}>Year</span>
                        <span style={{marginLeft:'151px'}}>Marksheet</span>
                        </div>
                        <span>Vision Institute Of Pharmacy</span>
                    <span style={{marginLeft:'145px'}}>80%</span>
                    <span style={{marginLeft:'130px'}}>2005-2007</span>
                    <span style={{marginLeft:'122px'}}>Marksheet</span>
                    </div>
                </div>
            </div>
        )
    }
}
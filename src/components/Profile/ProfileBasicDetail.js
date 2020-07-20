import React ,{component} from 'react'

export class ProfileBasicDetail extends React.Component{
    render(){
        const { user } = this.props 
        return(
            <div>
                 <div style={{ width: '600px',marginBottom: '20px' }}>
                    <div style={{fontWeight: '600' }}>
        <span style={{marginBottom:'15px'}}>Your Name </span>
        <span style={{marginLeft:'285px'}}>Your Email ID </span>
                    </div>
                    <span>{user.displayName}</span>
                    <span style={{marginLeft:'278px'}}>{user.email}</span>
                    



                <div style={{ width: '600px', marginBottom: '10px' }}>
                    <div style={{  fontWeight: '600' }}>
                        <span style={{marginBottom:'15px'}}>About Me:-</span>
                        <span style={{marginLeft:'290px'}}>Contact </span>
                    </div>
                    <span>about me</span>
                    <span style={{marginLeft:'303px'}}>{user.phone}</span>


                   
                </div>

               

                <div style={{ width: '600px', marginBottom: '10px' }}>
                    <div style={{  fontWeight: '600' }}>
                        <span>Street/Location</span>
                        <span style={{marginLeft:'262px'}}>City</span>
                    </div>
                    <span>street/location</span>
                    <span style={{marginLeft:'272px'}}>city</span>

                    
                </div>

                

                <div style={{ width: '600px', marginBottom: '10px' }}>
                    <div style={{ fontWeight: '600' }}>
                        <span>State</span>
                        <span style={{marginLeft:'340px'}}>Pincode</span>
                    </div>
                    <span>state</span>
                    <span style={{marginLeft:'342px'}}>pincode</span>
                    
                </div>
               


                </div>

            </div>
        )
    }
}
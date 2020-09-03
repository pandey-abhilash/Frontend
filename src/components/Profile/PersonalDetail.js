import React ,{Component} from 'react'

export class PersonalDetail extends Component{
    render(){
        const { user } = this.props 
        return(
            <div>
                 <div style={{ width: '600px',marginBottom: '20px' }}>
                    <div style={{fontWeight: '600' }}>
        <span style={{marginBottom:'15px'}}>Gender </span>
        <span style={{marginLeft:'205px'}}>Date Of Birth </span>
                    </div>
                    <span>Female</span>
                    <span style={{marginLeft:'210px'}}>6 Feb 1996</span>
                    



                <div style={{ width: '600px', marginBottom: '10px' }}>
                    <div style={{  fontWeight: '600' }}>
                        <span style={{marginBottom:'15px'}}>Blood Group</span>
                        <span style={{marginLeft:'170px'}}>Registered Email </span>
                    </div>
                    <span>A+</span>
                    <span style={{marginLeft:'240px'}}>{user.email}</span>


                   
                </div>

               

                <div style={{ width: '600px', marginBottom: '10px' }}>
                    <div style={{  fontWeight: '600' }}>
                        <span>Permanent Address</span>
                        {/* <span style={{marginLeft:'262px'}}>City</span> */}
                    </div>
                    <span>Gayatri Puram,Gorakhpur Uttar Pradesh-273004</span>
                    {/* <span style={{marginLeft:'272px'}}>city</span> */}

                    
                </div>

                

                <div style={{ width: '600px', marginBottom: '10px' }}>
                    <div style={{ fontWeight: '600' }}>
                        <span>Residential Address</span>
                        {/* <span style={{marginLeft:'340px'}}>Pincode</span> */}
                    </div>
                    <span>Gayatri Puram,Gorakhpur Uttar Pradesh-273004</span>
                    {/* <span style={{marginLeft:'342px'}}>pincode</span> */}
                    
                </div>
               


                </div>

            </div>
        )
    }
}
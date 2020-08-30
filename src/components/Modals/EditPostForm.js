import React ,{Component}from 'react'
class EditPostForm extends Component{
    render(){
        return(
            <div>
                <div style={{ width: '500px', marginBottom: '10px'}}>
                    <div style={{ marginBottom: '10px', fontWeight: '600' }}>
                        <span>Your Post</span>
                    </div>
                    <input
                        type="text"
                        placeholder=" Enter Your Post"
                        style={{width:"450px",padding:"10px"}}
                    />

                </div>
            </div>
        )
    }
}
export default EditPostForm
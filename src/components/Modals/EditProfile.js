// Component
import React from 'react'
import Modal from '@material-ui/core/Modal';

export default class EditProfile extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const{open,handleClose}=this.props
        debugger

        return <div>
           <Modal
           style={{ 
            position: 'absolute',
            width: 400,
            backgroundColor:'#fff',
            border: '2px solid #000',
            boxShadow: '5px',
            padding:'10px'
          }}
        open={open}
        onClose={()=>handleClose()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
     <div >Edit Modal</div>
      </Modal>
        </div>
    }

}
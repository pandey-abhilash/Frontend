// Component
import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core/';

import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { open, handleClose } = this.props
    return <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Modal
        </DialogTitle>
        <DialogContent dividers>
          Hllo
        </DialogContent>
      </Dialog>
    </div>
  }

}
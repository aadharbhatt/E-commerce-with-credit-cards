import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ConfirmDialogue({openState, confirmAndPay, dialogueCancel, cartItems }) {
    const cartTotal = cartItems.map(item => item.price).reduce((prev, curr) => prev + curr, 0)
    return (
        <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button> */}
            <Dialog
                open={openState}
                TransitionComponent={Transition}
                keepMounted
                onClose={dialogueCancel}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Confirm and Pay</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Confirm order of ${cartTotal} and pay.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={dialogueCancel} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={confirmAndPay} variant="outlined" color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        userCards: state.Cart.userCards,
        cartItems: state.Cart.Items || []
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch,
//         handleRemoveCard: (currCard) => dispatch(removeCardAction(currCard))
//     }
// };
export default connect(mapStateToProps, null)(ConfirmDialogue);

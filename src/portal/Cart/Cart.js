import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Container } from './Cart.styled';
import ShoppingCart from './components/ShoppingCart';
import PaymentMethod from './components/PaymentMethod';
import OrderStatus from './components/OrderStatus';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import ConfirmDialogue from './components/ConfirmDialogue';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Cart', 'Payment Method', "Confirm Modal"];
}

function getStepContent({ activeStep, cartItems, setConfirmDialog, handleNext, openConfirmDialog, confirmAndPay, dialogueCancel }) {
    switch (activeStep) {
        case 0:
            return <ShoppingCart
                cartItems={cartItems}
            />;
        case 1:
            return <PaymentMethod
                handleNext={handleNext}
                setConfirmDialog={setConfirmDialog}
            />;
        case 2:
            return <ConfirmDialogue
                openState={openConfirmDialog}
                setConfirmDialog={setConfirmDialog}
                handleNext={handleNext}
                confirmAndPay={confirmAndPay}
                dialogueCancel={dialogueCancel}
            />
        default:
            return 'No step Found';
    }
}

function Cart(props) {
    const classes = useStyles();
    const [openConfirmDialog, setConfirmDialog] = React.useState(true);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const confirmAndPay = () => {
        handleNext()
        setConfirmDialog(!openConfirmDialog)
    }

    const dialogueCancel = () => {
        handleBack()
        setConfirmDialog(!openConfirmDialog)
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const { cartItems } = props;
    // console.log(cartItems);
    return (
        <Container>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <OrderStatus
                            cartItems={cartItems}
                        />
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>
                                {
                                    getStepContent({ activeStep, cartItems, setConfirmDialog, handleNext, openConfirmDialog, confirmAndPay, dialogueCancel })
                                }
                            </Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                {
                                    activeStep < steps.length - 2
                                    &&
                                    <Button variant="contained" color="primary" onClick={handleNext} disabled={cartItems.length === 0}>
                                        Next
                                    </Button>
                                }
                            </div>
                        </div>
                    )}
            </div>
        </Container>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        cartItems: state.Cart.Items || []
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

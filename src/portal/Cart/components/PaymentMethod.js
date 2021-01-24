import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Pay from '../payment/Pay';
import CreditCard from '../payment/Card';
import { addNewCreditCardAction, deleteCreditCardAction, setSelectedCard } from '../Cart.action';
import { CardDisplay } from '../Cart.styled';

const AddNewCardFlow = (props) => {
    return (
        <Paper component={'section'} variant="outlined" style={{ padding: '1rem', display: 'block', marginTop: '2rem' }}>
            <Grid container direction="row" alignItems="center">
                <Pay {...props} />
            </Grid>
        </Paper>
    )
};

const handleUseOfCard = ({handleNext, setConfirmDialog, dispatch, selectedCard }) => {
    console.log('handleUseOfCard ', selectedCard)
    setConfirmDialog(true)
    handleNext()
    dispatch(setSelectedCard(selectedCard))

};

const PaymentMethod = (props) => {
    const [addingNewCards, handleAddingNewCards] = useState(false)
    const { userCards, addNewCreditCard, deleteCreditCard } = props;
    return (
        <>
            <Paper component={'section'} variant="outlined" style={{ display: 'block' }}>
                <Grid container direction="row" alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h5" align='left' style={{ paddingLeft: '2rem', paddingTop: '0.5rem' }} gutterBottom>
                            Select card
                    </Typography>
                    </Grid>

                    <Grid container justify="flex-end" xs={6}>
                        <Button size="large" variant="contained" color="primary" onClick={() => handleAddingNewCards(true)}>
                            Add new card
                    </Button>
                    </Grid>
                </Grid>
            </Paper>

            {
                addingNewCards && <AddNewCardFlow
                    addingNewCards={addingNewCards}
                    handleAddingNewCards={handleAddingNewCards}
                    addNewCreditCard={addNewCreditCard}
                />
            }
            <Paper container variant="outlined" style={{ display: 'block', marginTop: '2rem' }}>
                <Grid container direction="row" alignItems="center">
                    {
                        userCards ?
                            userCards.map((obj, i) => (
                                <Grid item xs={12} md={6} lg={4} key={i}>
                                    <CardDisplay>
                                        <CreditCard {...obj}>
                                            <IconButton aria-label="delete" onClick={() => deleteCreditCard({...obj})}>
                                                <DeleteIcon fontSize="large" color="secondary"/>
                                            </IconButton>

                                            <Button variant="contained" onClick={() => handleUseOfCard({...props, selectedCard:{...obj}})} size="small" color="primary">
                                                Use
                                            </Button>
                                        </CreditCard>
                                    </CardDisplay>
                                </Grid>
                            ))
                            :
                            <Grid item xs={12}>
                                <Typography variant="h5" align='center' style={{ paddingLeft: '2rem', paddingTop: '0.5rem' }} gutterBottom>
                                    No card available
                                </Typography>
                            </Grid>
                    }
                </Grid>
            </Paper>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        userCards: state.Cart.userCards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        addNewCreditCard: (newCreditCard) => dispatch(addNewCreditCardAction(newCreditCard)),
        deleteCreditCard: (selectedCreditCard) => dispatch(deleteCreditCardAction(selectedCreditCard))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod);


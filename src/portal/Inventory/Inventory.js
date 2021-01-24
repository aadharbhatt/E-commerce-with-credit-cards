import React from 'react'
import { connect } from 'react-redux';
import MediaCard from './components/mediaCard';
import { cardsData } from './Inventory.data';
import Hero from './components/Hero';
import Grid from '@material-ui/core/Grid';
import { Container } from './Inventory.styled';
import { addToCart } from '../Cart/Cart.action';

const Inventory = (props) => {
    console.log(props);
    const { handleAddToCart, handleBuy } = props;
    return (
        <>
            <Hero />
            <Container>
                <Grid container alignContent="center">
                    {
                        cardsData.map((obj, i) => (
                            <Grid item b={2} t={2} xs={12} sm={6} md={4} lg={4} xl={3} key={i}>
                                <MediaCard {...obj}
                                    handleAddToCart={handleAddToCart}
                                    handleBuy={handleBuy}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        name: state.userName
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch,
        handleAddToCart: (currCard) => dispatch(addToCart(currCard)),
        handleBuy: (currCard) => {
            dispatch(addToCart(currCard));
            ownProps.history.push('/cart');
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
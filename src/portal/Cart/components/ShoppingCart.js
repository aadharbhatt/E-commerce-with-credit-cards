import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { removeCardAction } from '../Cart.action'

const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
        maxWidth: 345,
        marginBottom: '1rem'
    },
    media: {
        height: 140,
    },
});

const SmallCard = (props) => {
    const classes = useStyles();
    const { imagePath, imageText, cardTitle, price, cardDescription, handleRemoveCard } = props;
    const currCard = { imagePath, imageText, cardTitle, price }
    console.log(props);
    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imagePath}
                    title={imageText}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {cardTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {cardDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => handleRemoveCard(currCard)}
                >
                    Delete
                </Button>

                <Typography variant="h6" color="textSecondary" style={{ flex: 1 }} align='right' component="p">
                    ${price}
                </Typography>
            </CardActions>
        </Card>
    )
};

const ShoppingCart = (props) => {
    const { cartItems, handleRemoveCard } = props;
    const cartTotal = cartItems.map(item => item.price).reduce((prev, curr) => prev + curr, 0)
    return (
        <>
            <Paper component={'section'} variant="outlined" style={{ display: 'block' }}>
                <Grid container direction="row" alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h5" align='left' style={{ paddingLeft: '2rem', paddingTop: '0.5rem' }} gutterBottom>
                            Cart Summary
                    </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" align='right' style={{ paddingRight: '2rem', paddingTop: '0.5rem' }} gutterBottom>
                            Total of {cartItems.length} items : ${cartTotal}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Grid container alignContent="center">
                {
                    cartTotal !== 0
                        ?
                        cartItems.map((obj, i) => (
                            <Grid item b={2} t={2} xs={12} sm={6} md={4} lg={4} xl={3} key={i}>
                                <SmallCard {...obj}
                                    handleRemoveCard={handleRemoveCard}
                                />
                            </Grid>
                        ))
                        :
                        <>
                            <Grid item xs={12}>
                                <Typography variant="h5" align='center' style={{ paddingLeft: '2rem', paddingTop: '0.5rem' }} gutterBottom>
                                    Cart is empty, Add something from inventory
                                </Typography>
                            </Grid>
                        </>
                }
            </Grid>
        </>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        handleRemoveCard: (currCard) => dispatch(removeCardAction(currCard))
    }
};
export default connect(null, mapDispatchToProps)(ShoppingCart);

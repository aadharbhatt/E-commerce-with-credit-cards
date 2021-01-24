import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.action.hover,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

const Hero = () => {
    const classes = useStyles();

    return (

        <div className={classes.heroContent}>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    World's Best Places to Visit
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge. 
                That's why we used expert opinions, reader votes and current trends – and evaluated sights, cultures, scenic beauty, food scenes and more – 
                to compile this list of the world's best places to visit. Use these recommendations to craft your travel bucket list, and cast your vote below to help us
                determine next year's list. To fuel your wanderlust even more, take a photo tour of the World's Best Places to Visit.
                </Typography>
            </Container>
        </div>
    )
}
export default Hero;
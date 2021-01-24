import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: '1rem'
  },
  media: {
    height: 140,
  },
});

const handleMouse = (e, hover, setHover) => {
  e.stopPropagation();
  setHover(!hover)
};

export default function MediaCard(props) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const { imagePath, imageText, cardTitle, price, cardDescription, handleBuy, handleAddToCart } = props;
  const currCard = {imagePath, imageText, cardTitle, price }
  return (
    <Card className={classes.root} onMouseOver={(e) => handleMouse(e, hover, setHover)} onMouseOut={(e) => handleMouse(e, hover, setHover)}>
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
        <Button size="small" variant="contained" color="primary" onClick={() => handleBuy(currCard)}>
          {hover ? `Buy Trip from $${price}` : "Buy Trip"}
        </Button>
        <Button size="small" color="primary" onClick={() => handleAddToCart(currCard)}>
          Add to cart
        </Button>

      </CardActions>
    </Card>
  );
}
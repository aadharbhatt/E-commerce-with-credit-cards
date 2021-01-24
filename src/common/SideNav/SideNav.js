import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  linkButton: {
    "&:hover": {
      textDecoration: null,
      color: 'inherit'
    }
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button component={Link} to={'/inventory'} className={classes.linkButton} color="inherit">Inventory</Button>
          <Button component={Link} to={'/cart'} className={classes.linkButton} color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


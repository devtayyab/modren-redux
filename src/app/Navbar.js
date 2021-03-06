import React, {useEffect, useReducer, useState} from 'react'
import '../features/posts/style.css'
import {useSelector, useDispatch} from 'react-redux'
import useradded from '../features/users/usersslice'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Login from './login'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Button} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
const netlifyIdentity = require("netlify-identity-widget")
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight:'30px'
  },
  link:{
    textDecoration:'none',
    color: 'white'
  }
}));

export const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user= useSelector(state => state.users[0].user)
  console.log("usres    " + user)
 const [auth , setauth] = useState(user)
//  setauth(user)
  return (
    <nav>
       <div className={classes.root}>
     
      <AppBar position="static">
        <Toolbar>
          
         
          {auth && (
            <div>
             <Typography variant="h5" className={classes.title}>
             <Link to="/" className={classes.link}>Posts</Link>
             </Typography>
                <Typography variant="h5">
                <Link to="/add"  className={classes.link}>Add</Link>
                </Typography>
                </div>
          )}
        
          {!auth &&(
                <Button onClick={()=>{
                  netlifyIdentity.init() 
                  netlifyIdentity.open()
                  setauth(netlifyIdentity.currentUser().user_metadata.full_name)
                
                 } }>Login</Button>
          )}
        

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={()=>{
                  netlifyIdentity.init()
                  netlifyIdentity.open()
                  setauth(netlifyIdentity.currentUser().user_metadata.full_name)
                  dispatch(useradded({user: auth}))
                }}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {/* <Menu
                id="menu-appbar"
                // anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                // open={open}
                // onClose={handleClose}
              >
              
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
              </Menu> */}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
 
    
    </nav>
  )
}
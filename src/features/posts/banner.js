import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import imag from '../../assets/BLOG1.jpg'
const useStyles = makeStyles((theme) => ({

    imgg:{
        width:"100%",
        position:'absolute',
   
    
        
    },
    bannerhead:{
        postion :'relative'
    }

}))

const Banner= ()=>{

const classes = useStyles();
    return (
<div>
     <img src={imag} alt="Some images" className={classes.imgg}></img>
     <h1 className={classes.bannerhead}>Write Your Ideas</h1>
     

      <h2>Posts</h2>
      </div>

    )
}

export default Banner
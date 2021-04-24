import React from 'react'
import { useSelector } from 'react-redux'
import {ReactionButtons} from './ReactionButtons'
import Banner from './banner.js'
import { selectAllPosts } from './postsSlice'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


// import './style.css'
const useStyles = makeStyles((theme) => ({


  bannerhead:{
    position:'relative',
    color:'white',
    textAlign:'center',
    justifyContent:'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  Link:{
    textDecoration:'none',
  },
  margin:{
    width:150,
  },
  container :{
    position:'relative'
      },
  grid:{
   

  },
  banner:{
  
  }
  
}));
export const PostsList = () => {
  const classes = useStyles();

  const post = useSelector(selectAllPosts)
  console.log(post)
  const posts = useSelector(state => state.posts)
  const users =useSelector(state =>state.users)
  useSelector(state => console.log(state))
  console.log(users)
  console.log(posts)
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

const renderedPosts = orderedPosts.map(post => {
  return(
    <div className={classes.root}>
   
       {/* <Grid container spacing={2} className={classes.container} > */}
        <Grid item   key={post.id} className={classes.grid}>
          <Paper elevation={3} className={classes.paper}>
          <h3>{post.title}</h3>
          <p className="post-content">{post.content}</p>
      <p className="username">{users[1].name}</p>
      <ReactionButtons post={post}/>
      <Button variant="contained"  className={classes.margin}>
      <Link to={`/posts/${post.id}`} className={classes.Link} >
        View Post
      </Link>
      </Button>
          </Paper>
        </Grid>
        {/* </Grid> */}
  
    </div>
  )
})  

  return (
    <div>
    
    <section className="posts-list">
   
      <div className={classes.container}>
      {renderedPosts}
      </div>
    </section>
    </div>
  )
}
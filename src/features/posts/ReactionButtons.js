import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { reactionAdded } from './postsSlice'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  
  Link:{
    textDecoration:'none',
  },
  margin:{
    width:150,
  },
  reaction:{
    width:80,
    margin:10
  }
}));

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
  const classes = useStyles();
  const posts = useSelector(state => state.posts)
 
  const dispatch = useDispatch()
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button variant="contained"  className={classes.reaction} key={name} type="button"
      onClick={() =>
        dispatch(reactionAdded({ postId : post.id, reaction: name}))
      }
    >
        {emoji} 
    
      </Button>
      
    )
  })
  
  return <div>{reactionButtons}</div>
}
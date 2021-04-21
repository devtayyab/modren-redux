import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'

import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
  const posts = useSelector(state => state.posts)
 
  const dispatch = useDispatch()
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="muted-button reaction-button"
      onClick={() =>
        dispatch(reactionAdded({ postId : post.id, reaction: name}))
      }
    >
        {emoji} 
    
      </button>
      
    )
  })
  
  return <div>{reactionButtons}</div>
}
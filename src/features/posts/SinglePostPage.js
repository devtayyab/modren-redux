import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectPostById } from './postsSlice'
import {ReactionButtons} from './ReactionButtons'
export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state => selectPostById(state, postId))
  const dispatch = useDispatch()
console.log(post)
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        {dispatch(ReactionButtons({post : post}))}
        <Link to={`/editPost/${post.id}`} className="button muted-button">
        Edit Post
      </Link>
      </article>
    </section>
  )
}
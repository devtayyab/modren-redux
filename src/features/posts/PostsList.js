import React from 'react'
import { useSelector } from 'react-redux'
import {ReactionButtons} from './ReactionButtons'
import { selectAllPosts } from './postsSlice'
import { Link } from 'react-router-dom'
import './style.css'

export const PostsList = () => {
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
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3> 
      
      <p className="post-content">{post.content}</p>
      <p className="username">{users[1].name}</p>
      <ReactionButtons post={post}/>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  )
})  

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
  { id: '3', title: 'Third Post', content: 'More text' }
  
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
    postAdded(state, action) {
      
      state.push(action.payload)
      console.log(state)
      console.log(action)
    },
    prepare(title, content, userId) {
      return {
        payload: {
          id: nanoid(),
          title,
          content,
          date: new Date().toISOString(),
          user: userId
        }
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
})
console.log(postsSlice.actions)
export const { postAdded, postUpdated , reactionAdded,prepare} = postsSlice.actions
export default postsSlice.reducer
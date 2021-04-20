import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      
      state.push(action.payload)
      console.log(state)
      console.log(action)
    }
  }
})
console.log(postsSlice.actions)
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer
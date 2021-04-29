import { createSlice } from '@reduxjs/toolkit'


const initialState = [
 {user: false} 
]

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    useradded(state, action){
      console.log(state)
      console.log(action)
    }
  }
})
export const { useradded} = usersSlice.actions
export default usersSlice.reducer
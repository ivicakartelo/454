import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', username: 'Tianna Jenkins' },
  { id: '1', username: 'Kevin Grant' },
  { id: '2', username: 'Madison Price' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
    userAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(username) {
        return {
          payload: {
            id: nanoid(),
            username,
          },
        }
      },
    },
    userDelete(state, action) {
      const { id } = action.payload
      const existingUser = state.find(user => user.id === id)
      if(existingUser) {
        return state.filter(user => user.id !== id)
      }
    },
    userUpdated(state, action) {
      const { id, username } = action.payload
      const existingUser = state.find((user) => user.id === id)
      if (existingUser) {
        existingUser.username = username
      }
    }
  },
})

export const { userAdded, userDelete, userUpdated } = usersSlice.actions
export default usersSlice.reducer
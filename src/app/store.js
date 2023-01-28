import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import commentsReducer from '../features/comments/commentsSlice'
import repliesReducer from '../features/replies/repliesSlice'
import replies1Reducer from '../features/replies1/replies1Slice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
    replies: repliesReducer,
    replies1: replies1Reducer
  }
})
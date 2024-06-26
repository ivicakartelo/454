import { useState } from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import { postAdded } from './postsSlice'

  const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  const onTitleChanged = e => setTitle(e.target.value) 
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
      setUserId('')
    }
  }
  
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.username}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          id="postTitle"
          type="text"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postAuthor">Author:</label>
        
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}         
        </select>
        
        <label htmlFor="postContent"><p>Content:</p></label>
        <textarea
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
            Save Post
        </button>
      </form>
    </section>
  )
}
export default AddPostForm
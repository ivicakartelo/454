import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { userUpdated } from '../users/usersSlice'

const EditUserForm = () => {
  const params = useParams()
  const id = params.id

  const userx = useSelector(state =>
    state.users.find(user => user.id === id)
  )

  const [username, setUsername] = useState(userx.username)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  
  const onUsernameChanged = e => setUsername(e.target.value)

  const onSaveUserClicked = () => {
    if ( username) {
      dispatch(userUpdated({ id: id, username }))
      navigate(`/adminusers`)
    }
  }

  return (
    <section>
      <h2>Edit user</h2>
      <form>
        
        <label htmlFor="username">Username:</label>
        <textarea
          value={username}
          onChange={onUsernameChanged}
        />
      </form>
      <button type="button" onClick={onSaveUserClicked}>
        Save user
      </button>
    </section>
  )
}
export default EditUserForm
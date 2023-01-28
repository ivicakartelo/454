import { useSelector, useDispatch } from 'react-redux'
import { userDelete } from './usersSlice'

const AdminUsersList = () => {
  const users = useSelector(state => state.users)
  .map(user => (
    <tr key={user.id}>
      <th>{user.id}</th>
      <td>{user.username}</td>
      <td>Edit</td>
      <td><button onClick={()=>userRemove(user.id)}>Delete</button></td>
    </tr>
  ))
  const dispatch = useDispatch()
  const userRemove = (id) => {
    dispatch(userDelete({ id }));
  }

return (
  <section>
    <h2>Users</h2>
  <table border='1'>
    <tr>
      <th>Id</th>
      <th>Author</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    {users} 
  </table>   
  </section>
)
}
export default AdminUsersList
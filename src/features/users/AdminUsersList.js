import { useSelector } from 'react-redux'

const AdminUsersList = () => {
  const users = useSelector(state => state.users)
  .map(user => (
    <tr key={user.id}>
      <th>{user.id}</th>
      <td>{user.username}</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
  ))

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
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { postDelete } from './postsSlice'

const AdminPostsList = () => {
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch();
  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

    const postRemove = (id) => {
      dispatch(postDelete({ id }));
    }

  const renderedPosts = orderedPosts.map(post => (
    <tr key={post.id}>
      <th>{post.id}</th>
      <td>{post.user}</td>
      <td>{post.title}</td>
      <td>{post.date}</td>
      <td>{post.content}</td>
      <td><Link to={`/editPost/${post.id}`}>
          Edit Post
        </Link></td>
      <td><button onClick={()=>postRemove(post.id)}>Delete</button></td>
    </tr>
  ))

return (
  <section>
    <h2>Posts</h2>
    <table border='1'>
    <thead>
      <tr>
        <th>Id</th>
        <th>UserId</th>
        <th>Title</th> 
        <th>Date</th>
        <th>Content</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
        {renderedPosts}
      </tbody>
      
    </table>
        
  </section>
)
}
export default AdminPostsList
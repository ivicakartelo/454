import { useSelector, useDispatch } from 'react-redux'
import { replyDelete } from '../replies/repliesSlice'
import { Link } from 'react-router-dom'

const AdminRepliesList = () => {
  const replies = useSelector(state => state.replies)
  .map(reply => (
    <tr key={reply.replyId}>  
      <th>{reply.replyId}</th>
      <td>{reply.comment}</td>
      <td>{reply.date}</td>
      <td>{reply.author}</td>
      <td>{reply.reply}</td>
      <td><Link to={`/editReply/${reply.replyId}`}>
          Edit reply
        </Link></td>
      <td><button onClick={()=>replyRemove(reply.replyId)}>Delete</button></td>
    </tr>
  ))
  const dispatch = useDispatch()
  const replyRemove = (replyId) => {
        dispatch(replyDelete({ replyId }));
  }

return (
  <section>
  <h2>Replies</h2>
  <table border='1'>
  <thead>
    <tr>
      <th>replyId</th>
      <th>commentId</th>
      <th>Date</th>
      <th>Author</th>
      <th>Content</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    </thead>
    <tbody>
      {replies} 
    </tbody>
  </table>
       
  </section>
)
}
export default AdminRepliesList
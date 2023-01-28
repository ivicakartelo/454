import { useSelector, useDispatch } from 'react-redux'
import { replyDelete } from '../replies/repliesSlice'

const AdminRepliesList = () => {
  const replies = useSelector(state => state.replies)
  .map(reply => (
    <tr key={reply.replyId}>  
      <th>{reply.replyId}</th>
      <td>{reply.comment}</td>
      <td>{reply.date}</td>
      <td>{reply.author}</td>
      <td>{reply.reply}</td>
      <td>Edit</td>
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
    <tr>
      <th>replyId</th>
      <th>commentId</th>
      <th>Date</th>
      <th>Author</th>
      <th>Content</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
      {replies} 
  </table>
       
  </section>
)
}
export default AdminRepliesList
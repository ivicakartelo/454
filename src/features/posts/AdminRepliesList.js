import { useSelector } from 'react-redux'

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
      <td>Delete</td>
    </tr>
  ))
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
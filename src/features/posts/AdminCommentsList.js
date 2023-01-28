import { useSelector } from 'react-redux'
import { AddReplyForm } from './AddReplyForm'
import { RepliesList } from './RepliesList'

const AdminCommentsList = () => {
  const comments = useSelector(state => state.comments)
  .map(comment => (
    <tr key={comment.commentId}>
      <th>{comment.commentId}</th>
      <td>{comment.post}</td>
      <td>{comment.date}</td>
      <td>{comment.rating}</td>
      <td>{comment.author}</td>
      <td>{comment.comment}</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
  ))
return (
  <section>
    <h2>Comments</h2>
    <table border='1'>
      <tr>
        <th>commentId</th>
        <th>postId</th>
        <th>Date</th>
        <th>Rate</th>
        <th>Author</th>
        <th>Comment</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {comments}
    </table>  
  </section>
)
}
export default AdminCommentsList
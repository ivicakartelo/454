import { useSelector, useDispatch } from 'react-redux'
import { commentDelete } from '../comments/commentsSlice'

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
      <td><button onClick={()=>commentRemove(comment.commentId)}>Delete</button></td>
    </tr>
  ))
  const dispatch = useDispatch()
  const commentRemove = (commentId) => {
    dispatch(commentDelete({ commentId }));
  }


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
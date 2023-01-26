import { useSelector } from 'react-redux'
import { AddReplyForm } from './AddReplyForm'
import { RepliesList } from './RepliesList'

const AdminCommentsList = () => {
  const comments = useSelector(state => state.comments)
  .map(comment => (
    <article key={comment.commentId}>
      <h1>{comment.date}</h1>
      <h3>{comment.rating}</h3>
      <h3>{comment.author}</h3>
      <p>{comment.comment}</p>
    </article>
  ))
return (
  <section>
    <h2>Comments:</h2>
    {comments}    
  </section>
)
}
export default AdminCommentsList
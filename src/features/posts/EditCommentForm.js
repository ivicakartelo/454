import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { commentUpdated } from '../comments/commentsSlice'

const EditCommentForm = () => {
  const params = useParams()
  const commentId = params.commentId

  const comment1 = useSelector(state =>
    state.comments.find(comment => comment.commentId === commentId)
  )

  const [rating, setRating] = useState(comment1.rating)
  const [author, setAuthor] = useState(comment1.author)
  const [comment, setComment] = useState(comment1.comment)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onRatingChanged = e => setRating(e.target.value)
  const onAuthorChanged = e => setAuthor(e.target.value)
  const onCommentChanged = e => setComment(e.target.value)

  const onSaveCommentClicked = () => {
    if (rating && author && comment) {
      dispatch(commentUpdated({ commentId: commentId, rating, author, comment }))
      navigate(`/admincomments`)
    }
  }

  return (
    <section>
      <h2>Edit comment</h2>
      <form>
        <label>Rating:</label>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={rating}
          onChange={onRatingChanged}
        />
        <label>Author:</label>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={author}
          onChange={onAuthorChanged}
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          value={comment}
          onChange={onCommentChanged}
        />
      </form>
      <button type="button" onClick={onSaveCommentClicked}>
        Save comment
      </button>
    </section>
  )
}
export default EditCommentForm
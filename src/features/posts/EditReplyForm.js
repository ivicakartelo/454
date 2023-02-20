import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { replyUpdated } from '../replies/repliesSlice'

const EditReplyForm = () => {
  const params = useParams()
  const replyId = params.replyId

  const replyx = useSelector(state =>
    state.replies.find(reply => reply.replyId === replyId)
  )

  
  const [author, setAuthor] = useState(replyx.author)
  const [reply, setReply] = useState(replyx.reply)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const onAuthorChanged = e => setAuthor(e.target.value)
  const onReplyChanged = e => setReply(e.target.value)

  const onSaveReplyClicked = () => {
    if ( author && reply) {
      dispatch(replyUpdated({ replyId: replyId, author, reply }))
      navigate(`/adminreplies`)
    }
  }

  return (
    <section>
      <h2>Edit reply</h2>
      <form>
        <label>Author:</label>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={author}
          onChange={onAuthorChanged}
        />
        <label htmlFor="reply">Reply:</label>
        <textarea
          value={reply}
          onChange={onReplyChanged}
        />
      </form>
      <button type="button" onClick={onSaveReplyClicked}>
        Save reply
      </button>
    </section>
  )
}
export default EditReplyForm
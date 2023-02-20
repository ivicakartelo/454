import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { reply1Updated } from '../replies1/replies1Slice'

const EditReply1Form = () => {
  const params = useParams()
  const reply1Id = params.reply1Id

  const replyx = useSelector(state =>
    state.replies1.find(reply1 => reply1.reply1Id === reply1Id)
  )

  
  const [author, setAuthor] = useState(replyx.author)
  const [reply1, setReply1] = useState(replyx.reply1)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const onAuthorChanged = e => setAuthor(e.target.value)
  const onReply1Changed = e => setReply1(e.target.value)

  const onSaveReply1Clicked = () => {
    if ( author && reply1) {
      dispatch(reply1Updated({ reply1Id: reply1Id, author, reply1 }))
      navigate(`/adminreplies1`)
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
          value={reply1}
          onChange={onReply1Changed}
        />
      </form>
      <button type="button" onClick={onSaveReply1Clicked}>
        Save reply
      </button>
    </section>
  )
}
export default EditReply1Form
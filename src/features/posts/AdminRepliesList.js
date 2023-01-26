import { useSelector } from 'react-redux'

const AdminRepliesList = () => {
  const replies = useSelector(state => state.replies)
  .map(reply => (
    <article key={reply.replyId}>
      <h1>{reply.date}</h1>
      <h3>{reply.author}</h3>
      <p>{reply.reply}</p>
      <div style={{ marginLeft: '50px', paddingBottom: '1rem' }}>
      
      </div>
      
    </article>
  ))
return (
  <section>
    <h2>Replies:</h2>
    {replies}    
  </section>
)
}
export default AdminRepliesList
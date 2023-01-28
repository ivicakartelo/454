import { useSelector, useDispatch } from 'react-redux'
import { reply1Delete } from '../replies1/replies1Slice'

const AdminReplies1List = () => {
  const replies1 = useSelector(state => state.replies1)
  .map(reply1 => (
    <tr key={reply1.reply1Id}>
      <th>{reply1.reply1Id}</th>
      <td>{reply1.reply}</td>
      <td>{reply1.date}</td>
      <td>{reply1.author}</td>
      <td>{reply1.reply1}</td>
      <td>Edit</td>
      <td><button onClick={()=>reply1Remove(reply1.reply1Id)}>Delete</button></td>
    </tr>
  ))

  const dispatch = useDispatch()
  const reply1Remove = (reply1Id) => {
        dispatch(reply1Delete({ reply1Id }))
  }
return (
  <section>
    <h2>Replies1</h2>
    <table border='1'>
    <tr>
    <th>Replay1Id</th>
    <th>ReplayId</th>
        <th>Date</th>
        <th>Author</th>
        <th>Content</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    {replies1}
    </table>  
  </section>
)
}
export default AdminReplies1List
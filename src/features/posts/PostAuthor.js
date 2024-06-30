import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  console.log("PostAuthor rendered")
  const author = useSelector(state =>
    state.users.find(user => user.id === userId)
  )
  
  return <span>by {author ? author.username : 'Unknown author'}</span>
}
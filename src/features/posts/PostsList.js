import { useCallback, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { postDelete } from './postsSlice'

const PostsList = () => {
  console.log("PostsList rendered")
  const posts = useSelector(state => state.posts)
  console.log(posts)
  const dispatch = useDispatch();
  // Sort posts in reverse chronological order by datetime string
  
  const orderedPosts = posts
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date))
/*
    const postRemove = useCallback((id) => {
      dispatch(postDelete({ id }));
    },[dispatch])
*/
    const postRemove = useCallback((id) => {
      dispatch(postDelete({ id }));
    },[dispatch])

  /*
  function renderedPosts() {
    return orderedPosts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <p>{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
      <Link to={`/${post.id}`}>
        View post
      </Link>
      <button onClick={()=>postRemove(post.id)}>Delete</button>
    </article>
  ))}
*/

const renderedPosts = useMemo(() => {
  return orderedPosts.map(post => (
  <article key={post.id}>
    <h3>{post.title}</h3>
    <PostAuthor userId={post.user} />
    <TimeAgo timestamp={post.date} />
    <p>{post.content.substring(0, 100)}</p>
    <ReactionButtons post={post} />
    <Link to={`/${post.id}`}>
      View post
    </Link>
    <button onClick={()=>postRemove(post.id)}>Delete</button>
  </article>
  ))
}, [orderedPosts, postRemove])

return (
  <section>
    <h2>Posts</h2>
    {renderedPosts}    
  </section>
)
}
export default PostsList
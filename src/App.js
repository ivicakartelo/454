import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Link to="/">Home</Link> | { }
    <Link to="adminposts">Admin posts</Link> | { }
    <Link to="admincomments">Admin comments</Link> | { }
    <Link to="adminreplies">Admin replies</Link> | { }
    <Link to="adminreplies1">Admin replies1</Link> | { }
    <Link to="adminusers">Admin users</Link>
    
    <Outlet />
    </>
  )
}
export default App
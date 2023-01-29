import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import SinglePostPage from "./features/posts/SinglePostPage"
import AddPostForm from "./features/posts/AddPostForm"
import PostsList from "./features/posts/PostsList"
import AdminCommentsList from "./features/posts/AdminCommentsList"
import AdminPostsList from "./features/posts/AdminPostsList"
import AdminRepliesList from "./features/posts/AdminRepliesList"
import AdminRepliesList1 from "./features/posts/AdminRepliesList1"
import AdminUsersList from "./features/users/AdminUsersList"
import EditPostForm from "./features/posts/EditPostForm"
import EditCommentForm from "./features/posts/EditCommentForm"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route
        index
        element={
          <>
          <h1>Home</h1>
          <AddPostForm />
          <PostsList />
          </>
        }
      />
    <Route path=":postId" element={<SinglePostPage />} />
    <Route path="admincomments" element={<AdminCommentsList />} />
    <Route path="adminposts" element={<AdminPostsList />} />
    <Route path="adminreplies" element={<AdminRepliesList />} />
    <Route path="adminreplies1" element={<AdminRepliesList1 />} />
    <Route path="adminusers" element={<AdminUsersList />} />
    <Route path="editPost/:postId" element={<EditPostForm />} />
    <Route path="editComment/:commentId" element={<EditCommentForm />} />
    </Route>
    </Routes>
  </BrowserRouter>
    </Provider>
  
);
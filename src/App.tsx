import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Top } from 'containers/Top'
import { CreateBlog } from 'routes/createBlog'
import { Blogs } from 'routes/blogs'
import { Blog } from 'routes/blog'
import Auth from 'pages/Auth'
import SignUp from 'pages/Auth/SignUp'
import SignIn from 'pages/Auth/SignIn'
import SignOut from 'pages/Auth/SignOut'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Top />} />
        <Route path="create" element={<CreateBlog />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<Blog />} />
        <Route path="auth" element={<Auth />}>
          <Route index element={<Navigate to="signin" />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signout" element={<SignOut />} />
        </Route>
        <Route path="projects" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

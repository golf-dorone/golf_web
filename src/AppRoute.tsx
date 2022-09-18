import { AdminTop } from 'pages/Admin/AdminTop'
import Auth from 'pages/Auth'
import SignIn from 'pages/Auth/SignIn'
import SignOut from 'pages/Auth/SignOut'
import SignUp from 'pages/Auth/SignUp'
import { CustomerTop } from 'pages/Customer/CustomerTop'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CustomerTop />} />
        {/* <Route path="create" element={<CreateBlog />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<Blog />} /> */}
        <Route path="auth" element={<Auth />}>
          <Route index element={<Navigate to="signin" />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signout" element={<SignOut />} />
        </Route>
        <Route path="admin" element={<AdminTop />} />
      </Routes>
    </BrowserRouter>
  )
}

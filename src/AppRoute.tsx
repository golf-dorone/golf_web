import { CreateGolfForm } from 'containers/admin/organisms/CreateGolfForm'
import { SignInForm } from 'containers/admin/organisms/SignInForm'
import { AdminPage } from 'containers/admin/pages'
import { AdminContainer } from 'containers/admin/templates/AdminContainer'
import { CustomerPage } from 'containers/customer/pages'
import Auth from 'pages/Auth'
import SignOut from 'pages/Auth/SignOut'
import SignUp from 'pages/Auth/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CustomerPage />} />
        {/* <Route path="create" element={<CreateBlog />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<Blog />} /> */}
        {/* <Route path="auth" element={<Auth />}> */}
        <Route path="admin" element={<AdminPage />}>
          {/* <Route index element={<Navigate to="signin" />} /> */}
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignInForm />} />
          <Route path="signout" element={<SignOut />} />
          {/* <Route path="admin" element={<AdminContainer />} /> */}
          <Route path="create" element={<CreateGolfForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

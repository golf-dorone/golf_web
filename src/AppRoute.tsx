import { CreateGolfForm } from 'containers/admin/organisms/CreateGolfForm'
import { AdminPage } from 'containers/admin/pages'
import { AdminContainer } from 'containers/admin/templates/AdminContainer'
import { CustomerPage } from 'containers/customer/pages'
import { AdminTop } from 'pages/Admin/AdminTop'
import Auth from 'pages/Auth'
import { SignInForm } from 'pages/Auth/SignIn'
import SignOut from 'pages/Auth/SignOut'
import SignUp from 'pages/Auth/SignUp'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Golf } from 'shared/components/Golf'
import { GolfIndex } from 'shared/components/GolfIndex'
import { GolfList } from 'shared/components/GolfList'

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<CustomerPage />} /> */}
        <Route path="/golfs" element={<GolfList />}>
          <Route index element={<GolfIndex />} />
          <Route path=":golfId" element={<Golf />} />
        </Route>
        {/* <Route path="create" element={<CreateBlog />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<Blog />} /> */}
        {/* <Route path="admin" element={<Auth />}> */}
        <Route path="auth" element={<Auth />}>
          <Route index element={<Navigate to="signin" />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignInForm />} />
          <Route path="signout" element={<SignOut />} />
          <Route path="top" element={<AdminTop />} />
          <Route path="golfs" element={<GolfList />}>
            <Route index element={<GolfIndex />} />
            <Route path=":golfId" element={<Golf />} />
          </Route>
          <Route path="create" element={<CreateGolfForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

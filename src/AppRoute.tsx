import { CreateGolfForm } from 'shared/components/CreateGolfForm'
import Auth from 'pages/Auth'
import { AdminTopPage } from 'pages/Auth/Admin'
import { SignInForm } from 'pages/Auth/SignIn'
import SignOut from 'pages/Auth/SignOut'
import { SignUp } from 'pages/Auth/SignUp'
import { CustomerTopPage } from 'pages/Customer'
import { CustomerTopContainer } from 'pages/Customer/Top'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GolfData } from 'shared/components/GolfData'
import { GolfIndex } from 'shared/components/GolfIndex'
import { Inquiry } from 'pages/Auth/Inquiry'
import { CustomerInquiryContainer } from 'pages/Customer/Inquiry'
import { CustomerArchiveContainer } from 'pages/Customer/Archive'
import { CustomerQAContainer } from 'pages/Customer/Q&A'
import { CustomerOtherWorksContainer } from 'pages/Customer/OtherWorks'

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<CustomerPage />} /> */}
        <Route path="/" element={<Navigate to="/customer" />} />
        <Route path="/customer" element={<CustomerTopPage />}>
          <Route index element={<CustomerTopContainer />} />
          <Route path="golfs/:golfId" element={<GolfData isAdmin={false} />} />
          <Route path="inquiry_form" element={<CustomerInquiryContainer />} />
          <Route path="archive" element={<CustomerArchiveContainer />} />
          <Route path="qanda" element={<CustomerQAContainer />} />
          <Route path="otherworks" element={<CustomerOtherWorksContainer />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="auth" element={<Auth />}>
          <Route index element={<Navigate to="signin" />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignInForm />} />
          <Route path="admin" element={<AdminTopPage />} />
          <Route path="signout" element={<SignOut />} />
          <Route path="create" element={<CreateGolfForm />} />
          <Route path="golfs" element={<GolfIndex isAdmin={true} />} />
          <Route path="golfs/:golfId" element={<GolfData isAdmin={true} />} />
          <Route path="inquiries" element={<Inquiry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

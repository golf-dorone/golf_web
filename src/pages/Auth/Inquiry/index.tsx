import { CustomerTopHeader } from 'pages/Customer/Top/CustomerTopHeader'
import { AdminMenuBar } from '../Admin/AdminMenuBar'
import { InquiryList } from './InquiryList'

export const Inquiry = () => {
  return (
    <>
      <CustomerTopHeader />
      <AdminMenuBar />
      <InquiryList />
    </>
  )
}

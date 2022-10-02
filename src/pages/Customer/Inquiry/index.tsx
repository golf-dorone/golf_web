import { CustomerFooter } from '../Top/CustomerFooter'
import { CustomerMenuBar } from '../Top/CustomerMenuBar'
import { CustomerTopHeader } from '../Top/CustomerTopHeader'
// import { CustomerHeader } from '../Top/CustomerHeader'
import { InquiryForm } from './InquiryForm'

export const CustomerInquiryContainer = () => {
  return (
    <>
      <CustomerTopHeader />
      <CustomerMenuBar />
      <InquiryForm />
      <CustomerFooter />
    </>
  )
}

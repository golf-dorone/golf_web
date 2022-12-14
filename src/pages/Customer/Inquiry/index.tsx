import { HeaderLine } from 'shared/components/HeaderLine'
import { CustomerFooter } from '../Top/CustomerFooter'
import { CustomerMenuBar } from '../Top/CustomerMenuBar'
import { InquiryForm } from './InquiryForm'

export const CustomerInquiryContainer = () => {
  return (
    <>
      <HeaderLine />
      <CustomerMenuBar />
      <InquiryForm />
      <CustomerFooter />
    </>
  )
}

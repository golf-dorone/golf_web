import { HeaderLine } from 'shared/components/HeaderLine'
import { AdminMenuBar } from '../Admin/AdminMenuBar'
import { InquiryList } from './InquiryList'

export const Inquiry = () => {
  return (
    <>
      <HeaderLine />
      <AdminMenuBar />
      <InquiryList />
    </>
  )
}

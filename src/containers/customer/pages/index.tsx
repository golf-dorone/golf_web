import { DefaultLayout } from 'shared/components/DefaultLayout'
import { CustomerContainer } from '../organisms/CustomerContainer'

export const CustomerPage = () => {
  return <DefaultLayout children={<CustomerContainer />} />
}

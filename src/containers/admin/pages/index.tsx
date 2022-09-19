import { DefaultLayout } from 'shared/components/DefaultLayout'
import { AdminContainer } from '../templates/AdminContainer'

export const AdminPage = () => {
  return <DefaultLayout children={<AdminContainer />} />
}

import { useCurrentUserQuery } from 'graphql/generated'
import { Outlet } from 'react-router-dom'
import { AdminHeader } from '../organisms/AdminHeader'
import { AdminContainer } from '../templates/AdminContainer'

export const AdminPage = () => {
  // const { error, loading } = useCurrentUserQuery()

  // if (loading) return <div>Loading...</div>

  // const isAuthorized = !error
  // console.log('isAuthorized :>> ', isAuthorized)
  return (
    <>
      <AdminHeader />
      {/* <Outlet context={[isAuthorized]} /> */}
      <AdminContainer />
    </>
  )
}

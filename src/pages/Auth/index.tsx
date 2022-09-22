import { useCurrentUserQuery } from 'graphql/generated'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Header } from 'shared/components/Header'
import { Box } from '@chakra-ui/react'
import { Footer } from 'shared/components/Footer'
import { AdminPage } from 'containers/admin/pages'

const Auth = () => {
  const { error, loading, data } = useCurrentUserQuery()

  if (loading) return <div>Loading...</div>

  //MEMO: データ取得失敗時、ログインしていないユーザと判定
  const isAuthorized = !error
  console.log('isAuthorized :>> ', isAuthorized)
  console.log('error :>> ', error)
  console.log('data :>> ', data)

  return (
    <>
      {/* <AdminPage /> */}
      <Outlet context={[isAuthorized]} />
    </>
  )
}

export default Auth

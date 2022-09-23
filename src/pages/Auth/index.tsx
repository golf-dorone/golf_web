import { useCurrentUserQuery } from 'graphql/generated'
import { Outlet } from 'react-router-dom'

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
      <Outlet context={[isAuthorized]} />
    </>
  )
}

export default Auth

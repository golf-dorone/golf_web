import { useCurrentUserQuery } from 'graphql/generated'
import { Outlet } from 'react-router-dom'
import { Header } from 'shared/components/Header'
import { Box } from '@chakra-ui/react'
import { Footer } from 'shared/components/Footer'

const Auth = () => {
  // 認証状態確認のためにログイン済みユーザ情報を取得
  const { error, loading } = useCurrentUserQuery()

  if (loading) return <div>Loading...</div>

  // データ取得が失敗時ログインしていないユーザと判定
  const isAuthorized = !error
  console.log('isAuthorized :>> ', isAuthorized)

  return (
    <>
      <Header />
      <Box bg="#b2a0a6">
        <Outlet context={[isAuthorized]} />
      </Box>
      <Footer />
    </>
  )
}

export default Auth

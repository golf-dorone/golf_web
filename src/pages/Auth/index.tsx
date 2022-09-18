import { useCurrentUserQuery } from 'graphql/generated'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'shared/components/Header'

const Auth = () => {
  // 認証状態確認のためにログイン済みユーザ情報を取得
  const { error, loading } = useCurrentUserQuery()

  if (loading) return <div>Loading...</div>

  // データ取得が失敗時ログインしていないユーザと判定
  const isAuthorized = !error

  return (
    <div>
      <Header />
      {/* SignIn, SignUp, SignOutを表示する */}
      {/* ログイン状態を渡す */}
      <Outlet context={[isAuthorized]} />
    </div>
  )
}

export default Auth

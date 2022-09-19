import { Footer } from './Footer'
import { Header } from './Header'
import { Box } from '@chakra-ui/react'
import { useCurrentUserQuery } from 'graphql/generated'
import { Outlet } from 'react-router-dom'

type DefaultLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { error, loading } = useCurrentUserQuery()

  if (loading) return <div>Loading...</div>

  const isAuthorized = !error
  console.log('isAuthorized :>> ', isAuthorized)

  return (
    <>
      {isAuthorized ? (
        <>
          <Header />
          <Box bg="#cbced5">
            <Outlet context={[isAuthorized]} />
            {children}
          </Box>{' '}
        </>
      ) : (
        <>
          <Header />
          <Box bg="#b2a0a6">{children}</Box>
        </>
      )}
      <Footer />
    </>
  )
}

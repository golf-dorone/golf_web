import { Footer } from './Footer'
import { Header } from './Header'
import { Box } from '@chakra-ui/react'

type DefaultLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  )
}

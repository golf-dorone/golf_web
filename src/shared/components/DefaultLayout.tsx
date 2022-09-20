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
      <Box bg="#a6b2a0">{children}</Box>
      <Footer />
    </>
  )
}

import { Box } from '@chakra-ui/react'

type DefaultLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Box>{children}</Box>
    </>
  )
}

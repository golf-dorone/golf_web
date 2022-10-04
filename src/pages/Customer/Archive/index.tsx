import { HeaderLine } from 'shared/components/HeaderLine'
import { CustomerFooter } from '../Top/CustomerFooter'
import { CustomerHeader } from '../Top/CustomerHeader'
import { CustomerMenuBar } from '../Top/CustomerMenuBar'
import { Container, Heading } from '@chakra-ui/react'

export const CustomerArchiveContainer = () => {
  return (
    <>
      <HeaderLine />
      <CustomerMenuBar />
      <Container maxW="container.xl">
        <Heading fontSize={'xl'} textAlign="center">
          ※ドローン映像のアーカイブ
        </Heading>
        <CustomerHeader />
      </Container>
      <CustomerFooter />
    </>
  )
}

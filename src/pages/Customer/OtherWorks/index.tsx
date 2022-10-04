import { HeaderLine } from 'shared/components/HeaderLine'
import { CustomerFooter } from '../Top/CustomerFooter'
import { CustomerMenuBar } from '../Top/CustomerMenuBar'
import { Container, Heading } from '@chakra-ui/react'
import { OtherWorks } from './OtherWorks'

export const CustomerOtherWorksContainer = () => {
  return (
    <>
      <HeaderLine />
      <CustomerMenuBar />
      <Container maxW="container.xl">
        <OtherWorks />
      </Container>
      <CustomerFooter />
    </>
  )
}

import { AdminMenuBar } from './AdminMenuBar'
import { Text } from '@chakra-ui/react'
import { FaGolfBall } from 'react-icons/fa'
import { CustomerTopHeader } from 'pages/Customer/Top/CustomerTopHeader'

export const AdminTopPage = () => {
  return (
    <div>
      <CustomerTopHeader />
      <Text as="samp" color={'#a0a6b2'} margin="10px" fontSize={'30px'}>
        Golf x Dorone 管理者ページ{''}
        <FaGolfBall />
      </Text>
      <AdminMenuBar />
    </div>
  )
}

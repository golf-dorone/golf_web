import { AdminMenuBar } from './AdminMenuBar'
import { Text } from '@chakra-ui/react'
import { FaGolfBall } from 'react-icons/fa'
import { HeaderLine } from 'shared/components/HeaderLine'

export const AdminTopPage = () => {
  return (
    <div>
      <HeaderLine />
      <Text as="samp" color={'#a0a6b2'} margin="10px" fontSize={'30px'}>
        Golf x Dorone 管理者ページ{''}
        <FaGolfBall />
      </Text>
      <AdminMenuBar />
    </div>
  )
}

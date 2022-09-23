import { Link } from 'react-router-dom'
import { AdminMenuBar } from './AdminMenuBar'
import { Text } from '@chakra-ui/react'
import { FaGolfBall } from 'react-icons/fa'

export const AdminTopPage = () => {
  return (
    <div>
      <Text as="samp" color={'#a0a6b2'} margin="10px" fontSize={'30px'}>
        Golf x Dorone 管理者ページ{''}
        <FaGolfBall />
      </Text>
      <AdminMenuBar />
    </div>
  )
}

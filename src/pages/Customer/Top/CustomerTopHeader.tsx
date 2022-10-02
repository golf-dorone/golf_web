import { Box, Container, Stack, Text, Button } from '@chakra-ui/react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { SocialButton } from 'shared/components/SocialButton'

export const CustomerTopHeader = () => {
  return (
    <Box bg="teal" color="#e7e8ec" bottom="0" width="100%" height="30px">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={1}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
      ></Container>
    </Box>
  )
}

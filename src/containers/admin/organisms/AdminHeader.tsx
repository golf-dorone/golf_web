import {
  Box,
  Container,
  Stack,
  Link,
  // useColorModeValue,
} from '@chakra-ui/react'

export const AdminHeader = () => {
  return (
    <Box
      bg="#b2a0a6"
      color="#ffffff"
      // bg={useColorModeValue('gray.50', 'gray.900')}
      // color={useColorModeValue('gray.700', 'gray.200')}>
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Link href="/">Golf x Dorone/管理者ページ</Link>
        <Stack direction={'row'} spacing={6}>
          {/* <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link> */}
          <Link href={'/admin/signout'}>サインアウト</Link>
        </Stack>
      </Container>
    </Box>
  )
}

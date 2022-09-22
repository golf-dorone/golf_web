import {
  Box,
  Container,
  Stack,
  Link,
  // useColorModeValue,
} from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box
      bg="#a6b2a0"
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
        <Link href="/">Golf x Dorone~空から見下ろすゴルフ場~</Link>
        <Stack direction={'row'} spacing={6}>
          {/* <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link> */}
          <Link href={'/admin'}>AdminSignIn(削除予定)</Link>
        </Stack>
      </Container>
    </Box>
  )
}

import { Box, Container, Stack, Text } from '@chakra-ui/react'

export const HeaderLine = () => {
  return (
    <Box bg="teal" color="#e7e8ec" bottom="0" width="100%" height="30px">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={1}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
      >
        ~空から見下ろすゴルフ場~
      </Container>
    </Box>
  )
}

import { Box, Container, Stack, Text, Button } from '@chakra-ui/react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { SocialButton } from 'shared/components/SocialButton'

export const CustomerFooter = () => {
  return (
    <Box bg="teal" color="#e7e8ec" bottom="0" width="100%">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2022 Golf x Dorone Inc. All rights reserved</Text>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Stack direction={'row'} spacing={6}>
            <SocialButton
              label={'Twitter'}
              href={'https://twitter.com/megGOLF13'}
            >
              <FaTwitter />
            </SocialButton>
            {/* <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton> */}
            <SocialButton
              label={'Instagram'}
              href={'https://twitter.com/megGOLF13'}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/auth'}
          >
            管理者ページログイン
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

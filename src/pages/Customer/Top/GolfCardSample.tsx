import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Heading,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { SharedButton } from 'shared/components/SharedButton'

export const GolfCardSample = () => {
  const navigate = useNavigate()
  return (
    <Container maxW={'7xl'}>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" fontSize={'12px'}>
            ページトップ
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/" fontSize={'12px'}>
            ゴルフ場一覧
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Image
        rounded={'md'}
        alt={'product image'}
        src={
          'https://images.unsplash.com/photo-1587684724118-a26a15613d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
        }
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={{ base: '100%', sm: '400px', lg: '500px' }}
      />
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={'header'}>
          <Heading
            lineHeight={1.1}
            fontWeight={500}
            fontSize={{ base: 'xl', sm: 'xl', lg: 'xl' }}
            textAlign={'center'}
          >
            初心者必見！ラウンド戦略でスコアアップ
          </Heading>
          <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'md'}
          >
            　ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。
            　<br />
            　ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。
            　ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。ここに記事本文が入ります。
          </Text>
        </Box>

        <Stack spacing={4} direction="row" textAlign={'center'}>
          <SharedButton
            icon={<FaChevronLeft />}
            label={'一覧ページへ戻る'}
            variant={'outline'}
            isLeftIcon={true}
            onClick={() => navigate('/customer')}
          />
        </Stack>
      </Stack>
    </Container>
  )
}

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
import { SharedButton } from './SharedButton'
import { FaChevronLeft } from 'react-icons/fa'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const GolfDetailCard = (props: any) => {
  const { golf } = props
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
      {/* </Flex> */}
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={'header'}>
          <Heading
            lineHeight={1.1}
            fontWeight={500}
            fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
            textAlign={'center'}
          >
            {golf.title}
          </Heading>
          {/* <Input
            id="params.title"
            placeholder="title"
            width="auto"
            size="md"
            defaultValue={golf.title}
          /> */}
          <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}
          >
            {golf.description}
          </Text>
          {/* <Input
            id="params.description"
            placeholder="description"
            width="auto"
            size="md"
            defaultValue={golf.description}
          /> */}
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

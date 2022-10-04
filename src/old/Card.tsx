import {
  Image,
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  //   Container,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Card = (props: any) => {
  const { title, description, id, isAdmin } = props
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image
            src={
              'https://pbs.twimg.com/media/FdoGzhsagAAfzN6?format=jpg&name=large'
            }
            boxSize="200px"
            objectFit="cover"
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={500}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            テストゴルフ場
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {isAdmin ? (
              <Link to={`/auth/golfs/${id}`}>{title}</Link>
            ) : (
              <Link to={`/customer/golfs/${id}`}>{title}</Link>
            )}
          </Heading>
          {/* <Text color={'gray.500'}>{description}</Text> */}
        </Stack>
      </Box>
    </Center>
  )
}

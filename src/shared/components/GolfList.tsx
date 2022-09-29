import React from 'react'
import {
  Box,
  Heading,
  //   Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface IBlogTags {
  tags: Array<string>
  marginTop?: SpaceProps['marginTop']
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="teal" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

export const GolfList = (props: any) => {
  const { title, description, id, isAdmin } = props
  return (
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            {/* <Link textDecoration="none" _hover={{ textDecoration: 'none' }}> */}
            <Image
              borderRadius="lg"
              src={
                'https://pbs.twimg.com/media/FdoGzhsagAAfzN6?format=jpg&name=large'
              }
              alt="some good alt text"
              objectFit="contain"
              width={'400px'}
            />
            {/* </Link> */}
          </Box>
          {/* <Box zIndex="1" width="100%" position="absolute" height="100%"> */}
          <Box
            bgGradient={useColorModeValue(
              'radial(orange.600 1px, transparent 1px)',
              'radial(orange.300 1px, transparent 1px)',
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
        {/* </Box> */}
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '1', sm: '0' }}
        >
          <BlogTags tags={['六本木ゴルフクラブ']} />
          <Heading
            // marginTop="1"
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {/* <Link textDecoration="none" _hover={{ textDecoration: 'none' }}> */}
            {isAdmin ? (
              <Link to={`/auth/golfs/${id}`}>{title}</Link>
            ) : (
              <Link to={`/customer/golfs/${id}`}>{title}</Link>
            )}
            {/* </Link> */}
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
          >
            {description.length < 100
              ? description
              : description.substring(0, 100) + '...（続きを読む）'}
          </Text>
        </Box>
      </Box>
    </Container>
  )
}

import React from 'react'
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
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
  const { title, description, id, isAdmin, isSample } = props
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
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '1', sm: '0' }}
        >
          <BlogTags tags={['六本木ゴルフクラブ']} />
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
            {isSample ? (
              <Link to={`/customer/golfs/sample`}>
                初心者必見！ラウンド戦略でスコアアップ
              </Link>
            ) : (
              <></>
            )}
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

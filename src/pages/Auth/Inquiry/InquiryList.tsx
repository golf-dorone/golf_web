import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Container,
  Heading,
} from '@chakra-ui/react'
import { useInquiriesQuery } from 'graphql/generated'
import React from 'react'
import { useEffect } from 'react'

export const InquiryList = () => {
  const inquiriesQuery = useInquiriesQuery()
  useEffect(() => {
    if (!inquiriesQuery.data || !inquiriesQuery.data?.inquiries) return
    console.log(inquiriesQuery.data.inquiries)
  }, [inquiriesQuery.data])

  if (inquiriesQuery.loading) return <p>Loading</p>
  if (inquiriesQuery.error) return <p>Error</p>
  return (
    <Container maxW="container.xl">
      <Heading fontSize={'xl'} textAlign="center">
        お問い合わせ一覧
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {/* <Th>日付</Th> */}
              <Th>要件</Th>
              <Th>詳細</Th>
              <Th>名前</Th>
              <Th>連絡先</Th>
            </Tr>
          </Thead>
          {inquiriesQuery.data?.inquiries.map((key) => (
            <React.Fragment key={key.id}>
              {key.title ? (
                <Tbody>
                  <Tr>
                    <Td>{key.title}</Td>
                    <Td>{key.description}</Td>
                    {/* <Td>{key.createdAt}</Td> */}
                    <Td>{key.name}</Td>
                    <Td>{key.contact}</Td>
                  </Tr>
                </Tbody>
              ) : undefined}
            </React.Fragment>
          ))}
        </Table>
      </TableContainer>
    </Container>
  )
}

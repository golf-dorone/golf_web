import { useGolfsQuery } from 'graphql/generated'
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import { Box } from '@chakra-ui/react'
import { GolfList } from './GolfList'

export const GolfIndex = (props: any) => {
  const { isAdmin } = props
  const golfsQuery = useGolfsQuery()

  useEffect(() => {
    if (!golfsQuery.data || !golfsQuery.data?.golfs) return
    console.log(golfsQuery.data.golfs)
  }, [golfsQuery.data])

  if (golfsQuery.loading) return <p>Loading</p>
  if (golfsQuery.error) return <p>Error</p>

  return (
    <Box
      width={'80%'}
      display={'flex'}
      justifyContent={'space-around'}
      // flexWrap={'wrap'}
    >
      <Box alignItems={'stretch'}>
        {golfsQuery?.data?.golfs.map((key) => (
          <React.Fragment key={key.id}>
            {/* {key.title ? (
              <Card
                title={key.title}
                description={key.description}
                id={key.id}
                isAdmin={isAdmin}
              />
            ) : undefined} */}
            {key.title ? (
              <GolfList
                title={key.title}
                description={key.description}
                id={key.id}
                isAdmin={isAdmin}
              />
            ) : undefined}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  )
}

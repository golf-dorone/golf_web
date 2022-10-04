import { useGolfsQuery } from 'graphql/generated'
import React from 'react'
import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { GolfList } from './GolfList'
import { AdminMenuBar } from 'pages/Auth/Admin/AdminMenuBar'

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
    <>
      {isAdmin ? <AdminMenuBar /> : <></>}
      <Box alignItems={'stretch'}>
        {golfsQuery?.data?.golfs.map((key) => (
          <React.Fragment key={key.id}>
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
    </>
  )
}

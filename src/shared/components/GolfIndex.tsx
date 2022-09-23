import { useGolfsQuery } from 'graphql/generated'
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'

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
      {golfsQuery?.data?.golfs.map((key) => (
        <React.Fragment key={key.id}>
          {key.title ? (
            <Card
              title={key.title}
              description={key.description}
              id={key.id}
              isAdmin={isAdmin}
            />
          ) : undefined}
        </React.Fragment>
      ))}
    </>
  )
}

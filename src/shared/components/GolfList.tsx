import { useGolfsQuery } from 'graphql/generated'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Card } from './Card'

export const GolfList = () => {
  const golfsQuery = useGolfsQuery()

  useEffect(() => {
    if (!golfsQuery.data || !golfsQuery.data?.golfs) return
    console.log(golfsQuery.data.golfs)
  }, [golfsQuery.data])

  if (golfsQuery.loading) return <p>Loading</p>
  if (golfsQuery.error) return <p>Error</p>
  return (
    <>
      {/* {golfsQuery?.data?.golfs.map((key) => (
        <>
          <Card title={key.title} description={key.description} />
        </>
      ))} */}
      <Outlet />
    </>
  )
}

import { useGolfsQuery } from 'graphql/generated'
import { useEffect } from 'react'

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
      <h1>カスタマーTOP</h1>
      {golfsQuery?.data?.golfs.map((key) => (
        <>
          <p>{key.title}</p>
          <br />
          <p>{key.description}</p>
        </>
      ))}
    </>
  )
}

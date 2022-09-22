import { useGolfsQuery } from 'graphql/generated'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'

export const GolfIndex = () => {
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
        <>
          <Card title={key.title} description={key.description} id={key.id} />
          <li key={key.id}>
            <Link to={`/golfs/${key.id}`}>
              {key.id}:{key.title}
            </Link>
          </li>
        </>
      ))}
    </>
  )
}

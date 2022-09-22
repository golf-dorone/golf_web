import { useGolfQuery } from 'graphql/generated'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GolfDetailCard } from './GolfDetailCard'
import { UpdateGolfForm } from './UpdateGolfForm'

export const Golf = () => {
  const { golfId } = useParams()
  if (!golfId) return null
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useGolfQuery({
    variables: {
      id: golfId,
    },
  })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!data) return
    console.log(data.golf)
  }, [data])

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>

  return (
    <>
      <h2>Single Post</h2>
      <div>
        <div>{data?.golf.id}</div>
        <div>{data?.golf.title}</div>
        <div>{data?.golf.description}</div>
      </div>
      <GolfDetailCard golf={data?.golf} />
      <UpdateGolfForm golf={data?.golf} />
    </>
  )
}

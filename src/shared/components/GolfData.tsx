import { useGolfQuery } from 'graphql/generated'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GolfDetailCard } from './GolfDetailCard'
import { UpdateGolfForm } from './UpdateGolfForm'

export const GolfData = (props: any) => {
  const { isAdmin } = props
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
      {isAdmin ? (
        <UpdateGolfForm golf={data?.golf} />
      ) : (
        <GolfDetailCard golf={data?.golf} />
      )}
    </>
  )
}

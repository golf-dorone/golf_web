import { useGolfsQuery } from 'graphql/generated'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const CustomerTop = () => {
  const golfsQuery = useGolfsQuery()

  useEffect(() => {
    if (!golfsQuery.data || !golfsQuery.data?.golfs) return
    console.log(golfsQuery.data.golfs)
  }, [golfsQuery.data])

  if (golfsQuery.loading) return <p>Loading</p>
  if (golfsQuery.error) return <p>Error</p>

  return (
    <div style={{ margin: 'auto', width: '1000px' }}>
      <h1>カスタマーTOP</h1>
      <div>
        {golfsQuery?.data?.golfs.map((key) => (
          <>
            <p>{key.title}</p>
            <br />
            <p>{key.description}</p>
          </>
        ))}
      </div>
      <div>
        <Link to="/auth/signin">サインイン</Link>
      </div>
      {/* <div>
        <Link to="/blogs">記事一覧画面</Link>
      </div> */}
    </div>
  )
}

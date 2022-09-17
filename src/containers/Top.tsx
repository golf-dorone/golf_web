import { useGolfsQuery } from 'graphql/generated'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Top = () => {
  const golfsQuery = useGolfsQuery()

  useEffect(() => {
    if (!golfsQuery.data || !golfsQuery.data?.golfs) return
    console.log(golfsQuery.data.golfs)
  }, [golfsQuery.data])

  if (golfsQuery.loading) return <p>Loading</p>
  if (golfsQuery.error) return <p>Error</p>

  return (
    <div style={{ margin: 'auto', width: '1000px' }}>
      <h1>ブログアプリ</h1>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>
      <div>
        <Link to="/blogs">記事一覧画面</Link>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { axiosInstance } from '../../shared/utils/axios.js'

type BlogList = [{ id: string; title: string }]

export const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogList>()

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get('/blogs')
      setBlogs(res.data)
    }
    f()
  }, [])

  return (
    <div style={{ margin: 'auto', width: '1000px' }}>
      <h1>ブログ一覧画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>
      <div>
        <ul>
          {blogs?.map((b: any) => (
            <Link to={`/blogs/${b.id}`} key={b.id}>
              <li>{b.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

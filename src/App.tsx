import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Top } from 'containers/Top'
import { CreateBlog } from 'routes/createBlog'
import { Blogs } from 'routes/blogs'
import { Blog } from 'routes/blog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Top />} />
        <Route path="create" element={<CreateBlog />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

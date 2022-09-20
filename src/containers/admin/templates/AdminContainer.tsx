import { Link } from 'react-router-dom'
import { GolfList } from 'shared/components/GolfList'
// import { AdminNavBar } from '../organisms/AdminHeader'

export const AdminContainer = () => {
  return (
    <>
      <div>Admin top</div>
      <GolfList />
      {/* <AdminNavBar /> */}
      {/* <SignInForm /> */}
      <Link to="/admin/signup">サインアップ</Link>
      <br />
      <Link to="/admin/signout">サインアウト</Link>
      <br />
      <Link to="/admin/create">ゴルフ場情報新規作成</Link>
      <br />
    </>
  )
}

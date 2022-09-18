import { Link } from 'react-router-dom'

export const AdminTop = () => {
  return (
    <div>
      <p>Admin Top</p>
      <div>
        <Link to="/auth/signout">サインアウト</Link>
      </div>
    </div>
  )
}
import { Navigate, useOutletContext } from 'react-router-dom'
import { SignInForm } from '../organisms/SignInForm'

export const AdminContainer = () => {
  const [isAuthorized] = useOutletContext<[boolean]>()

  if (isAuthorized) return <Navigate to={'/auth/admin'} />
  return <SignInForm />
}

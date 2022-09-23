import { GolfIndex } from 'shared/components/GolfIndex'
import { CustomerFooter } from './CustomerFooter'
import { CustomerHeader } from './CustomerHeader'

export const CustomerTopContainer = () => {
  return (
    <>
      <CustomerHeader />
      <GolfIndex isAdmin={false} />
      <CustomerFooter />
    </>
  )
}

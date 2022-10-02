import { GolfIndex } from 'shared/components/GolfIndex'
import { CustomerFooter } from './CustomerFooter'
import { CustomerHeader } from './CustomerHeader'
import { CustomerMenuBar } from './CustomerMenuBar'
import { CustomerTopHeader } from './CustomerTopHeader'

export const CustomerTopContainer = () => {
  return (
    <>
      <CustomerTopHeader />
      <CustomerMenuBar />
      <CustomerHeader />
      <GolfIndex isAdmin={false} />
      <CustomerFooter />
    </>
  )
}

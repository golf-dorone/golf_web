import { GolfIndex } from 'shared/components/GolfIndex'
import { HeaderLine } from 'shared/components/HeaderLine'
import { CustomerFooter } from './CustomerFooter'
import { CustomerHeader } from './CustomerHeader'
import { CustomerMenuBar } from './CustomerMenuBar'

export const CustomerTopContainer = () => {
  return (
    <>
      <HeaderLine />
      <CustomerMenuBar />
      <CustomerHeader />
      <GolfIndex isAdmin={false} />
      <CustomerFooter />
    </>
  )
}

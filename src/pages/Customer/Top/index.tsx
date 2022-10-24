import { GolfIndex } from 'shared/components/GolfIndex'
import { GolfList } from 'shared/components/GolfList'
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
      <div>
        <p>※ゴルフ場紹介ブログ表示イメージ</p>
        <GolfList description="ここに記事本文が入ります..." isSample />
      </div>
      <CustomerFooter />
    </>
  )
}

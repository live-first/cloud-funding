import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { HomeView } from '@/views/home'
import { LeftMenuView } from '@/views/leftMenu'

export default function Home() {
  return (
    <LeftMenuLayout header={<GlobalHeader />} left={<LeftMenuView url='/' />} main={<HomeView />} />
  )
}

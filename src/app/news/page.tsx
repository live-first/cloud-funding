import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { HomeView } from '@/lf-views/home'
import { LeftMenuView } from '@/lf-views/leftMenu'

export default function News() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/news' />}
      main={<HomeView />}
    />
  )
}

import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'
import { NewsView } from '@/lf-views/news'

export default function News() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/news' />}
      main={<NewsView />}
    />
  )
}

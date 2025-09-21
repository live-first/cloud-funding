import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'
import { NewsView } from '@/views/news'

export default function News() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/news' />}
      main={<NewsView />}
    />
  )
}

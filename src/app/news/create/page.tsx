import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'
import { NewsCreateView } from '@/lf-views/news/create'

export default function NewsCreate() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/news' />}
      main={<NewsCreateView />}
    />
  )
}

import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'
import { NewsCreateView } from '@/views/news/create'

export default function NewsCreate() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/news' />}
      main={<NewsCreateView />}
    />
  )
}

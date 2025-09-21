import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { CategoryUpdateView } from '@/views/category/update'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'

export default function CategoryDetail() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/categories' />}
      main={<CategoryUpdateView />}
    />
  )
}

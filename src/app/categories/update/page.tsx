import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { CategoryUpdateView } from '@/lf-views/category/update'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'

export default function CategoryDetail() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/categories' />}
      main={<CategoryUpdateView />}
    />
  )
}

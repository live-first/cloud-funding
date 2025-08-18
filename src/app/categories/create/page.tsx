import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { CategoryCreateView } from '@/lf-views/category/create'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'

export default function CategoryCreate() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/categories' />}
      main={<CategoryCreateView />}
    />
  )
}

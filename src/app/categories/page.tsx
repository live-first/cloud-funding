import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { CategoriesView } from '@/lf-views/category'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'

export default function Categories() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/categories' />}
      main={<CategoriesView />}
    />
  )
}

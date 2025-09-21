import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { CategoriesView } from '@/views/category'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'

export default function Categories() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/categories' />}
      main={<CategoriesView />}
    />
  )
}

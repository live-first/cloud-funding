import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { CategoryCreateView } from '@/views/category/create'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'

export default function CategoryCreate() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/categories' />}
      main={<CategoryCreateView />}
    />
  )
}

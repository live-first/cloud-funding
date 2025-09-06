import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { AuditionCreateView } from '@/lf-views/auditions/create'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'

export default function CategoryCreate() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/auditions' />}
      main={<AuditionCreateView />}
    />
  )
}

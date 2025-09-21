import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { AuditionCreateView } from '@/views/auditions/create'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'

export default function CategoryCreate() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/auditions' />}
      main={<AuditionCreateView />}
    />
  )
}

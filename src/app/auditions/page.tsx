import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { AuditionsView } from '@/lf-views/auditions'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'

export default function Auditions() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/auditions' />}
      main={<AuditionsView />}
    />
  )
}

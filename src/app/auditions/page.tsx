import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { AuditionsView } from '@/views/auditions'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'

export default function Auditions() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/auditions' />}
      main={<AuditionsView />}
    />
  )
}

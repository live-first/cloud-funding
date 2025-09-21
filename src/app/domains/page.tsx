import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { DomainsView } from '@/views/domains'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'

export default function Domains() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/domains' />}
      main={<DomainsView />}
    />
  )
}

import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { DomainsView } from '@/lf-views/domains'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'

export default function Domains() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/domains' />}
      main={<DomainsView />}
    />
  )
}

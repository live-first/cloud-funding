import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { EventsView } from '@/views/events'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'

export default function Auditions() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/events' />}
      main={<EventsView />}
    />
  )
}

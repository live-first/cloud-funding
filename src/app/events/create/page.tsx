import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { EventCreateView } from '@/views/events/create'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'

export default function CategoryCreate() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/events' />}
      main={<EventCreateView />}
    />
  )
}

import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { EventDetailView } from '@/views/events/detail'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'

export default function CategoryCreate(props: { params: { id: number } }) {
  const { params } = props
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/events' />}
      main={<EventDetailView id={params.id} />}
    />
  )
}

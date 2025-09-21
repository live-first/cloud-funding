import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { AuditionDetailView } from '@/views/auditions/detail'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'

export default function CategoryCreate(props: { params: { id: number } }) {
  const { params } = props
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/auditions' />}
      main={<AuditionDetailView id={params.id} />}
    />
  )
}

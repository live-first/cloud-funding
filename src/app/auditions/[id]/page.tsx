import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { AuditionDetailView } from '@/lf-views/auditions/detail'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'

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

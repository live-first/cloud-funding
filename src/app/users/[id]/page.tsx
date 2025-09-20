import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'
import { UsersDetailView } from '@/lf-views/users/detail'

export default function CategoryCreate(props: { params: { id: number } }) {
  const { params } = props
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/users' />}
      main={<UsersDetailView id={params.id} />}
    />
  )
}

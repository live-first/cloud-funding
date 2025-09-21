import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'
import { UsersDetailView } from '@/views/users/detail'

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

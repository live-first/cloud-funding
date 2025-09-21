import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'
import { UsersCreateView } from '@/views/users/create'

export default function NewsCreate() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/users' />}
      main={<UsersCreateView />}
    />
  )
}

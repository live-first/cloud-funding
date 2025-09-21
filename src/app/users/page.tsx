import { LeftMenuLayout } from '@/layouts/LeftMenuLayout'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { LeftMenuView } from '@/views/leftMenu'
import { UsersView } from '@/views/users'

export default function Users() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/users' />}
      main={<UsersView />}
    />
  )
}

import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'
import { UsersView } from '@/lf-views/users'

export default function Users() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/users' />}
      main={<UsersView />}
    />
  )
}

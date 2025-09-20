import { LeftMenuLayout } from '@/lf-layouts/LeftMenuLayout'
import { GlobalHeader } from '@/lf-views/header/GlobalHeader'
import { LeftMenuView } from '@/lf-views/leftMenu'
import { UsersCreateView } from '@/lf-views/users/create'

export default function NewsCreate() {
  return (
    <LeftMenuLayout
      header={<GlobalHeader />}
      left={<LeftMenuView url='/users' />}
      main={<UsersCreateView />}
    />
  )
}
